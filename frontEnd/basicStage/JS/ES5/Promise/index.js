// MyPromise私有属性名
const [State, Result, TaskQueue] = [Symbol('state'), Symbol('result'), Symbol('taskqueue')];

// MyPromise状态
const [PENDING, FULFILLED, REJECTED] = ['pending', 'fulfilled', 'rejected'];

// 更改MyPromise状态和数据
const changeStateAndResult = (promise, state, result) => {
    if (promise[State] !== PENDING) return false;

    promise[State] = state;
    promise[Result] = result;

    return true;
};

// 将MyPromise对象状态变更为fulfilled，并将任务队列中的所有onFulfilled回调函数按序一一加入到事件队列的微队列中
const resolve = function(value) {
    // 0、变更状态和数据
    if (!changeStateAndResult(this, FULFILLED, value)) return;
    // 1、将任务队列中的所有onFulfilled回调函数加入到事件队列的微队列中
    appendMicroQueue(this, FULFILLED);
};

// 将MyPromise对象状态变更为rejected，并将任务队列中的所有onRejected回调函数按序一一加入到事件队列的微队列中
const reject = function(reason) {
    // 0、变更状态和数据
    if (!changeStateAndResult(this, REJECTED, reason)) return;
    // 1、将任务队列中的所有onRejected回调函数加入到事件队列的微队列中
    appendMicroQueue(this, REJECTED);
};

// 将handler加入到MyPromise任务队列中
const pushTaskQueue = (taskQueue, state, handler, resolve, reject) => taskQueue.push({
    state,
    handler,
    resolve,
    reject
});

// 清空MyPromise中taskQueue
const clearTaskQueue = (taskQueue) => taskQueue.length = 0;

// 将callback加入到事件队列的微队列中
const microTask = (() => {
    const isBrowserEnv = !!globalThis.MutationObserver;
    const isNodeEnv = !!globalThis.process && process.nextTick;
    const observerConfig = {
        childList: true
    };

    return (callback) => {
        if (isNodeEnv) {
            // node环境
            process.nextTick(callback);
        } else if (isBrowserEnv) {
            // browser环境，并支持MutationObserver
            const observer = new MutationObserver(callback);
            const targetDom = document.createElement('div');
            observer.observe(targetDom, observerConfig);
            targetDom.innerHTML = '0';
        } else {
            setTimeout(callback, 0);
        }
    };
})();

// 检测是否是MyPromise对象
const isMyPromise = promise => typeof promise === 'object' && typeof promise.then === 'function';

// 包装handler加入到事件队列的微队列中
const executeHandler = (promise, handler, resolve, reject) => {
    const callback = () => {
        try {
            if (typeof handler !== 'function') {
                promise.then(resolve, reject);
            } else {
                const result = handler(promise[Result]);
                if (isMyPromise(result)) {
                    result.then(resolve, reject);
                } else {
                    resolve(result);
                }
            }
        } catch (err) {
            reject(err);
        }
    };

    microTask(callback);
};

// 将MyPromise任务队列中fulfilled（或rejected）回调函数依次加入到事件队列微队列中
const appendMicroQueue = (promise, appendState) => {
    const taskQueue = promise[TaskQueue];
    taskQueue.forEach(({
        state,
        handler,
        resolve,
        reject
    }) => {
        if (appendState === state) executeHandler(promise, handler, resolve, reject);
    });

    clearTaskQueue(taskQueue);
};

// MyPromise静态方法统一处理
const myPromiseStaticHandler = (promiseArr, resolvedHandler, rejectedHandler) => new MyPromise((resolve, reject) => {
    const results = [];

    promiseArr.forEach((promise, i) => {
        promise.then(value => {
            results[i] = {
                status: FULFILLED,
                value
            };
            resolvedHandler(value, results, resolve, reject);
        }, reason => {
            results[i] = {
                status: REJECTED,
                reason
            };

            rejectedHandler(reason, results, reject, resolve);
        });
    });
});

// 将数组中MyPromise的TaskQueue清空
const clearTaskQueueOfPromises = (promiseArr, excludes) => {
    promiseArr.forEach((promise, i) => {
        if (Object.keys(excludes).includes(i)) return;

        clearTaskQueue(promise[TaskQueue]);
    });
};

class MyPromise {
    [State] = PENDING;
    [Result] = undefined;
    [TaskQueue] = [];
    constructor(executor) {
        try {
            executor(resolve.bind(this), reject.bind(this));
        } catch (err) {
            reject.call(this, err);
        }
    }

    static resolve(value) {
        return new MyPromise((resolve, reject) => {
            if (isMyPromise(value)) {
                value.then(resolve, reject);
            } else {
                resolve(value);
            }
        });
    }

    static reject(reason) {
        return new MyPromise((_, reject) => reject(reason));
    }

    static all(iterable) {
        const promiseArr = [...iterable],
            count = promiseArr.length;

        const resolvedHandler = (value, results, resolve) => {
            Object.keys(results).length === count && resolve(results.map(({
                value
            }) => value));
        };

        const rejectedHandler = (reason, results, reject) => {
            reject(reason);

            clearTaskQueueOfPromises(promiseArr, results);
        };

        return myPromiseStaticHandler(promiseArr, resolvedHandler, rejectedHandler);
    }

    static any(iterable) {
        const promiseArr = [...iterable],
            count = promiseArr.length;

        const resolvedHandler = (value, results, resolve) => {
            resolve(value);
            clearTaskQueueOfPromises(promiseArr, results);
        };

        const rejectedHandler = (reason, results, reject) => {
            Object.keys(results).length === count && reject({
                errors: results.map(({
                    reason
                }) => reason)
            });
        };

        return myPromiseStaticHandler(promiseArr, resolvedHandler, rejectedHandler);
    }

    static allSettled(iterable) {
        const promiseArr = [...iterable],
            count = promiseArr.length;

        const resolvedHandler = (value, results, resolve) => {
            Object.keys(results).length === count && resolve(results);
        };

        const rejectedHandler = (reason, results, reject, resolve) => {
            Object.keys(results).length === count && resolve(results);
        };

        return myPromiseStaticHandler(promiseArr, resolvedHandler, rejectedHandler);
    }

    static race(iterable) {
        const promiseArr = [...iterable],
            count = promiseArr.length;

        const resolvedHandler = (value, results, resolve) => {
            resolve(value);
            clearTaskQueueOfPromises(promiseArr, results);
        };

        const rejectedHandler = (reason, results, reject) => {
            reject(reason);
            clearTaskQueueOfPromises(promiseArr, results);
        };

        return myPromiseStaticHandler(promiseArr, resolvedHandler, rejectedHandler);
    }

    finally(handler) {
        const fn = () => {
            handler();
        };

        return this.then(fn, fn);
    }

    then(fulfilledHandler, rejectedHandler) {
        return new MyPromise((resolve, reject) => {
            // 0、当MyPromise对象状态为pending，则将fulfilledHandler、rejectedHandler加入到Mypromise对象的任务队列中，等待MyPromise对象到达settled阶段时，立即将任务队列中所有fulfilled（或rejected）回调函数加入到事件队列的微队列中。
            // 1、当MyPromise对象状态为fulfilled，则立即将fulfilledHandler加入到事件队列的微队列中
            // 2、当MyPromise对象状态为rejected，则立即将rejectedHandler加入到事件队列的微队列中
            const taskQueue = this[TaskQueue];
            switch (this[State]) {
                case PENDING:
                    pushTaskQueue(taskQueue, FULFILLED, fulfilledHandler, resolve, reject);
                    pushTaskQueue(taskQueue, REJECTED, rejectedHandler, resolve, reject);
                    break;
                case FULFILLED:
                    executeHandler(this, fulfilledHandler, resolve, reject);
                    break;
                case REJECTED:
                    executeHandler(this, rejectedHandler, resolve, reject);
                    break;
            }
        });
    }

    catch (rejectedHandler) {
        return this.then(null, rejectedHandler);
    }

    // 定义Object.prototype.toString返回值类型
    get[Symbol.toStringTag]() {
        return 'MyPromise';
    }
}




const iterable = new Array(10).fill(0);
iterable.forEach((_, i) => {
    const pro = new MyPromise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve(i);
                console.log(i, 'fulfilled');
            } else {
                reject(i);
                console.log(i, 'rejected');
            }
        }, Math.random() * 1000);
    });

    iterable[i] = pro;
});

const pro = MyPromise.race(iterable);


setTimeout(() => {
    console.log(pro)
}, 1000)

console.dir(Promise)

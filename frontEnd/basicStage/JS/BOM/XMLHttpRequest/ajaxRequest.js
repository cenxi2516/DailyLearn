const ajaxRequest = (url, config = {}) => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const {
        method = 'GET', headers = {}, body, timeout = 5E3
    } = config;

    let isTimeout = false;
    const timer = setTimeout(() => {
    	isTimeout = true;
    	xhr.abort();
    }, timeout);

    xhr.addEventListener('readystatechange', (e) => {
        const {
            readyState,
            status,
            statusText
        } = xhr;

        if (xhr.readyState === xhr.DONE) {
            if (status >= 200 && status <= 299) {
            	resolve(JSON.parse(xhr.responseText));
            } else {
            	reject(isTimeout?`timeout ${timeout}ms error`:`${status} ${statusText}`);
            }
            clearTimeout(timer);
        }
    });
    xhr.addEventListener('error', (e) => reject('请求配置错误'));

    // 请求行：配置请求方式、请求地址
    xhr.open(method, url);
    // 请求头：配置请求头
    for (const key in headers) {
        xhr.setRequestHeader(key, headers[key]);
    }
    // 请求体：配置请求体
    xhr.send(body);
});

ajaxRequest('https://study.duyiedu.com/api/herolist').then(data => {
	console.log(data);
}).catch(reason => {
	console.error(reason);
});

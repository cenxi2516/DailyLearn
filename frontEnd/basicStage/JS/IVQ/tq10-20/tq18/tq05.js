function test() {
    var food = '';
    var obj = {
        eatFood: function() {
            if (food !== '') {
                console.log('I am eating ' + food);
                food = '';
            } else {
                console.log('There is nothing!');
            }
        },
        pushFood: function(nothing) {
            food = nothing;
        }
    };

    return obj;
}

var person = test();

person.pushFood('apple');
person.eatFood();
person.eatFood();
person.pushFood('banana');
person.eatFood();

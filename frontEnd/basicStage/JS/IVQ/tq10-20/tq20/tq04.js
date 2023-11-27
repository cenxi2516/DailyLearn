var x = 1,
    z = y = 0;

function add(n) {
    return n = n + 1;
}

y = add(x);

function add(n) {
    return n = n + 3;
}

z = add(x);

console.log(x, y, z);

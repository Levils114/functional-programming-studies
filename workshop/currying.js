//Learning about currying

function plusValues(x){
    return (y) => {
        return (x+y);
    }
}
console.log(plusValues(2)(4));

const increment = plusValues(1);
console.log(increment(1));

const Ramda = require('ramda');

const add3 = Ramda.curry((x, y, z) => (x + y + z));
console.log(
    add3(1,3,4),
    add3(1)(3)(4),
    add3(1,3)(4),
    add3(1)(3,4)
)
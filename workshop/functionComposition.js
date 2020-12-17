// Learning about function composition

const { pipe, curry } = require("ramda");

const filter = curry((predicate, xs) => xs.filter(predicate));
const map = curry((mapper, xs) => xs.map(mapper));
const reduce = curry((reducer, initial, xs) => xs.reduce(reducer, initial));
const add = (x,y) => x + y;

function User(age, admin){
    return({age, admin});
}

const users = [
    User(25, true),
    User(17, false),
    User(22, true),
];

const adminUsers = user => user.admin;
const getAge = user => user.age;
const sum = reduce(add, 0)

const plusAdminUsersAge = pipe(filter(adminUsers), map(getAge), sum);

console.log(plusAdminUsersAge(users));
//Learnign about High Order Functions

const numbers = [1,2,3,4,5,6];

const double = x => x * 2;
const numbersDouble = numbers.map(x => double(x));
console.log(numbersDouble);

const isEven = x => x%2 === 0;
const numbersAreEven = numbers.filter(x => isEven(x));
console.log(numbersAreEven);

const plusNumbersValues = (x, y) => x+y;
const plusNumbers = numbers.reduce((x,y) => plusNumbersValues(x, y));
console.log(plusNumbers);

const asyncExample = () => Promise.resolve(1);
const valueToExample = asyncExample().then(x => x+1).then(x => console.log(x));

const withLog = fn => 
    (...args) => {
        console.log(`arguments:`, args)
        const result = fn(...args);
        console.log('result:', result);
        return result;
    }

const mult = (x,y) => x*y;
const auditMult = withLog(mult);
auditMult(2,3);
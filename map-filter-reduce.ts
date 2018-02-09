// Number first.

const numbers = [1, 2, 3];
console.log(numbers);

const numbersPlusTen = numbers.map(x => x + 10);
console.log(numbersPlusTen);
console.log(numbers);

const numbersTimesTwo = numbers.map(x => x * 2);
console.log(numbersTimesTwo);

// Even numbers of the array.
const evenNumbers = numbers.filter(x => x % 2 === 0);
console.log(evenNumbers);

const oddNumbersAfterTakingNumbersTimesThree = numbers
    .map(x => x * 3)
    .filter(x => x % 2 !== 0);

console.log(oddNumbersAfterTakingNumbersTimesThree); 

const sumOfOddNumbersAfterTakingNumbersTimesThree = numbers
    .map(x => x * 3)
    .filter(x => x % 2 !== 0)
    .reduce((runningTotal, num) => runningTotal + num);

console.log(sumOfOddNumbersAfterTakingNumbersTimesThree);  

//
// Now map, filter, and reduce with string arrays.
//

let strings: string[] = ["foo", "bar", "cat", "foobar"];
console.log(strings);

let helloStrings = strings.map(x => "Hello " + x);
console.log(helloStrings);

let liStrings = strings.map(x => `<li>${x}</li>`);
console.log(liStrings);

// Regular expressions !!!
const startWithFooStrings = strings.filter(x => /^foo/.test(x));
console.log(startWithFooStrings);

const stringOfFirstLetters = strings.reduce((acc, curr) => acc + curr[0], "hello ");
console.log(stringOfFirstLetters);

//
// Objects..
//

const cats = [
    { name: "Felix", type: "Tabby" }
    , { name: "Sam", type: "Tabby" }
    , { name: "Sua", type: "Siamese" }
];

console.log(cats);

const catsWithCheckedProperty = cats.map(x => ({checked: false, ...x })); // Spread operator
console.log(catsWithCheckedProperty);

const catsWithCheckedProperty2 = cats.map(x => ({ name: x.name, checked: false,  type: x.type, color: "blue" })); // Spread operator
console.log(catsWithCheckedProperty2);

let newArray = [];
for (let i = 0; i < cats.length; i++) {
    newArray.push({ name: cats[i].name, checked: false, type: cats[i].type, color: "blue" });
}

console.log(newArray);
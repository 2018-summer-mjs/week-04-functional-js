
// Cats
const cats = [
    { name: 'Felix', type: 'Tabby' }
    , { name: 'Sam', type: 'Tabby' }
    , { name: 'Sua', type: 'Siamese' }
];

const catNamesString = cats.reduce((a, c) => a + c.name, "");

console.log(catNamesString);


const catTypeCounts = cats.reduce((acc, cur) => {
    acc[cur.type] = (acc[cur.type] ||  0) + 1;
    return acc; 
}, {});

console.log(catTypeCounts);

console.log(undefined || 0);
console.log(1 || 0);
console.log(5 || 0);

for (let prop in catTypeCounts) {
    console.log(prop + ': ' + catTypeCounts[prop]);
}

// for (let hmm of catTypeCounts) {
//     console.log(hmm);
// }

//
// Build cats with checked boolean.
//

// Old instincts...
let newCatsArray = [];

for (let i = 0; i < cats.length; i++) {
    newCatsArray.push({ type: cats[i].type, name: cats[i].name, chacked: false });
}

console.log(newCatsArray);

// Map!!!
const catsWithCheckedBoolean = cats.map((c) => ({...c, checked: false }));

console.log(catsWithCheckedBoolean);

// Some spread operator exploration???

// Spread on objects!!!
let o = { foo: 1, bar: 2, cat: 3};
console.log(o);

console.log({dog: 4, ...o, parrot: 5});

// Spread on arrays...
let a = [1, 2, 3];
console.log([...a, 4, 5, 6]);


const books = [
    { title: "Foo", price: 10 }
    , { title: "Bar", price: 5 }
    , { title: "Cat", price: 15 }
];

// What does this give us?
const what = books
                .map((b) => ({ title: b.title, price: b.price * 1.10 }))
                .filter((b) => b.price > 7.50);

console.log(what);

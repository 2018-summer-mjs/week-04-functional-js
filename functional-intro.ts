//
// What is the benefit of using anonymous functions
// via lambdas over namved functions with the 'function'
// keyword?
//
// Consider...
//


//window.setTimeout();

//
// Hover over setTimeout() above and notice that the
// help popup in VS code uses lambda syntax to document
// the callback. So this is a good reason, but there's
// more...
// 

// step-04
console.log('Waiting...');

const addDash = () => { 
    console.log('-');
    console.log('another-line');
};

setTimeout(addDash, 5000); // 5 seconds...

// camelCase
// twoHumpCamel

// PascalCase

// snake_case_hisss

// kebab-case
// this-meat-and-veggies-on-a-skewer


// x
// y
// f

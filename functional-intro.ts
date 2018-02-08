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

console.log('Waiting...');

// step-01
function addDot() {
    console.log('.');
}

setTimeout(addDot, 5000); // 5 seconds...

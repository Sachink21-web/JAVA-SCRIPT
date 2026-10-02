
// Immediately Invoked Function Expression (IIFE)

(function name() { // yee hee named iife function hee
  console.log("Hello, World!");
})() ;// ye function ko turant call kr dega kyu ki humne iske baad () ka use kiya hee

( (name) => { // ye hee unnamed iife function hee
    console.log(`Hello ${name} `);
})('olive') // ye error dega kyu uper wala function end nhi hua hee
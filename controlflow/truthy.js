const useremail = ' '
if (useremail) {
  console.log('Email is valid');
} else {
  console.log('Email is invalid');
}

/* falsy values in JavaScript:
1. false
2. 0
3. -0
4. 0n (BigInt zero)
5. "", '', `` (empty string)
6. null
7. undefined
8. NaN

truthy values in JavaScript:
1. true
2. any non-zero number (positive or negative)
3. any non-empty string
4. any object (including empty objects and arrays)
5. any function
6. any symbol
7. any BigInt value other than 0n
8. any value that is not falsy
9. " "

In JavaScript, truthy values are those that evaluate to true in a boolean context, while falsy values evaluate to false.
*/

const array = [1, 2, 3];
if (array.length === 4) {
  console.log('Array is truthy') // this is how we check array in if and else statement.
} else {
  console.log('Array is falsy')
}

const Hope = {}

if (Object.keys(Hope).length === 0) {
  console.log('Object has 0 length') // this is how we check object in if and else statement.
}

// Nulish coalescing operator (??) 
const value = null ?? undefined ?? 'default';
console.log(value); // Output: 'default'
 
// ?? ye operator null ya undefined ko check karta hai aur agar dono null ya undefined ho to default value return karta hai.

let name = 5 ?? 10
console.log(name) // Output: 5 

let name1 = null ?? 10
console.log(name1) // Output: 10

let name2 = undefined ?? null
console.log(name2) // Output: null

let name3 = null ?? 20 ?? 30
console.log(name3) // Output: 20

let name4 = undefined ?? null ?? 40
console.log(name4) // Output: 40

// terniary opreator
// consition ? true : false

const age = 18;
const isAdult = age >= 10 ? console.log('You are an adult') : console.log('You are not an adult');
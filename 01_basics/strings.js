let stefan = 'love elena'
console.log(stefan)

const originalvampire = 'klaus mikelson'
let age = 1086
// console.log(vampire + age + "most strongest")

console.log(`hello love i am the hybrid ${originalvampire} and i am ${age} years old.........`)
// this is the moder way of string representation 

const newVamp = new String('DEMON')
console.log(newVamp)
// this is another way of string ddeclaration 

console.log(newVamp.length)
console.log(newVamp.__proto__)
console.log(newVamp.toLowerCase())
console.log(newVamp.charAt(4))
console.log(newVamp.indexOf('M'))

const oldvamp = newVamp.substring(0 , 3)
console.log(oldvamp)

const anothervamp = newVamp.slice(-4 , -2)
console.log(anothervamp)
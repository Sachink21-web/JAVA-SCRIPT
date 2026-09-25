const marvel_heros = ['thor', 'captain america', "iron man"]
// console.log(marvel_heros)
const Dc_heros = ['batman', 'superman', 'aqua man' ]
// console.log(Dc_heros)

// marvel_heros.push(Dc_heros) // push opreation array ko hi ek element ki tarah array me push krdeta hee
// console.log(marvel_heros)

const all_heros = marvel_heros.concat(Dc_heros) // concat shi tarike se do array ko merge krta hee
// console.log(all_heros)

// spread opreator

const allnewheros = [...Dc_heros, ...marvel_heros, ...['hulk']] // this is another type of merging two arrays isme elements indiviual hotee hee orr isme []krke add bhi kr skte hee
// console.log(allnewheros)

const newarray = [1,2,3,[4,5],6,[7,8,[9,10],11]]
// console.log(newarray)

const NEWARRAY = newarray.flat(Infinity) // array ke anderr jite bhi array hee unn sab lo ek array mee convert krta hee
// console.log(NEWARRAY)

// console.log(Array.isArray("prime"))
// console.log(Array.from("prime"))
console.log(Array.from({ name: 'sachin' })) // object iterable nahi hota, isliye [] deta hai

let transformer1 = "optimus"
let transformer2 = "bumbelbee"
let transformer3 = "bilkhead"


// console.log(Array.of(transformer1, transformer2, transformer3))
const A = 5
let B = 10
var C = 15
// {} // ye hee scope ye if else or function ke andar ka scope hota hee
if (true) {
  const A = 50
  let B = 100
  // console.log('inner:', A) // 50 ye block ke andar ka scope hee
  // console.log('inner:', B) // 100 kyu ki ye block ke andar ka scope hee
  // var C = 150 // isliye hum var use nhi krte hee kyuki isme variable ka scope function ke andar hota hee or function ke bahar bhi access ho jata hee
}

// console.log(A) // 5
// console.log(B) // 10
// console.log(C)

function one() {
  const username = 'klaus'

  function two() {
    const website = 'mysicfalls.com'
    console.log(username + website) // ye function ke andar ka scope hee
  }

  // console.log(website) // ye error dega kyu ki website ka scope function ke andar hee
  // two()
}

// console.log(username) // ye error dega kyu ki username ka scope function ke andar hee
// one()

// ye sam ehum if else ke ander bhi kr skte hee wo bhi scope hi hee
// let original = "klaus"
// // console.log(typeof original)

// function checkOriginal() {
//   if (original === undefined) {
//     console.log('plz bring klaus')
//   } else if (original === 'klaus') {
//     console.log('klaus is here')
//   }
// }

// checkOriginal()

addnum(5) // isko humm function ke pehle bhi call kr skte hee kyu ki ye function declaration hee
function addnum(num1){
    return num1+3
}
console.log(addnum(5))
const anotherno = function(num1){
    return num1+8
}
console.log(anotherno(5)) // isko humm function ke pehle call nhi kr skte hee kyu ki ye function expression hee or isko hume variable ke andar store kiya hee
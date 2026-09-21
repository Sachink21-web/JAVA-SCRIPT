let state = null
console.log(state)
console.log(2>1)

let rollno = "IT113"
console.log(typeof rollno);

let newrollno = Number(rollno)
console.log(typeof newrollno)
console.log(newrollno)

/*
DATA TYPE CONVERSION
"113" easily convert ho jata hee 33 numbeer mee iska type Number hee
"IT113" number mee convertkrne mee NaN aata hee but iska type Number hii hee
boolean mee "true" ya "false" convert krne mee 1 ya 0 aata hee
*/


let Studentispresent = "meee"
console.log(Studentispresent)

let checkStudentispresent = Boolean(Studentispresent)
console.log(checkStudentispresent)
/*
DATA TYPE CONVERSION
"meee" boolean mee convert krne mee true aata hee
"" boolean mee convert krne mee false aata hee
*/

let anynumber = 123
console.log(anynumber)

let stringnumber = String(anynumber)
console.log(stringnumber)
console.log(typeof stringnumber)
/*
DATA TYPE CONVERSION
123 string mee convert krne mee "123" aata hee
*/
// ******************opreations*****************

let age = 1
let negage = -age
console.log(negage)

// // basics opreations
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/8)
// console.log(2%3)
// console.log(2**5) // 2 ki power 2

// let a = 2
// let b = 3
// let c = a + b
// console.log(c)


// console.log("2"+4)
// console.log(4+"2")
// console.log("2"+4+4)
// console.log(4+4+"2")

// console.log(+false)
// console.log(true+true)
// console.log(true+false)
// console.log(false+true)
// 
// let score = 100
// let bonus = "100"
// let totalScore = score + bonus
// console.log(totalScore)
// console.log(typeof totalScore)
let score = 100
++score
console.log(score)

let x = 4
let y = x++
console.log(x , y) // here x is 5 and y is 4 because y is assigned the value of x before incrementing and x is incremented after the assignment.    

let a = 4
let b = ++a
console.log(a , b) // here a is 5 and b is 5 because a is incremented before the assignment and b is assigned the value of a after incrementing.
const dArray = [1, 2, 3, 4, 5, 'vampires']
// console.log(dArray[5])

const newarray = new Array(1, 2, 3, 4, 5,6,8,8770)
// console.log(newarray)

// array methods
const fruits = ['apple', 'banana', 'mango', 'grapes']
// console.log(fruits)
// fruits.push('kiwi') // add new element at the end of the array
// console.log(fruits) 
// fruits.pop()    // remove last element from the array
// console.log(fruits)
// fruits.unshift('gauva') // shift all the elements of the array
// console.log(fruits)
// fruits.shift() // remove the first element of the array
// console.log(fruits)

// console.log(fruits.includes('pineapple')) //tells that element is present or not in the array
// console.log(fruits.includes('banana'))

// console.log(fruits.indexOf('banana')) // tells the placing of the element in the array
// console.log(fruits.indexOf('pineapple')) // always give an output-1 for the element which is not present in the array

const NEW = fruits.join()
// console.log(fruits)
// console.log(NEW)
// console.log(typeof NEW)

// slice or splice
console.log('A', fruits)

const NEWARR = fruits.slice(1, 3) // DO NOT PRINT THE LAST ELEMENT OF RANGE AN IT DOESNOT MANIPULATE THE OUR ARRAY
console.log(NEWARR)

console.log('B', fruits)

const NEWARR1 = fruits.splice(1, 3) // IT PRINTS THE ELEMENTS IN GIVEN RANGE INCLUDE BUT IT MANIPULATE THE ARRAY 
console.log('C', fruits)
console.log(NEWARR1)

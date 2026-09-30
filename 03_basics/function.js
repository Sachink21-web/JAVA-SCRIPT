// console.log('s')
// console.log('a')
// console.log('c')
// console.log('h')
// console.log('i')
// console.log('n')

function saymyname (){// this the way of assining new function
    console.log('s')
console.log('a')
console.log('c')
console.log('h')
console.log('i')
console.log('n')
}
// saymyname() //this is how we call the function

// now we create a very basics function

function addingtwonumbers(num1, num2){ // idhar num1 and num 2 hamre parameters hee
// console.log(num1 + num2)
}
//************* ye saree output isliye diyee hee kyuki humne function ko sirf add krne ko bola datatype check krne ko nhi
// addingtwonumbers (10, 9) // isme toh basic do numbers add honge 19 milegga
// addingtwonumbers(3, '4') // output 34
// addingtwonumbers (3, true) // true matlb 1 toh add hoke 4
// addingtwonumbers(3, null)// ye simply 3 hi print karega
// addingtwonumbers(3,"a") // ye a or 3 ko ek sath likh dega 3a

const newnum = addingtwonumbers( 5, 9)
// console.log('result:', newnum) // isme value undefined ayegi kyuki yha bss ek console print ho rha hee function return nhi ho rha hee

function addingtwonumbers1(number1, number2){  
// const result = (number1 + number2)
// return result // return kee baad kabhi function kmm nhi krega uske uper hi krega
return (number1 + number2) // ek tarika ye hee
}
const newnum2 = addingtwonumbers1(5, 9)
// console.log('result:', newnum2) 


function loggedin(username = 'Kathrine') { // yha pe hum deafult value bhi dee skte hee
    if (!username){//(username === undefined)    // ! ye symbol true ko false mee or vice versa krdeta hee
        console.log('please enter user name')
        return
    }
    return `${username} just logged in`
}

// console.log(loggedin('Alaric'))  
console.log(loggedin('Alaric'))  // isme undefined output ayega


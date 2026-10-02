const user = {
    username: 'Enzo',
    price: 333,

    welcome: function() {
        console.log(`Welcome ${this.username} your price is ${this.price}`)
        // console.log(this) // ye user object ko return karega
    }
}

// user.welcome() // Welcome Enzo your price is 333
// user.username = "bonnie"
// user.welcome() // Welcome bonnie your price is 333
// console.log(this) // ye window object ko return karega

function protein() {
    let Noble = 'elijah' // ye function ke andar ka scope hee
    console.log(this) // ye window object ko return karega
    console.log(this.Noble) // ye undefined return karega kyu ki Noble ka scope function ke andar hee
}

// protein()

const chai = function() {
    let Noble = 'elijah' // ye function ke andar ka scope hee
    console.log(this) // ye window object ko return karega
    console.log(this.Noble) // ye undefined return karega kyu ki Noble ka scope function ke andar hee
}

// chai()

const coffee = () => { // ye arrow function hee
    let Noble = 'elijah' // ye function ke andar ka scope hee
    console.log(this) // ye window object ko return karega
    console.log(this.Noble) // ye undefined return karega kyu ki Noble ka scope function ke andar hee
}

// chai()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addtwo(5, 10)) // 15

// const addtwo = (num1, num2) => num1 + num2 // isko bolte hee implicit return kyu ki humne return keyword ka use nhi kiya hee or humne curly braces ka use nhi kiya hee
// const addtwo = (num1, num2) => (num1 + num2)// isme return keyword nhi chaiye wo sirf curly braces ke anderr hoga
// console.log(addtwo(5, 10)) // 15

     

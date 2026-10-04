const tempreature = 35;

if (tempreature > 30) {
    // console.log("It's a hot day");
} else {
    // console.log("It's not a hot day");
}

// < , > , <= , >= , == , === , != , !==
 let score = 100;
if (score >= 90) {
    const student = 'pass' // agr hum yha var use krte toh ye ek pura global scope bn jata
    // console.log(`You have ${student}ed the exam`);
}
// console.log(`You have ${student}ed the exam`); // ye error dega kyu ki humne student ko if block ke andar declare kiya hee to ye sirf if block ke andar hi accessible hee

const balance = 1000;
// if(balance > 500) console.log("You can buy this product"); // ye single line if statement hee implicit scope

// if(balance < 500) {
//     console.log("You can buy this product")
// } else if(balance < 750) {
//     console.log("You can buy this product with combo")
// } else if(balance < 1250) {
//     console.log("You can buy this product with extra accessories")
// }

let userloggedin = true;
let userhavedebitcard = false;

// if(userloggedin && userhavedebitcard) { // yha pe && ka matlab hee dono condition true honi chahiye
//     console.log("You can buy this product");
// } 

//  
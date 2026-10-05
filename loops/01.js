// FOR LOOP

for ( let index = 0; index <= 10; index++ ) {
    let element = index
    if (element == 5) {
        // console.log('Element is found')
    }
    // console.log(element)
}   

// console.log(element) // ReferenceError: element is not defined outside the loop

for (let index = 0; index <= 10; index++) {
    // console.log(`this is first loop ${index}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`this is second loop ${j}`)
        // console.log(`i * j = ${index*j}`)
    }
}

let array = ['Captain America' , 'Ironman' , "Thor"]
for (let index = 0; index < array.length; index++) { // ++ ke bina loop first element hi chalta jayega
    const element = array[index];
    // console.log(element);
    
}

// for (let index = 1; index <= 10; index++) {
// if (index == 5){
// console.log(`detected 5`);
// break // ye ek baar condition true hone ke baad ruk jata hee
// }
// console.log(`the value is ${index}`);
// }

for (let index = 1; index <= 10; index++) {
if (index == 5){
console.log(`detected 5`);
continue // yee particular condition ko true hone ke baad uske agge ke element ko print kr deta he
}
console.log(`the value is ${index}`);
}
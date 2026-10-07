//////////FOR EACH LOOP


let myarr = [2,4,6,8,10]

// myarr.forEach(function (values) { 
//     console.log(values);
    
// })

myarr.forEach( (values) => {
// console.log(values);// ye arrow functuion ke through call kra hee

})

function printMe (item){
    console.log(item);
    
}
// myarr.forEach( printMe) // aisee function ko pehle define krke bhi call kr skte hee

myarr.forEach((value , index , arr )=> {
    // console.log(value , index , arr);
    
})

let students = [
    { 
        name: 'sanskar',
        roll: 118
},
    { 
        name: 'pranav',
        roll: 100
},
    { 
        name: 'sachin',
        roll: 113
}
]

students.forEach( (values)=> {
    // console.log(values.name); // isse array ke ander ki properties easy access kr skte hee
    
}) 
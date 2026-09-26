// objects jab constructor se banta hee wo singleton hota he
// Object.create ye hee constructor ka tariaka
let sym1 = Symbol('Caroline') // symbol define krne ka tarika
// console.log(typeof sym1) 

let klaus = {
  name: 'original Hybrid',
 "fullname": "Klaus Mikelson",
  [sym1] : "Caroline", // ye hee proper tarika symbol lo array mee define krna orr iska data type bhi symbol hii hee
  Age: 1086,
  Sibling : 'Rebekah',
  isalive: false,
  lastseen: ['New orleans', 'mysic falls']

};
// console.log(klaus.isalive); ye bhi tarika hee lakin yee har bar kmm nhi atta
//console.log(klaus.fullname) // ye error dega 

// console.log(klaus["fullname"])
// console.log(klaus.sym1) // ye sym1 ka output toh de rha hee lakin iska data type string hee
// console.log(typeof klaus[sym1]) ye hee shi trika

klaus.Age = 1200 // aisee object ki value ko change or overwrite kr skte hee
// console.log(klaus.Age)

//Object.freeze(klaus) // ye object ki values ko freeze kr deta hee

klaus.sibling = function () {
  console.log('Kol');
};
console.log(klaus.sibling())

klaus.sibling2 = function (){
    console.log(`klaus favroite sibling is ${this.Sibling}`) // isme string interpolation use kiya hee ` backticks ke sath
}

console.log(klaus.sibling2())

console.log(klaus)
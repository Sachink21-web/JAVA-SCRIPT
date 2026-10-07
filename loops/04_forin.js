let heros = {
   hero1: 'captain america',
   hero2: 'Thor',
   hero3: 'iron man'
}

for (const key in heros) {
// console.log(heros[key]);
// console.log(`our top three heros are ${key} : ${heros[key]}`);

}

let myarr = [1,2,3,4,5,6]

for (const key in myarr) {
    // console.log(myarr[key]); 
}

  const map = new Map()
    map.set ('in' , 'India')
    map.set ('in' , 'India') 
    map.set ('RS' , 'Russia')
    map.set ('us' , 'united sates of america')

    for (const key in map) {
    //  console.log(map); // ye output nhi dega kyuki map iterable nhi heefor in loop me
     }
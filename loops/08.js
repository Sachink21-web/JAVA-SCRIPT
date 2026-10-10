
const arr = [1,2,3]

// let total = arr.reduce(function (acc, crrval) {
//     console.log(`acc ${acc} and crr ${crrval}`);
//     return acc + crrval;
// }, 0)

let total = arr.reduce( (acc , crrval) => acc+crrval , 0 )
console.log(total);


let cart = [
    {
        item : 'denime jeans',
        price : 999

    },
    {
        item : 'black tshirt',
        price :599

    },
    {
        item : 'black leather jacket',
        price : 3999

    },
]


let totalcart = cart.reduce ( (acc , totalbill) => acc + totalbill.price , 0 )
console.log(totalcart);

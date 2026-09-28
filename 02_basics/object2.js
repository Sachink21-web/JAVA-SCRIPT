// const Freya = {

//     age: 1000
// }
// console.log(Freya)
// ye hee normal tarika isme singleton object nhi hota

let Vampires = {}

Vampires.name = 'stefan' , 'demon'
Vampires.age = 171 , 200
Vampires.surname = "salvatore"

// console.log(Vampires)

const klaus = {
name: 'klaus mikelson',
age: 1086,
siblings: {
 //aisee object ke anderr object de skte or nest create kr skte hee
    originalfamily: {
        sibling1: 'finn',
        sibling2: 'elijah',
        sibling3: 'kol',
        sibling4: 'rebekah'
    }
}
}
// console.log(klaus.siblings.originalfamily.sibling2) // jitta nest mee ander jana hee . laga ke access krr skte hee

const ragnar = {SON1 : 'BJORN IRONSIDE', SON2: 'UBEE', SON3:'IVAR' }
const esther= {SON4:"FINN", SON5:"ELIJAH", SON6:'NIKLAUS'}
const odin= {SON7:'THOR', SON8:"LOKI"}

// const allmighty = {ragnar, esther,odin} // this will not combine all 3 properly
// const allmighty = Object.assign({},ragnar, esther, odin) // yhaa pee yee {} isliye lagate hee kyuki ye target bntss hee jiss humra object same rheega although output bina lagye bhi same hi ayega 

const allmighty = {...ragnar, ...esther, ...odin} // this is the new,modern and easy way
// console.log(allmighty)

const user = [
    {
        customer1: {
            name: 'goku',
            age: 100
        }
    },
    {
        customer2: {
            name: 'vegeta',
            age: 200
        }
    }
]
// console.log(user[1].customer2.name) yee aisee jbb arayy ke anderr bahut saree object hoo toh aisee access krte hee
// console.log(Vampires)

// console.log(Object.keys(Vampires))// agrr mujeee objectss ke sari keys access krni hoo orr iska output array mee atta hee
// console.log(Object.values(Vampires)) // ye object ki values access krne mee kmm atta hee
// console.log(Object.entries(Vampires)) // ye sari entries nikalne ke kmm ataa hee
// console.log(Vampires.hasOwnProperty('surname')) // ye check krta hee kya ye property isme present hee ya nhi
// console.log(Vampires.toLocaleString(5))

const world = {

    vampires: 'klaus mikelson',

    witches: "bonnie bennet",

    werewolf: 'tyler lockwood'

}

// console.log([world.werewolf]) ye normal tarika hee

// destructure
const {werewolf} = world // ye hee destructure ka tarika
console.log(werewolf)

const {witches:bennet} = world // aisee humm log iska kuch alag se bhi naam de skte hee
console.log(bennet)
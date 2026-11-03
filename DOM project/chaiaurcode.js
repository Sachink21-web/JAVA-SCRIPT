const mybuttons = document.querySelectorAll('.button')
// console.log(mybuttons)
const mybody = document.querySelector('body')

mybuttons.forEach((button) => {
    button.addEventListener('click', function (e){
        if (e.target.id === 'yellow') {
            mybody.style.backgroundColor = e.target.id
        }
    })
})
mybuttons.forEach((button) => {
    button.addEventListener('click', function (e){
        if (e.target.id === 'blue') {
            mybody.style.backgroundColor = e.target.id
        }
    })
})
mybuttons.forEach((button) => {
    button.addEventListener('click', function (e){
        if (e.target.id === 'grey') {
            mybody.style.backgroundColor = e.target.id
        }
    })
})
mybuttons.forEach((button) => {
    button.addEventListener('click', function (e){
        if (e.target.id === 'purple') {
            mybody.style.backgroundColor = e.target.id
        }
    })
})

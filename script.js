const btn = document.querySelector('#btn')
const msg = document.querySelector('#msg')
const btn2 =document.querySelector('#btn2')
const input =document.querySelector('#name')
const list =document.querySelector('#names')
const form =document.querySelector('#signup')


function showMessage() {
    msg.textContent = 'Hello welcome to Javascript' ;
}
function greetings() {
    msg.textContent = 'Good morning'
    console.log(greetings)
}

btn2.addEventListener('click', greetings)

btn.addEventListener('click',showMessage)

/*input.addEventListener('input', (event) => {
    console.log(event.type) //input
    console.log(event.target)//the <input>
    console.log(event.target.value)//typed text
})

document.addEventListener('click', (e) => {
    console.log(e.clientX, e.clientY) //pointer
})*/

//prevent default
form.addEventListener('submit',(event) =>{
    event.preventDefault()
    const name = input.value.trim()
    if (name === "") return
    const li = document.createElement('li')
    li.textContent = name
    list.appendChild = (li)
    form.request()

})

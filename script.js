const btn = document.querySelector('#btn')
const msg = document.querySelector('#msg')

function showMessage() {
    msg.textContent = 'Hello, Javascript' ;
}

btn.addEventListener('click',showMessage)
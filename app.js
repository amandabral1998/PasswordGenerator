const input = document.getElementById('input-value')

const generateBtn = document.getElementById('generateBtn')

const capitalLetters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const smallLetters = "abcdefghijklmnopqrstuvwxyz"

const symbols = "[,],{,},@,#,$,%,^,&,*,!"

const numbers = "0123456789"

let length= 12

let allChar = capitalLetters + smallLetters + numbers + symbols

generateBtn.addEventListener('click', ()=>{
    let password = ""

    password+= capitalLetters[Math.floor(Math.random()*capitalLetters.length)]
    password+= smallLetters[Math.floor(Math.random()*smallLetters.length)]
    password+= numbers[Math.floor(Math.random()*numbers.length)]
    password+= symbols[Math.floor(Math.random()*symbols.length)]


    while (length> password.length) {
        password+= allChar[Math.floor(Math.random()*allChar.length)]
    }

    input.value= password
})
'use strict'

const button = document.querySelector('button.botao')
const form = document.getElementById('form')
const username = document.getElementById('nome')
const sobrenome = document.getElementById('sobrenome')
const email = document.getElementById('email')
const senioridade = document.getElementById('senioridade')

button.addEventListener('click', (e) => {

    e.preventDefault()
    checkInputs()
})

function checkInputs(){
    //get the values from  inputs
    const usernameValue = username.value.trim();
    const sobrenomeValue = sobrenome.value.trim();
    const senioridadeValue = senioridade.value.trim();
    const emailValue = email.value.trim();
    let formValidation = 0;

    if(usernameValue === ''){
        setErrorFor(username, 'Campo obrigatório')

    }else{
        setSuccessFor(username)
        formValidation++
    }

    if(sobrenomeValue === ''){
        setErrorFor(sobrenome, 'Campo obrigatório')

    }else{
        setSuccessFor(sobrenome)
        formValidation++
    }

    if(emailValue === ''){
        setErrorFor(email, 'Campo obrigatório')

    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'E-mail inválido')

    }else{
        setSuccessFor(email)
        formValidation++
    }

    if(senioridadeValue === ''){
        setErrorFor(senioridade, 'Selecione sua senioridade')

    }else if (senioridadeValue !== ''){
        senioridadeSuccess(senioridade)
        formValidation++
        if (formValidation >= 4) {
            username.value = ''
            sobrenome.value = ''
            email.value = ''
            senioridade.value = ''
            alert('Suas informações foram enviadas')
        }
    }
    
}

function setErrorFor(input, message){
    const campo = input.parentElement //.form.element
    const small = campo.querySelector('small')
    //add error message inside small tag
    small.innerText = message
    // add error class
    campo.className = 'campo error'
}

function setSuccessFor(input){
    const campo = input.parentElement
    campo.className = 'campo success'
}

function senioridadeSuccess(input) {
    const campo = input.parentElement
    const small = campo.querySelector('small')
    input.style.border = '1px solid #2ecc71'
    small.innerText = ''
}

function isEmail(email){
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

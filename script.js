let slider = document.getElementById('slider')
let btn = document.getElementById('btn')
let valor = document.getElementById('valor')
let password = document.querySelector('#password')

let containerPaswword = document.querySelector('#container-password')

let charset = "abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789#$%¨&*!"
let novaSenha = ""

valor.innerHTML = slider.value

slider.oninput = function(){
    valor.innerHTML = this.value
}

function generatePassword(){
    
    let pass = ''

    for(let i = 0, n = charset.length ; i < slider.value ; ++i){
        pass += charset.charAt(Math.floor(Math.random()*n));
    }

    containerPaswword.classList.remove("hide")
    password.innerHTML = pass;
    novaSenha = pass
}

function copyPassword(){
    alert("Senha copiada com sucesso!!!")
    navigator.clipboard.writeText(novaSenha)
}
//Selecionando os elementos gerais do form
const form      = document.getElementById("form")
const firstName = document.getElementById("first-name")
const lastName  = document.getElementById("last-name")
const email     = document.getElementById("email")
const password  = document.getElementById("password")

//Adicionando o evento de click no botão submit do form
form.addEventListener("submit", (event) => {
    //evitando que a ação padrão de atualizar a página ao clicar em submit ocorra
    event.preventDefault()

    //chamando a função de checar os inputs quando o botão submit for clicado
    checkInputs()
})

//Função que checará se os inputs estão preenchidos corretamente
function checkInputs(){

    //Pegando os valores dos inputs para a validação
    const firstNameValue = firstName.value
    const lastNameValue  = lastName.value
    const emailValue     = email.value
    const passwordValue  = password.value


    //validação firstName
    if (firstNameValue === ""){
        errorInput(firstName, "First Name cannot be empty")
    } else {
        successInput(firstName)
    }

    //validação lastName 
    if (lastNameValue === ""){
        errorInput(lastName, "Last Name cannot be empty")
    } else {
        successInput(lastName)
    }

    //validação email, onde o else if puxa o regex para validar os caracteres
    if (emailValue === ""){
        errorInput(email, "Email cannot be empty")
    } else if (!checkEmail(emailValue)){
        errorInput(email, "Looks like this is not an email")
        //zerando o value do input para que o placeholder possa aparecer
        email.value = ""
        //setando o novo value do placeholder para o exemplo de email
        email.setAttribute("placeholder", "email@example/com")
        //pegando o elemento pai do email para manipular as classes
        const emailExample = email.parentElement
        //alterando as classes do elemento pai com shadow-DOM
        emailExample.className = "form-control email-exemple error"

    } else {
        successInput (email)
    }

    if (passwordValue === "") {
        errorInput(password, "Password cannot be empty")
    } else if (passwordValue.length < 8) {
        errorInput(password, "Password must have at least 8 characters")
    } else {
        successInput(password)
    }

}

//Função que executará os erros de validação
function errorInput (input, message) {
    //pegando o elemento pai para posteriormente alterar sua classe (shadow DOM)
    const formControl = input.parentElement
    //pegando a mensagem de erro para alterá-la de acordo com o erro
    const small = formControl.querySelector("small")

    small.innerText = message

    formControl.className = "form-control error"
}

function successInput (input) {
    const formControl = input.parentElement
    const small = formControl.querySelector("small")
    small.innerText = ""
    formControl.className = "form-control"

}








//Regex para email
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
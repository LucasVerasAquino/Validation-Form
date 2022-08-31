const form = document.getElementById("form")
const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const password = document.getElementById("password")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    checkInputs()
})

//Função que checará se os inputs estão preenchidos corretamente
function checkInputs(){

    const firstNameValue = firstName.value
    const lastNameValue = lastName.value
    const emailValue = email.value
    const passwordValue = password.value


    //validação firstName
    if (firstNameValue === ""){
        errorInput(firstName, "First Name cannot be empty")
    }

    //validação lastName 
    if (lastNameValue === ""){
        errorInput(lastName, "Last Name cannot be empty")
    }

    //validação email, onde o else if puxa o regex para validar os caracteres
    if (emailValue === ""){
        errorInput(email, "Email cannot be empty")
    } else if (!checkEmail(emailValue)){
        errorInput(email, "Looks like this is not an email")
        email.value = "email@example/com"
        email.style.color = "hsl(0, 100%, 74%)"
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










//Regex para email
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
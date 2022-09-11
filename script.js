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

    //chamando a função de checar os inputs quando o botão submit for clicado (evento)
    checkInputs()
})

//Função que checará se os inputs estão preenchidos corretamente
function checkInputs(){

    //Pegando os values dos inputs para a validação
    const firstNameValue = firstName.value
    const lastNameValue  = lastName.value
    const emailValue     = email.value
    const passwordValue  = password.value

    //validação firstName
    if (firstNameValue === ""){
        errorInput(firstName, "First Name cannot be empty")
    } else if(firstNameValue.length < 5){
        //validação caso o value First name seja menor que 5 (evitar envios vazios)
        errorInput(firstName, "First Name must have at least 5 characters")
    } else{ 
        validInput(firstName)
    }

    //validação lastName 
    if (lastNameValue === ""){
        errorInput(lastName, "Last Name cannot be empty")
    } else if(lastNameValue.length < 5){
        //validação caso o value last name seja menor que 5 (evitar envios vazios)
        errorInput(lastName, "Last Name must have at least 5 characters")
    } else {
        validInput(lastName)
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
        validInput(email)
    }

    //Validação password onde o else if válida o tamanho mínimo da senha
    if (passwordValue === "") {
        errorInput(password, "Password cannot be empty")
    } else if (passwordValue.length < 8) {
        errorInput(password, "Password must have at least 8 characters")
    } else {
        validInput(password)
    }

    //Caso o formulário esteja válido, será printado no console.
    const formControls = form.querySelectorAll(".form-control")

    const validForm = [... formControls].every(formControl => {
        if (formControl.className === "form-control valid") {
            console.log("Formulário validado")
        }
    })

}

//Função que executará os erros de validação
function errorInput (input, message) {
    //pegando o elemento pai para posteriormente alterar sua classe (shadow DOM)
    const formControl = input.parentElement
    //pegando a mensagem de erro para alterá-la de acordo com o erro
    const small = formControl.querySelector("small")

    //Alterando a mensagem de erro e adicionando a classe de erro
    small.innerText = message
    formControl.className = "form-control error"
}

//Função que fará os inputs voltarem ao estado normal após validação dos values
function validInput (input) {
    const formControl = input.parentElement
    const small = formControl.querySelector("small")

    small.innerText = ""
    formControl.className = "form-control valid"
}

//Regex para email
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
  
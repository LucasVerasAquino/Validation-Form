# Sign up form solution

 This was my first project and it was a challenge that I took on the Frontend Mentor website. I was introduced to interesting concepts, writing
the codes independently using my knowledge and looking for solutions to the problems I didn't know about. Below is the link to the Frontend Mentor challenge: 

(https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover state for submit button
- Receive an error message when the 'form' is submitted if:
  - Any 'input' field is empty.
  - The email address is not formatted correctly.
  - The password input is less than 8 characters.
  - The name and surname inputs are less than 5 characters long.

### Screenshot

![](images/project-imgs/Desktop.PNG)

![](images/project-imgs/Validations.PNG)

![](images/project-imgs/Mobile.PNG)

### Links

- Live Site URL: (https://codewatcher.netlify.app/)

## My process

### Built with

- Native JavaScript
- Semantic HTML5
- CSS (Flexbox - Responsive Design)
- Mobile-first workflow

### What I learned

This project was the first time I actually got my hands dirty, putting together HTML, CSS and Javascript. Integrating these three and seeing your page flow is wonderful! In this project I learned to manipulate the DOM, what it is and how to use Shadow DOM, responsiveness through Flexbox and breakpoints to meet the needs of different devices. I can say that, without a doubt, what held me most in this project was manipulating the Shadow DOM and envisioning all the possibilities it opens up, making user interaction with the application something dynamic.


I want to show you the function I used to validate the inputs, as it was the culprit for hours of abstraction and it helped me improve my logic and understand that solving problems is much more about thinking about the step by step I need to follow to solve it than that code itself.But it also helped me to understand that knowing features, methods and possibilities that the language proposes are of great importance for the construction of a clean, scalable and maintainable code, also understanding that this domain only comes with practice and commitment.The function follows below:

```js
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
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
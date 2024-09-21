const form = document.getElementById("form");
const button = document.getElementById("button");
const text = document.getElementById("text");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkInputEmail();
})

function checkInputEmail() {
    const emailValue = text.value;
    
    if (emailValue === "") {
        errorInput(text, "Digite um email válido.");
    }

    console.log(emailValue)
}

function errorInput(element, message){
    const formItem = element.parentElement;
    const textMessage = formItem.querySelector("span")
    
    textMessage.innerText = message;
    formItem.className = "form-content error";
}

// clicar(button);

function clicar(elemento) {
    elemento.addEventListener("click", () => {
        alert("Enviado");
        validarEmail(input);
    })
}
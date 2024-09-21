const form = document.getElementById("form");
const text = document.getElementById("text");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForm();
})

text.addEventListener(("blur"), () => {
    checkInputEmail();
})

function checkInputEmail() {
    const emailValue = text.value;
    const formItem = text.parentElement;

    
    if (emailValue === "") {
        errorInput(text, "Digite um email válido.");
    } else if(!emailValue.includes("@") || !emailValue.includes(".com")){
        errorInput(text, "Digite um email válido.");
    } else {
        formItem.className = "form-content ok";
        return true;
    }
}

function errorInput(element, message){
    const formItem = element.parentElement;
    const textMessage = formItem.querySelector("span");
    
    textMessage.innerText = message;
    formItem.className = "form-content error";
}

function checkForm() {
    const isValid = checkInputEmail();
    if (isValid) {
        alert("Cadastrado com sucesso!")
    } 
}


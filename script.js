const button = document.getElementById("button");

clicar(button);

function clicar(elemento) {
    elemento.addEventListener("click", () => {
        alert("Enviado");
    })
}

var buttonElement = document.getElementById("btnElement")
buttonElement.addEventListener("click", () => {
    var cpf = document.getElementById("cpf")
    if(cpf.value.length < 11 || cpf.value.length > 11){
        alert("Por favor digite um cpf válido")
    }
})
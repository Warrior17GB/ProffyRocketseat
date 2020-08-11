// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botao
.addEventListener('click', cloneField)

// Executar uma acao
function cloneField() {
    // Duplicar os campos. Que campo?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)
    // Pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll("input")
    // Limpara cada campo
    fields.forEach(function(field) {
        // Pegar o field do momento e limpa ele
        field.value = ""
    })
    // Colocar na pagina. Onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
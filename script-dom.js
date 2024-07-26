function ShowMessage(input){
    //criação de divs
    var div = document.createElement("div")
    var divMensagem = document.createElement("div")
    var divButtons = document.createElement("div")

    //criação de parágrafo
    var paragrafo = document.createElement("p")

    //criação de botões
    var del = document.createElement("button")
    var edit = document.createElement("button")

    //definindo texto para parágrafo e botões
    paragrafo.innerText = input.value
    edit.innerText = "Editar"
    del.innerText = "Deletar"

    //adicionando classes para divs
    divMensagem.classList.add("message-div")
    div.classList.add("div-message-buttons")
    divButtons.classList.add("div-buttons")

    //adicionando classes para botões
    edit.classList.add("buttons")
    del.classList.add("buttons")
    edit.classList.add("edit")
    del.classList.add("del")

    edit.addEventListener("click", () => {divBox.removeChild(div)})
    del.addEventListener("click", () => {divBox.removeChild(div)})

    divMensagem.append(paragrafo)
    divButtons.append(del)
    divButtons.append(edit)

    div.append(divMensagem)
    div.append(divButtons)

    var divBox = document.getElementById("message-box")
    divBox.append(div)
    console.log("Enviado")

}

var input = document.getElementById("input-message")
var button = document.getElementById("send-message")
button.addEventListener("click", () => ShowMessage(input))


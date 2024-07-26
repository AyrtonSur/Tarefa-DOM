function ShowMessage(input){
    var div = document.createElement("div")
    var paragrafo = document.createElement("p")
    paragrafo.innerText = input.value
    console.log(input.value)
    div.append(paragrafo)
    var divBox = document.getElementById("message-box")
    divBox.append(div)
    div.classList.add("message-div")
    console.log(divBox)
}


var input = document.getElementById("input-message")
var button = document.getElementById("send-message")
button.addEventListener('click', () => ShowMessage(input))

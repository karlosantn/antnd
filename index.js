var Direita = window.document.getElementById("direita")
var idvisual = window.document.getElementById("idvisual")
var wbdesigner = window.document.getElementById("wbdesigner")
var publicidade = window.document.getElementById("publicidade")
var Esquerda = window.document.getElementById("esquerda")

function RolarParaDireita() {
    idvisual.style = "display:none"
    wbdesigner.style = "display:flex"
    publicidade.style = "display:flex"
    Direita.style = "display:none"
    Esquerda.style = "display:flex; margin-top:70px"
}

function RolarParaEsquerda() {
    idvisual.style = "display:flex"
    publicidade.style = "display:none"
    Direita.style = "display:flex"
    Esquerda.style = "display:none"
}

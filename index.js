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

function abrirWhatsapp() {
      var nome = document.getElementById("nome").value;
      var telefone = document.getElementById("telefone").value;
      var email = document.getElementById("email").value;
      var msg = document.getElementById("msg").value;
      var url = "https://wa.me/+5531993152234?text="
        + "*Formulário de Contato*" + "%0a"
        + "%0a"
        + "*Nome*: " + nome + "%0a"
        + "*Telefone*: " + telefone + "%0a"
        + "*E-mail*: " + email + "%0a"
        + "*Mensagem*: " + msg;
      window.open(url, '_blank').focus();
    }
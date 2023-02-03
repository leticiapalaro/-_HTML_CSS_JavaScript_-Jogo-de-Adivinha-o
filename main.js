// Math.random() retorna a um ponto flutuante entre [0, 1) - ou seja, inclui o zero, mas não inclui o 1.
// Para sortear até 10, foi utilizada uma multiplicação até 11, dessa forma os números sorteados ficarão de [0,11), ou seja, irão de 0 até 10.

var sorteado = parseInt(Math.random() * 11);
var chutar = document.getElementById("chute-button");
var tentativas = 0;

chutar.addEventListener("click", testaValor);

console.log(sorteado);

/* parte do código que testa se é um número válido */
function testaValor() {
  var chuteTestaValor = parseInt(document.getElementById("numero-chute").value);
  var resultadoTestaValor = document.querySelector("#area-resultado");
  if (chuteTestaValor > 10 || chuteTestaValor < 0) {
    resultadoTestaValor.innerHTML = ` <strong style="color: rgb(95, 151, 102)">Amigão</strong>, é pra digitar um número <strong style="color: rgb(250, 152, 29)">entre 0 e 10</strong>! `;
  } else {
    adivinhaNumero();
  }
}

function adivinhaNumero() {
  var resultado = document.querySelector("#area-resultado");
  var chute = parseInt(document.getElementById("numero-chute").value);
  var resultado = document.querySelector("#area-resultado");
  var parabens = document.querySelector(".substituir");

  /* função que passa o resultado se a pessoa acertar */
  /* essa função é chamada na parte do código que verifica se o número está correto */
  function getResultado() {
    if (tentativas == 1) {
      resultado.innerHTML = `Você é bom! De primeira! <strong style="color: red">Parabéns!</strong><br/>Mas... Será que não foi <strong style="color: rgb(250, 152, 29)">SORTE</strong>?<br/> Clique <a href="https://cdpn.io/pen/debug/RwyWemm?authentication_hash=dGkXWNoojQYA"><strong style="color: blue">AQUI</strong></a> para tentar novamente!`;
      console.log(chute);
    } else {
      resultado.innerHTML = `Você acertou em ${tentativas} tentativas! <strong style="color: red">Parabéns!</strong><br/>Clique <a href="https://cdpn.io/pen/debug/RwyWemm?authentication_hash=dGkXWNoojQYA"><strong style="color: blue">AQUI</strong></a> para tentar novamente!`;
    }
  }

  /* parte do código que verifica se o número está correto */
  tentativas += 1;

  if (chute > sorteado) {
    resultado.innerHTML = `Essa foi sua ${tentativas}º tentativa.<br>O número é <strong style="color: rgb(95, 151, 102)">MENOR</strong>, tente novamente.`;
  } else if (chute < sorteado) {
    resultado.innerHTML = `Essa foi sua ${tentativas}º tentativa.<br>O número é <strong style="color: rgb(250, 152, 29)">MAIOR</strong> que ${chute}, tente novamente.`;
  } else if (chute == sorteado) {
    parabens.innerHTML = `<img src="https://c.tenor.com/tN7tBfkfZ9cAAAAC/yeah-yeah-yeah-yeah.gif!" id="acertou">`;
    console.log(chute);
    getResultado();
  } else {
    resultado.innerHTML = `Deu um <strong style="color: red">MISSCLICK</strong> aí amigão?`;
    tentativas -= 1;
  }
}

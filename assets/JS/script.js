const buttonPergunta = document.querySelector("#buttonPergunta")
const inputPergunta = document.querySelector("#inputPergunta")
const resposta = document.querySelector("#resposta")
const listaRespostas = [
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
  "Certeza!", 
] 

//criar função para o botão fazer pergunta
function fazerPergunta() { 
  
  if (inputPergunta.value == "") {
    alert("digite sua pergunta")
    return
  }

  buttonPergunta.setAttribute("disabled",true)

  //gerando um número inteiro aleatório da lista respostas e transformando o número em uma frase
  const totalRespostas = listaRespostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
  const perguntaRepeat = "<div>" + inputPergunta.value + "</div>"
  resposta.innerHTML = perguntaRepeat + (listaRespostas[numeroAleatorio])
  
  //animação de desaparecer as respostas
  setTimeout(function(){resposta.style.opacity = "0", 
  buttonPergunta.removeAttribute("disabled");}, 4000);
  setTimeout(function(){resposta.style.opacity = "1"}, 0);
}

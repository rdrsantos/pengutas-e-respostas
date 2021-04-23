import {perguntas, tempo} from "./informacoes.js"
export default function passarPerguntas(){
  const perguntasDiv = document.querySelectorAll(".perguntas")
  let perguntasInicio = 1
  let respostasBtns = document.querySelectorAll(".pergunta-btn")

  perguntas.innerHTML = `${perguntasInicio} / ${perguntasDiv.length}`
  perguntasDiv.forEach(item => {
    item.style.display = "none"
  })
  perguntasDiv[0].style.display = "flex"

  let c = 10
  let counter = 0
  let timer;
  
  function cronometro() {
    timer = setInterval(() => {
      tempo.innerText = c--  
      (c <= 4) ? tempo.style.color = "darkred" : tempo.style.color = "#fff"
      
      if (c < 0) {
        c = 10
        passarPergunta()
      }
    }, 1000)
  }
  cronometro()
  
  function passarPergunta(){
    perguntas.innerHTML = `${++perguntasInicio} / ${perguntasDiv.length}`
    perguntasDiv.forEach(item => {
      item.style.display = "none"
    })
    counter++
    if (counter === perguntasDiv.length) {
      clearInterval(timer)
      counter = perguntasDiv.length - 1
      perguntasDiv.forEach(item => {
        item.style.display = "flex"
      })
      perguntas.innerHTML = `${perguntasDiv.length} / ${perguntasDiv.length}`
      respostasBtns.forEach(item => item.disabled = true)
    } 
    perguntasDiv[counter].style.display = "flex"
  }

  respostasBtns.forEach(item => {
    item.addEventListener('click', () => {
      clearInterval(timer)
      setTimeout(() => {
        c = 0
        cronometro()
      }, 2000)
    })
  })
}
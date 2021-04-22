import {perguntas, tempo} from "./informacoes.js"
export default function passarPerguntas(){

  const perguntasDiv = document.querySelectorAll(".perguntas")
  let perguntasInicio = 1

  perguntas.innerHTML = `${perguntasInicio} / ${perguntasDiv.length}`
  perguntasDiv.forEach(item => {
    item.style.display = "none"
  })
  perguntasDiv[0].style.display = "flex"

  let c = 5
  let counter = 0
  let timer;
  
  function cronometro() {
    timer = setInterval(() => {
      tempo.innerText = c--
      if (c < 0) {
        clearInterval(timer)
        passarPergunta()
        cronometro()
        c = 5
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
      counter = perguntasDiv.length - 1
      perguntasDiv.forEach(item => {
        item.style.display = "flex"
      })
      perguntas.innerHTML = `${perguntasDiv.length} / ${perguntasDiv.length}`
    } 
    perguntasDiv[counter].style.display = "flex"
  }
}
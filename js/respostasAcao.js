import {resCertas} from "./informacoes.js"
export default function respostasAcao(){
  const respostas = document.querySelectorAll('.perguntas')
  let corretas = 0

  respostas.forEach(resposta => {
    let resp = resposta.querySelectorAll("button")
    resp.forEach(item => {
      item.addEventListener("click", () => {
        resp.forEach(item => {
          item.style.backgroundColor = "#fff"
          item.disabled = true
        })

        if (item.id === "rc") {
          item.style.backgroundColor = "green"
          item.style.color = "#fff"
          item.style.fontWeight = "bold"
          item.innerHTML = item.innerText + " - Resposta Correta"
          corretas++
          resCertas.innerHTML = corretas
        } else {
          item.style.backgroundColor = "red"
          item.style.color = "#fff"
          item.style.fontWeight = "bold"
          item.innerHTML = item.innerText + " - Resposta Errada"
          resp.forEach(item => {
            if(item.id === "rc"){
              item.style.color = "green"
              item.innerHTML = item.innerText + " - Resposta Correta"
            }
          })
        }
      })
    })
  })
}
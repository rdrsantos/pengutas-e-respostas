export default function respostasAcao(){
  const respostas = document.querySelectorAll('.perguntas')

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
          item.innerHTML = item.innerText + " - Resposta Correta"
        }
        else {
          item.style.backgroundColor = "red"
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
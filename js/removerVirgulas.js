export default function removerVirgulas() {
  let perguntas = document.querySelectorAll(".pergunta-btn")
  perguntas.forEach(item => {
    let virgulas = item.nextSibling
    virgulas.remove()
  })
}
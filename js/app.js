import fetchApi from "./fetchApi.js"
const btnComecar = document.querySelector('.comecar button')

btnComecar.addEventListener("click", () => {
  btnComecar.style.display = 'none'
  fetchApi()
})

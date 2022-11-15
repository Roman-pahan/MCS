import "./styles.css"
import { getEmail } from "./form.js"

const inputEmail = document.querySelector("#email")
const output = document.querySelector("#output")

inputEmail.addEventListener("input", (event) => {
  let result = getEmail(inputEmail.value)
  output.textContent = "Вы указали адрес " + result
  console.log(result)
})

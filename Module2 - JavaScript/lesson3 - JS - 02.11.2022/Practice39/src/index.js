import { getDropdown } from "./currencies.js"
import "./styles.css"

const currencies = ["Bitcoin", "Ethereum", "Tether", "Solana"]

const html = getDropdown(currencies)

const select = document.querySelector("#currency")

select.innerHTML = html

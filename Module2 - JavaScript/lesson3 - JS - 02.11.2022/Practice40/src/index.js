import { renderTableRows } from "./prices.js"
import "./styles.css"

const data = [
  ["Bitcoin", "47311"],
  ["Ethereum", "3407"],
  ["Solana", "163"],
  ["Tether", "1"]
]

const html = renderTableRows(data)

const tbody = document.querySelector("#prices-table tbody")
tbody.insertAdjacentHTML("beforeend", html)

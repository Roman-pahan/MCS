import { getPrice } from "./helpers.js";
import "./styles.css";

const dropdown = document.querySelector("#currencies");
const output = document.querySelector("#output");

dropdown.addEventListener("change", () => {
  output.textContent = getPrice(dropdown.value);
});

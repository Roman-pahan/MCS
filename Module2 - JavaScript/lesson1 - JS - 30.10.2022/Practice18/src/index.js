import { getNextAge } from "./age.js";

const age = document.querySelector("#age");
const nextAge = document.querySelector("#next");

age.addEventListener("input", () => {
  nextAge.textContent = getNextAge(age.value);
});

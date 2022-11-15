import { getElementWidth } from "./measure.js";

const element1 = document.querySelector("#element1");
const element2 = document.querySelector("#element2");

const element1Value = getComputedStyle(element1).width;
const element2Value = getComputedStyle(element2).width;

console.log("Ширина первого элемента", getElementWidth(element1Value));
console.log("Ширина второго элемента", getElementWidth(element2Value));

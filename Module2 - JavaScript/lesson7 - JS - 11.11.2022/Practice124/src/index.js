import Wallet from "./wallet.js";
import { Ether, Bitcoin } from "./coins.js";

const ether = new Ether();
const bitcoin = new Bitcoin();
const wallet = new Wallet();
try {
  wallet.addCoin(ether);
  wallet.addCoin(bitcoin);
} catch (error) {
  console.error(error);
}

const addEth = document.querySelector("#add-eth");
const addBtc = document.querySelector("#add-btc");
const ethBalance = document.querySelector("#eth-balance");
const btcBalance = document.querySelector("#btc-balance");
const totalBalance = document.querySelector("#total-balance");

const render = () => {
  try {
    ethBalance.textContent = ether.getMessage();
    btcBalance.textContent = bitcoin.getMessage();
    totalBalance.textContent = wallet.getBalance();
  } catch (error) {
    console.error(error);
  }
};

addEth.addEventListener("click", () => {
  ether.collect();
  render();
});
addBtc.addEventListener("click", () => {
  bitcoin.collect();
  render();
});

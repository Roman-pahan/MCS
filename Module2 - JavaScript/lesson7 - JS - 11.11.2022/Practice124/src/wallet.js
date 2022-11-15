import { Coin } from "./coins";

export default class Wallet {
  // Сделать: constructor, addCoin() и getBalance()
  constructor() {
    this.coins = [];
  }

  addCoin(coin) {
    return this.coins.push(coin);
  }

  getBalance() {
    let sum = 0;
    this.coins.forEach((x) => {
      return (sum += x.getValue());
    });
    return sum;
  }
}

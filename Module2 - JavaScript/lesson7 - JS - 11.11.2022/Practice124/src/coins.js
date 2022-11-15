// Не удаляйте ключевое слово "export"

export class Coin {
  // Сделать: constructor, collect(), getValue(), getMessage()
  constructor(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = 0;
  }

  collect() {
    return this.count++;
  }

  getValue() {
    return this.count * this.price;
  }

  getMessage() {
    return `${this.count} ${this.name} в кошельке`;
  }
}

export class Ether extends Coin {
  constructor() {
    super("Ether", 3000);
  }
}

export class Bitcoin extends Coin {
  constructor() {
    super("Bitcoin", 50000);
  }
}

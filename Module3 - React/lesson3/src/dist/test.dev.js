"use strict";

var Shop = function Shop() {
  var items = [{
    name: "Респиратор 3M",
    desc: "Степень защиты FFP2, есть клапан выдоха",
    image: "https://source.unsplash.com/400x300/?3M,mask"
  }, {
    name: "Перчатки латексные",
    desc: "Одноразовые перчатки повышенной прочности",
    image: "https://source.unsplash.com/400x300/?latex,gloves"
  }];
  return items[1];
};

console.log(Shop());
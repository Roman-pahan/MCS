import React from "react";
import Item from "./Item.js";

const Shop = () => {
  const items = [
    {
      name: "Респиратор 3M",
      desc: "Степень защиты FFP2, есть клапан выдоха",
      image:
        "https://esa.md/wp-content/uploads/2020/10/Polumaska_3M_serii_7500_d-.png"
    },
    {
      name: "Перчатки латексные",
      desc: "Одноразовые перчатки повышенной прочности",
      image: "https://ambalaj.md/wp-content/uploads/2019/10/n1.jpg"
    }
  ];

  return (
    <div className="shop">
      <Item info={items[0]} />
      <Item info={items[1]} />
    </div>
  );
};

export default Shop;

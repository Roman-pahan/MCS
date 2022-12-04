import React, { useState } from "react";
import Item from "./Item.js";
import uuid from "react-uuid";

export default function Shop() {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [attention, setAttention] = useState("");

  const [items, setItem] = useState([]);

  console.log(items);

  function handleFormSubmit(e) {
    e.preventDefault();
    setProductName("");
    setProductDesc("");
    handleAddItem();
  }

  function handleAddItem() {
    if (productDesc && productName) {
      setItem([...items, { id: uuid(), name: productName, desc: productDesc }]);
      setAttention("");
    } else {
      setAttention("Заполенены не все поля!");
    }
  }

  function handleDeleteItem(id) {
    let newItems = items.filter((item) => item.id !== id);
    setItem(newItems);
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            placeholder="Название товара"
            className="ui-textfield"
            value={productName}
            onChange={(el) => setProductName(el.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Описание товара"
            className="ui-textfield"
            value={productDesc}
            onChange={(el) => setProductDesc(el.target.value)}
          />
        </div>
        <div className="form-footer">
          <div className="validation">{attention}</div>
          <input type="submit" className="ui-button" value="Добавить" />
        </div>
      </form>

      <div>
        <p className="ui-title">
          {items.length === 0 ? "Добавить первый товар" : ""}
        </p>
      </div>

      <ul className="ui-list">
        <li className="ui-item-list">
          {items.map((item) => (
            <div key={item.id}>
              <Item info={item} />
              <button
                onClick={() => handleDeleteItem(item.id)}
                className="item-button"
              >
                Удалить
              </button>
            </div>
          ))}
        </li>
      </ul>
    </>
  );
}

import React, { useState } from "react";
import uuid from "react-uuid";
import AddItem from "./AddItem.js";
import ItemsList from "./ItemsList.js";
import Title from "./Title.js";

export default function Shop() {
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [attention, setAttention] = useState("");

  const [items, setItem] = useState([]);

  console.log(items);

  function handleChangePrName(event){
    setProductName(event.target.value)
  }

  function handleChangeProductDesc(event){
    setProductDesc(event.target.value)
  }


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
      <AddItem onFormSubmit={handleFormSubmit} onPrNameChange={handleChangePrName} onPrDescChange={handleChangeProductDesc} productName={productName} productDesc={productDesc} attention={attention}/>

      <Title itemsLength= {items.length}/>

      <ItemsList items= {items} onHandleDeleteItem={handleDeleteItem}/>

    </>
  );
}

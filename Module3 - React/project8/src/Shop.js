import React, { useEffect, useState } from "react";
import ItemsList from "./ItemsList";
import AddItem from "./AddItem";
import {v4} from "uuid";

export default function Shop() {
  const [items, setItems] = useState(() => {
    const value = localStorage.getItem("items");
    if (!value) {
      return [];
    }
    return JSON.parse(value);
  });

  const [name, setName] = useState("");

  const [desc, setDesc] = useState("");

  const [valid, setValid] = useState("");

  useEffect(() => {
    if (items.length === 0) {
      document.title = `Товары отсутствуют`;
    } else {
      document.title = `${items.length} товаров`;
    }
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function handleFormSubmit(event) {
    event.preventDefault();
    if (!name) {
      setValid("Введите название");
      return;
    }
    if (!desc) {
      setValid("Введите описание ");
      return;
    }
    setItems([
      ...items,
      {
        id: v4(),
        name: name,
        desc: desc
      }
    ]);
    setName("");
    setDesc("");
    setValid("");
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescChange(event) {
    setDesc(event.target.value);
  }

  function handleDeleteClick(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <>
      <div className="bg-gray-200">
      <AddItem
        name={name}
        desc={desc}
        valid={valid}
        onNameChange={handleNameChange}
        onDescChange={handleDescChange}
        onFormSubmit={handleFormSubmit}
      />
      <div class="mt-15 italic pb-5 border-2 flex justify-center items-center  font-mono font-bold text-purple-400">{items.length === 0 && <p>Добавьте первый товар</p>}</div>
      <ItemsList items={items} onDeleteClick={handleDeleteClick} />
      </div>
    </>
  );
}

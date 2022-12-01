import React, { useState } from "react";

export default function Item(props) {
  const [itemQuantity, setQuantity] = useState(0);

  // const { info } = props;
  // const { name, desc, image } = info;

  const { name, desc, image } = props.info;

  const handleIncrementClick = () => {
    setQuantity(itemQuantity + 1);
  };

  const handleDecrementClick = () => {
    if (itemQuantity > 0) {
      setQuantity(itemQuantity - 1);
    }
  };

  return (
    <div className="item">
      <img alt="" src={image} />
      <div className="item-info">
        <h2>{name}</h2>
        <p>{desc}</p>
      </div>
      <div className="item-quantity">
        <button
          disabled={itemQuantity === 0}
          onClick={handleDecrementClick}
          className="item-button"
        >
          -
        </button>
        <h3 className="item-total">{itemQuantity}</h3>
        <button onClick={handleIncrementClick} className="item-button">
          +
        </button>
      </div>
    </div>
  );
}

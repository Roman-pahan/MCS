import React from "react";

export default function AddItem(props){
    return(
        <form onSubmit={props.onFormSubmit}>
        <div>
          <input
            type="text"
            placeholder="Название товара"
            className="ui-textfield"
            value={props.productName}
            onChange={props.onPrNameChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Описание товара"
            className="ui-textfield"
            value={props.productDesc}
            onChange={props.onPrDescChange}
          />
        </div>
        <div className="form-footer">
          <div className="validation">{props.attention}</div>
          <input type="submit" className="ui-button" value="Добавить" />
        </div>
      </form>
    )
}
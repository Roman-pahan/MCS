import React from "react"



export default function NameFForm(props){
    return(<form onSubmit={props.onNameSubmit}>
    <label htmlFor="name">Имя: </label>
    <input type="text" id="name" value={props.name} onChange={props.onNameChange} />
    <input type="submit" value="Сохранить" />
    </form>)
}



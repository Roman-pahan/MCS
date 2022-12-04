
import React from "react"



export default function EmailForm(props){
    return(<form>
    <label htmlFor="email">Email: </label>
    <input type="email" id="email" value={props.email} onChange={props.handleEmailChange} />
    </form>)
}

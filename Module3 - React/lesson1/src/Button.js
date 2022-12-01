import React from 'react';

export default function Button(props){
        let className;
        if(props.size === "small"){
           className = 'btn-small'
        } else if (props.size === "large"){
            className = 'btn-large'
        }else{
            className = 'btn-medium'
        }
        return <button className={className}>Купить</button>
    
}


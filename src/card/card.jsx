import React from "react";
import "./ct.css";

export const EachCard = (props) => {
    return (<div className='Catme'>
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt='monter' />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>)
}
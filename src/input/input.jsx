import React from "react";
import "./inp.css";

export const Input = ({ placeholder, handChange }) => {
    return (<div><input className='Add' type='search' placeholder={placeholder} onChange={handChange} /></div>)
}
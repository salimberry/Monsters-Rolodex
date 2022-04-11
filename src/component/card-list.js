import React from "react";
import './list.styles.css';
import { EachCard } from "../card/card";

 export const CardList=(props)=>{
return (<div className='list'>{props.monsters.map(monster=><EachCard key={monster.id} monster={monster}/>)}</div>)
}


import React from 'react';
import './card.css'
 
const Card = (props) => (
  <div className='card-container'>
    <img alt='robot' src={`https://robohash.org/${props.robot.id}?set=set2&size=180x180`}/>
    <h2>{props.robot.name}</h2>
    <p>{props.robot.email}</p>
  </div>
)

export default Card;


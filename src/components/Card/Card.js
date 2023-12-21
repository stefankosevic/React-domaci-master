import React from 'react'
import classes from './Card.module.css'

const Card = (props) => {
  return (
    <div className={classes.Card}>
      <div>
        <h3>{props.day}</h3>
      </div>
      <div>
        <img data-testid="icon" src={props.icon}></img>
      </div>
      <div className={classes.Temp}>
        <div>
          <strong>{props.maxTemp}°</strong>
        </div>
        <div>{props.minTemp}°</div>
      </div>
    </div>
  )
}

export default Card

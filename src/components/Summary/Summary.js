import React from 'react'
import classes from './Summary.module.css'

const Summary = (props) => {
  return (
    <div className={classes.Summary}>
      <div className={classes.Icon}>
        <img
          style={{ margin: '20px 30px 0 0', height: '150px', width: '150px' }}
          src={props.icon}
          data-testid="summary-icon"
        ></img>
      </div>
      <div className={classes.Temp}>
        <h3 style={{ margin: '0' }} className={classes.H3}>
          {props.curTemp}°
        </h3>
        <p style={{ margin: '0 20px 0 0' }}>{props.curSumm}</p>
      </div>
    </div>
  )
}

export default Summary

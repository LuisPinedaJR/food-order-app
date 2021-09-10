import React from 'react'
import classes from './Checkout.module.css'

const Checkout = () => {
  return (
    <div classes={classes.control}>
      <label htmlFor="name">Your name</label>
      <input type="text" />
    </div>
  )
}

export default Checkout

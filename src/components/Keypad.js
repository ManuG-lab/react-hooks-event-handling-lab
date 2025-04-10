// Code Keypad Component Here
import React from 'react'

function Keypad() {

  function handleChange(e) {
    console.log("Entering password...")
    console.log(e.target.value)
  }

  return (
    <input type="password" onChange={handleChange} />
  )
}

export default Keypad

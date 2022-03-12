import React from 'react'

export default function Input(props) {
  function handleChange(e) {
    props.onNameChange(e.target.value)
  }
  return (
    <input type="text" placeholder="Введи имя и узнай гендер" className="input" value={props.value} onChange={handleChange} />
  )
}

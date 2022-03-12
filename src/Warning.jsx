import React from 'react'

export default function Warning(props) {
  if (props.warn == '') return null;
  if (props.warn.length >= 2) return null;

  return (
    <p className="result warning">Слишком короткое имя!</p>
  )
}

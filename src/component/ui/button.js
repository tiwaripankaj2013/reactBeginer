import React from 'react'

export function CustomButton(props) {
  return (
    <button className={props.className} onClick={props.event}>{props.label}</button>
  )
}

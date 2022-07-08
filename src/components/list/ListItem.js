import React from 'react'

export default function ListItem(props,key) {
  return (
    <li className="mb-1" key={key}>{props.name} <span className="text-fuchsia-700 inline-block pl-1">{props.classes}</span></li>
  )
}

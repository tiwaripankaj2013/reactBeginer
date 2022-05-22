import React from 'react'

export function CustomButton({customClass,...rest}) {
  return (
    <button className={`py-1 px-3 text-white rounded ${customClass ? customClass :''}`} onClick={rest.event}>{rest.label}</button>
  )
}

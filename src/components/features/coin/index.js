import React from 'react'
import { useSelector } from 'react-redux'; 
export default function Coin() {
  const count =  useSelector((state) => state.counter.count)
  return (
    <div className="mt-3 px-3">Coin:{count}</div>
  )
}

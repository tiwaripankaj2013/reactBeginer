import React from 'react'
import Coin from '../features/coin'
import Counter from '../features/counter/counter'

export default function About() {
  return (
    <>
    <h3 className=" h-6 text-red-900">About us Page</h3>
    <Counter />
    <Coin/>
    </>
  )
}

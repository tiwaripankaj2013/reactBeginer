import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <ul className="flex mx-6 container">
         <li className="p-1 text-blue-700 mr-1"><Link to="/">Home</Link></li>
         <li className="p-1 text-blue-700 mr-1"><Link to="/users">Users</Link></li>
         <li className="p-1 text-blue-700 mr-1"><Link to="/about">About</Link></li>
      </ul>
    </header>
  )
}

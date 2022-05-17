import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className=" bg-pink-300 py-4 px-8">
      <ul className="flex mx-6 container">
         <li className="p-1 text-blue-700 mr-1 px-8 text-xl"><NavLink className={(navData) => navData.isActive ? ' border-b-2 border-blue-900' :''} to="/home">Home</NavLink></li>
         <li className="p-1 text-blue-700 mr-1 px-8 text-xl"><NavLink className={(navData) => navData.isActive ? ' border-b-2 border-blue-900' :''} to="/users">Users</NavLink></li>
         <li className="p-1 text-blue-700 mr-1 px-8 text-xl"><NavLink className={(navData) => navData.isActive ? ' border-b-2 border-blue-900' :''} to="/about">About</NavLink></li>
         <li className="p-1 text-blue-700 mr-1 px-8 text-xl"><NavLink className={(navData) => navData.isActive ? ' border-b-2 border-blue-900' :''} to="/onlineShop">Online shop</NavLink></li>
         <li className="p-1 text-blue-700 mr-1 px-8 text-xl"><NavLink className={(navData) => navData.isActive ? ' border-b-2 border-blue-900' :''} to="/cryptoCurrency">Crypto Currency</NavLink></li>
         <li className="p-1 text-blue-700 mr-1 px-8 text-xl"><NavLink className={(navData) => navData.isActive ? ' border-b-2 border-blue-900' :''} to="/uiComponent">UI Component</NavLink></li>
      </ul>
    </header>
  )
}

import React from 'react'
import {  NavLink } from 'react-router-dom';
import {ShoppingCartIcon} from '@heroicons/react/solid';
import { useSelector } from 'react-redux';
export default function Header() {
  const items = useSelector((state) => state.cart);
  return (
    <header className=" bg-pink-300 py-4 px-8">
      <ul className="flex mx-6 container">
         <li className="p-1 text-blue-700 mr-1 px-8 text-xl"><NavLink className={(navData) => navData.isActive ? ' border-b-2 border-blue-900' :''} to="/home">Home</NavLink></li>
         <li className="p-1 text-blue-700 mr-1 px-8 text-xl"><NavLink className={(navData) => navData.isActive ? ' border-b-2 border-blue-900' :''} to="/users">Users</NavLink></li>
         <li className="p-1 text-blue-700 mr-1 px-8 text-xl"><NavLink className={(navData) => navData.isActive ? ' border-b-2 border-blue-900' :''} to="/progress">progress</NavLink></li>
         <li className="p-1 text-blue-700 mr-1 px-8 text-xl"><NavLink className={(navData) => navData.isActive ? ' border-b-2 border-blue-900' :''} to="/about">About</NavLink></li>
         <li className="p-1 text-blue-700 mr-1 px-8 text-xl"><NavLink className={(navData) => navData.isActive ? ' border-b-2 border-blue-900' :''} to="/onlineShop">Online shop</NavLink>
         <ul>
         <li className="p-1 text-blue-700 mr-1 px-8 text-xl"><NavLink className={(navData) => navData.isActive ? ' border-b-2 border-blue-900' :''} to="/products">Produt List</NavLink></li>
         </ul>
         </li>
         <li className="p-1 text-blue-700 mr-1 px-8 text-xl"><NavLink className={(navData) => navData.isActive ? ' border-b-2 border-blue-900' :''} to="/cryptoCurrency">Crypto Currency</NavLink></li>
         <li className="p-1 text-blue-700 mr-1 px-8 text-xl"><NavLink className={(navData) => navData.isActive ? ' border-b-2 border-blue-900' :''} to="/uiComponent">UI Component</NavLink></li>
         <li className="p-1 text-blue-700 mr-1 px-8 text-xl">
         <NavLink className={(navData) => navData.isActive ? ' border-b-2 border-blue-900' :''} to="/cart">
           <span className='inline-block'><ShoppingCartIcon className=' w-10 h-10 text-blue-800' /> {items.length}</span>
           </NavLink>
           </li>

      </ul>
    </header>
  )
}

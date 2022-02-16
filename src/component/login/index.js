import React from 'react'

export default function Login(props) {
  return (
    <div className="flex">
       
       <div className="w-4/5 mx-auto">
       <h2 className=" text-blue-900 font-mono text-2xl w-full mb-6">Login Form</h2>
			<div className="mb-4">
				<label className="block text-gray-700 text-sm font-bold mb-2">
					Username
				</label>
				<input className="shadow apperance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
			</div>
			<div className="mb-6">
				<label className="block text-gray-700 text-sm font-bold mb-2">
					Username
				</label>
				 <input className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
				 <p className="text-red-500 text-xs italic">Please choose a password.</p>
			</div>

			<div className="flex items-center justify-between">
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={props.signIn}>
				Sign In
				</button>
				<button className="bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={props.signUpForm}>
                Signup				
            </button>
            </div>
         </div>
    </div>
  )
}

import React, { useState } from "react";

const Login = (props) => {
  const [uName, setUName] = useState("");
  const [uPass, setUPass] = useState("");
  const [err,setErr] = useState(false);
  const getLoginFormData = (e) => {
    // console.log(uPass,uName);
    e.preventDefault();
  };
  const handleChange = (e) => {
    setUName({ [e.target.name]: e.target.value });
    setUPass({ [e.target.name]: e.target.value });
    // setUName(e.target.value);
	 if(uPass.length>3){
		 setErr(false);
	 }
	 else{
		 setErr(true);
	 }
    // console.log(e.target.value);
  };
  return (
    <div className="flex">
      <form className="w-4/5 mx-auto" onSubmit={getLoginFormData}>
        <h2 className=" text-blue-900 font-mono text-2xl w-full mb-6">
          {props.formName}
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            className="shadow apperance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            name="userName"
            value={uName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            value={uPass}
            name="userPassword"
            placeholder="********"
            onChange={handleChange}
          />

			 {
				 err ? <p className="text-red-500 text-xs italic">
				 Please enter valid password.
			  </p> :' '
			 }
          
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"
            
          >
            Sign In
          </button>
			 <button className="rounded-xl bg-gray-300 px-4 py-2">Reset </button>
          <button
            className="bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={props.signUpForm}
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;

import React, { useState } from "react";

function Signup(props) {
  const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword:"",
  });

  const handleSubmit = (e) => {
    localStorage.setItem(inputs,JSON.stringify(inputs));
  };

  const changeHandler = (e) => {
    e.persist();
    setInputs({
      ...inputs,
      [e.target.name] : e.target.value
    })
  }
  return (
    <div className=" bg-green-900  flex justify-center items-center py-8">
      <div className="w-3/4 block bg-white rounded shadow-lg ">
        <div className="banner flex w-full bg-cover bg-bottom items-end px-6 py-4">
          <h2 className=" text-green-700 font-mono text-4xl">
            {props.formName} {inputs.lname}
          </h2>
        </div>
        <div className="w-full flex px-12 py-2">
          <label htmlFor="user" className="block w-1/2 mb-4 mr-2">
            <input
              type="text"
              placeholder="First Name"
              name="fname"
              value={inputs.fname}
              onChange={changeHandler}
              className="appearance-none border-b-2 w-full p-2 text-grey-darker leading-base focus:outline-none text-sm"
            />
          </label>
          <label htmlFor="user" className="block w-1/2 m4-6">
            <input
              type="text"
              placeholder="Last Name"
              name="lname"
              value={inputs.lname}
              onChange={changeHandler}
              className="appearance-none border-b-2 w-full p-2 text-grey-darker leading-base focus:outline-none text-sm"
            />
          </label>
        </div>
        <div className="w-full flex px-12 py-2">
          <label htmlFor="email" className="block w-1/2 mb-4 mr-2">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={inputs.email}
              onChange={changeHandler}
              className="appearance-none border-b-2 w-full p-2 text-grey-darker leading-base focus:outline-none text-sm"
            />
          </label>
          <label htmlFor="mobile" className="block w-1/2 mb-4 mr-2">
            <input
              type="tel"
              placeholder="mobile"
              name="mobile"
              value={inputs.mobile}
              onChange={changeHandler}
              className="appearance-none border-b-2 w-full p-2 text-grey-darker leading-base focus:outline-none text-sm"
            />
          </label>
        </div>
        <div className="w-full flex px-12 py-2">
          <label htmlFor="password" className="block w-1/2 mb-4 mr-2">
            <input
              type="password"
              placeholder="password"
              name="password"
              value={inputs.password}
              onChange={changeHandler}
              className="appearance-none border-b-2 w-full p-2 text-grey-darker leading-base focus:outline-none text-sm"
            />
          </label>
          <label htmlFor="confirm password" className="block w-1/2 mb-4 mr-2">
            <input
              type="password"
              placeholder="confirm password"
              className="appearance-none border-b-2 w-full py-2 text-grey-darker leading-base focus:outline-none text-sm"
              onChange={changeHandler}
              name="cpassword"
              value={inputs.cpassword}
            />
          </label>
        </div>
        <div className="flex justify-between px-12 pb-6">
          <button
            className="bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Register
          </button>
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={props.loginForm}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
export default Signup;

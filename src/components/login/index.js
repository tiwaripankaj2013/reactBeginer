import React, { useState } from "react";
import { InputWithLabel } from "../ui/input";

const Login = (props) => {
  const [btnDisable, setBtnEnable] = useState(true);
  const [inputs, setInputs] = useState({
    userName: "",
    userPassword: "",
  });
  const [err, setErr] = useState(false);

  const getLoginFormData = (e) => {
    // console.log(inputs.userName);
    localStorage.setItem(inputs, JSON.stringify(inputs));
  };
  const handleChange = (e) => {
    e.persist();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    // setUName(e.target.value);
    if (inputs.userName.length > 3 && inputs.userPassword.length > 3) {
      setBtnEnable(false);
      setErr(false);
    } else {
      setErr(true);
    }
    // console.log(e.target.value);
  };
  return (
    <div className="flex">
      <div className="w-4/5 mx-auto">
        <h2 className=" text-blue-900 font-mono text-2xl w-full mb-6">
          {props.formName}
        </h2>
        <InputWithLabel
          label="Username"
          id="username"
          inputType="text"
          placeholder="Username"
          name="userName"
          value={inputs.userName}
          onChange={handleChange}
        />
        <InputWithLabel
          label="Password"
          id="password"
          inputType="password"
          placeholder="********"
          name="userPassword"
          value={inputs.userPassword}
          onChange={handleChange}
        />
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={btnDisable}
            onClick={getLoginFormData}
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
      </div>
    </div>
  );
};
export default Login;

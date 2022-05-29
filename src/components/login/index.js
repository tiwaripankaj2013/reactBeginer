import React, { useState } from "react";
import { InputWithLabel } from "../ui/input";

const Login = (props) => {
  const [inputs, setInputs] = useState({
    userName: "",
    userPassword: "",
  });
  const [error, setError] = useState(false);
  const [btnStatus, setBtnStatus] = useState(true);
  const getLoginFormData = (e) => {
    e.preventDefault();
    console.log(inputs.userName, inputs.userPassword);
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
      setError(false);
      setBtnStatus(false);
    } else {
      setError(true);
      setBtnStatus(true);
    }
    // console.log(e.target.value);
  };
  return (
    <div className="flex">
      <div className="w-4/5 mx-auto">
        <h2 className=" text-blue-900 font-mono text-2xl w-full mb-6">
          {props.formName}
        </h2>
        <form method="post" onSubmit={getLoginFormData}>
          <InputWithLabel
            label="Username"
            id="username"
            inputType="text"
            placeholder="Username"
            name="userName"
            value={inputs.userName}
            onChange={handleChange}
          />
          {error ? (
            <p className=" text-red-800">
              Please enter valid email and password
            </p>
          ) : (
            ""
          )}

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
              className={`text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                !btnStatus
                  ? "bg-blue-500 hover:bg-blue-700 cursor-pointer"
                  : " bg-gray-500 cursor-not-allowed"
              }`}
              disabled={btnStatus}
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
    </div>
  );
};
export default Login;

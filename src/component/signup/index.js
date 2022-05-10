import React, { useState } from "react";
import { InputWithoutLabel ,InputWrapper} from "../ui/input";
function Signup(props) {
  const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });

  const handleSubmit = (e) => {
    localStorage.setItem(inputs, JSON.stringify(inputs));
  };

  const changeHandler = (e) => {
    e.persist();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className=" bg-green-900  flex justify-center items-center py-8">
      <div className="w-3/4 block bg-white rounded shadow-lg ">
        <div className="banner flex w-full bg-cover bg-bottom items-end px-6 py-4">
          <h2 className=" text-green-700 font-mono text-4xl">
            {props.formName} 
          </h2>
        </div>
        <div className="w-full flex px-12 py-2">
          <InputWithoutLabel
            htmlFor="user"
            inputType="text"
            placeholder="First Name"
            name="fname"
            value={inputs.fname}
            onChange={changeHandler}
          />
          <InputWithoutLabel
            htmlFor="user"
            inputType="text"
            placeholder="Last Name"
            name="lname"
            value={inputs.lname}
            onChange={changeHandler}
          />
        </div>
        <div className="w-full flex px-12 py-2">
          <InputWithoutLabel
            htmlFor="email"
            inputType="email"
            placeholder="Email"
            name="email"
            value={inputs.email}
            onChange={changeHandler}
          />
          <InputWrapper>
          <InputWithoutLabel
            htmlFor="mobile"
            inputType="tel"
            placeholder="mobile"
            name="mobile"
            value={inputs.mobile}
            onChange={changeHandler}
          />
          </InputWrapper>
        </div>
        <InputWrapper customClass="mb-4">
          <InputWithoutLabel
            htmlFor="password"
            inputType="password"
            placeholder="password"
            name="password"
            value={inputs.password}
            onChange={changeHandler}
          />
          <InputWithoutLabel
            htmlFor="confirm password"
            inputType="password"
            placeholder="confirm password"
            name="cpassword"
            value={inputs.cpassword}
            onChange={changeHandler}
          />
        </InputWrapper>
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

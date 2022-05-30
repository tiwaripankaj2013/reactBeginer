import React, { useEffect, useState } from "react";
import { InputWithoutLabel, InputWrapper } from "../ui/input";



function Signup(props) {
const {signupData,userDetails} = props;
  const [inputs, setInputs] = useState({
    fName: "",
    lName: "",
    email: "",
    mobile:"",
    // password: "",
    // cpassword: "",
  });
  const changeHandler = (e) => {
    let filldInput = { ...inputs };
    filldInput[e.target.name] = e.target.value;
    setInputs(filldInput);
  };

useEffect(() => {
  if(userDetails){
    setInputs(userDetails);
  }
},[userDetails]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputs.fName && inputs.lName && inputs.email && inputs.mobile){
      signupData(inputs);
      let existdata =  localStorage.getItem('users');
      if(existdata == null){
        let userdata = [inputs];
        localStorage.setItem('users', JSON.stringify(userdata));
      }
      else{
        // break the string multiple word
      let localdata = [...existdata];
        localdata.push(inputs);
        localStorage.setItem('users', JSON.stringify(localdata));
      }
      setInputs({
        fName: "",
        lName: "",
        email: "",
        mobile: "",
        // password: "",
        // cpassword: "",
      });
    }else{
      alert('Please fill all details')
    }
    
  };
  return (

      <div className=" bg-green-900  flex justify-center items-center py-8">
        <div className="w-3/4 block bg-white rounded shadow-lg ">
          <div className="banner flex w-full bg-cover bg-bottom items-end px-6 py-4">
            <h2 className=" text-green-700 font-mono text-4xl">
              {props.formName}
            </h2>
          </div>
          <InputWrapper>
            <InputWithoutLabel
              htmlFor="user"
              inputType="text"
              placeholder="First Name"
              name="fName"
              value={inputs.fName}
              onChange={changeHandler}
            />
            <InputWithoutLabel
              htmlFor="user"
              inputType="text"
              placeholder="Last Name"
              name="lName"
              value={inputs.lName}
              onChange={changeHandler}
            />
          </InputWrapper>
          <InputWrapper>
            <InputWithoutLabel
              htmlFor="email"
              inputType="email"
              placeholder="Email"
              name="email"
              value={inputs.email}
              onChange={changeHandler}
            />

            <InputWithoutLabel
              htmlFor="mobile"
              inputType="tel"
              placeholder="mobile"
              name="mobile"
              value={inputs.mobile}
              onChange={changeHandler}
            />
          </InputWrapper>
          {/* <InputWrapper customClass="mb-4">
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
          </InputWrapper> */}
          <div className="flex justify-between px-12 pb-6">
            <button
              className="bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              {(userDetails) ? ' Update User Details' : 'Register'}
              
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

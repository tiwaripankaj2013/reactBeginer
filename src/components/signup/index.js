import React, { useEffect, useState } from "react";
import { InputWithoutLabel, InputWrapper } from "../ui/input";

function Signup(props) {
  const { signupData, userDetails } = props;
  const [inputs, setInputs] = useState({
    fName: "",
    lName: "",
    email: "",
    mobile: "",
    // password: "",
    // cpassword: "",
  });
  const changeHandler = (e) => {
    let filldInput = { ...inputs };
    filldInput[e.target.name] = e.target.value;
    setInputs(filldInput);
  };

  useEffect(() => {
    if (userDetails) {
      setInputs(userDetails);
    }
  }, [userDetails]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {fName,lName,email,mobile} = inputs;
    if (fName && lName && email && mobile) {
      const res = await fetch(
        "https://tasks-220c6-default-rtdb.europe-west1.firebasedatabase.app/usersRegister.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fName,
            lName,
            email,
            mobile,
          }),
        }
      );
      if (res) {
        setInputs({
          fName: "",
          lName: "",
          email: "",
          mobile: "",
          // password: "",
          // cpassword: "",
        });
        alert("user register sucessfully");
      }
    } else {
      alert("Please fill all details");
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
            maxLength={10}
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
            {userDetails ? " Update User Details" : "Register"}
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

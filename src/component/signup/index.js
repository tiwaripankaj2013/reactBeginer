import React,{useRef,useState} from "react";

export default function Signup(props) {
  let inputRef = useRef(null);

const [fname,setfName]=useState('');
const [lname,setlName]=useState('');
const [email,setEmail]=useState('');
const [mobile,setMobile]=useState('');

console.log(fname,lname,email);
  const handleSubmit = () =>{
    // console.log(inputRef);
  // console.log( inputRef.current.value)
   inputRef.current.style.color="red";
   
  }
  return (
    <div className=" bg-green-900  flex justify-center items-center py-8">
      <form
        action="#"
        className="w-3/4 block bg-white rounded shadow-lg "
      >
        <div
          className="banner flex w-full bg-cover bg-bottom items-end px-6 py-4"
        >
          <h2 className=" text-green-700 font-mono text-4xl">{props.formName} {lname}</h2>
        </div>
        <div className="w-full flex px-12 py-2">
          <label htmlFor="user" className="block w-1/2 mb-4 mr-2">
            <input
              type="text"
              placeholder="First Name" ref={inputRef} value={fname} onChange={(e)=>setfName(e.target.value)}
              className="appearance-none border-b-2 w-full p-2 text-grey-darker leading-base focus:outline-none text-sm"
            />
          </label>
          <label htmlFor="user" className="block w-1/2 m4-6">
            <input
              type="text"
              placeholder="Last Name" value={lname} onChange={(e)=>setlName(e.target.value)}
              className="appearance-none border-b-2 w-full p-2 text-grey-darker leading-base focus:outline-none text-sm"
            />
          </label>
        </div>
        <div className="w-full flex px-12 py-2">
          <label htmlFor="email" className="block w-1/2 mb-4 mr-2">
            <input
              type="email"
              placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}
              className="appearance-none border-b-2 w-full p-2 text-grey-darker leading-base focus:outline-none text-sm"
            />
          </label>
          <label htmlFor="mobile" className="block w-1/2 mb-4 mr-2">
            <input
              type="tel"
              placeholder="mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}
              className="appearance-none border-b-2 w-full p-2 text-grey-darker leading-base focus:outline-none text-sm"
            />
          </label>
        </div>
        <div className="w-full flex px-12 py-2">
          <label htmlFor="password" className="block w-1/2 mb-4 mr-2">
            <input
              type="password"
              placeholder="password"
              className="appearance-none border-b-2 w-full p-2 text-grey-darker leading-base focus:outline-none text-sm"
            />
          </label>
          <label htmlFor="confirm password" className="block w-1/2 mb-4 mr-2">
            <input
              type="password"
              placeholder="confirm password"
              className="appearance-none border-b-2 w-full py-2 text-grey-darker leading-base focus:outline-none text-sm"
            />
          </label>
        </div>
        <div className="flex justify-between px-12 pb-6">
          <button className="bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSubmit}>
            Register
          </button>
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={props.loginForm}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

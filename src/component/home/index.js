import React,{useState} from 'react';
import Login from '../login';
import Signup from '../signup';
import StudentList from '../list/StudentList';
export default function Home() {
  const [signUpForm , setsignUpForm] = useState(true);
  const [studentListData,setstudentList] = useState(false);
  const [loginForm,setLoginForm] = useState(true);
  const showLoginForm = () =>{
   return  setsignUpForm(false)
  }
  const showSignupForm = () =>{
   return setsignUpForm(true)
  }
  const showStudentList = () =>{
   return setstudentList(true),setLoginForm(false)
  }
  return (
    <>
    {signUpForm ? <Signup loginForm = {showLoginForm}/> :loginForm ? <Login signIn={showStudentList}  signUpForm={showSignupForm} /> : " "}
    { studentListData?   <StudentList /> : " "}
    </>
  )
}

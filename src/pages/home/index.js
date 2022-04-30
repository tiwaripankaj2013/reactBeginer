import React,{useState} from 'react';
import Login from '../../component/login';
import Signup from '../../component/signup';
import StudentList from '../../component/list/StudentList';
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
  const formsType={
    login:"Login Form",
    signup:"Register form"
  }
  return (
    <>
    {signUpForm ? <Signup formName={formsType.signup} loginForm = {showLoginForm}/> :loginForm ? <Login formName={formsType.login} signIn={showStudentList}  signUpForm={showSignupForm} /> : " "}
    { studentListData?   <StudentList /> : " "}
    </>
  )
}

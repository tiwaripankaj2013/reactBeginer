import {useState} from 'react';
import Login from '../../components/login';
import Signup from '../../components/signup';
import StudentList from '../../components/list/StudentList';
import { Card } from "../../components/ui/card";
import { CustomTable } from "../../components/ui/customTable";

 function Home() {
  const [signUpForm , setsignUpForm] = useState(true);
  const [studentListData,setstudentList] = useState(false);
  const [loginForm,setLoginForm] = useState(true);

  const [userList,setUserList] = useState([]);
  const [userId,setUserId] = useState(null);
  const [userDetails,setUserDetails] = useState(null);

  const tHeading = ["Id", "First name", "Last name", "Email",'Acton'];

  const showLoginForm = () =>{
     setsignUpForm(false)
  }
  const showSignupForm = () =>{
    setsignUpForm(true)
  }
  const showStudentList = () =>{
    setstudentList(true); setLoginForm(false)
  }
  
  const handleSignUpData = (formInputsData) =>{
   if(userId === null){
    let existUserList = [...userList];
    existUserList.push(formInputsData);
    setUserList(existUserList);
   }
   else{
    let existUserList = [...userList];
    existUserList[userId] = formInputsData;
    setUserList(existUserList);
    setUserId(null);
    setUserDetails(null);
   }
    

  }
  const delteUser = (index) => {
    let existUserList = [...userList];
    existUserList.splice(index, 1);
    setUserList(existUserList);
    
  }
  const editUserDetail = (index) =>{
    setUserId(index);
    setUserDetails(userList[index]);
  }

  const formsType={
    login:"Login Form",
    signup:"Register form"
  }

  return (
    <>
    {signUpForm ? <Signup signupData={handleSignUpData} userDetails={userDetails}
      formName={formsType.signup} loginForm = {showLoginForm}/> :
      loginForm ? <Login formName={formsType.login} signIn={showStudentList} 
      signUpForm={showSignupForm} /> : " "}
    {studentListData?   <StudentList /> : " "}
    <div className="custom-container">
      <Card title="User List" subTitle="Basic Information">
      {userList.length > 0 ? (
        <CustomTable tableHeading={tHeading} tableData={userList} deleteHandler={delteUser} editHandler={editUserDetail} />
      ) : 'no any user register'}
      </Card>
      </div>
    </>
  )
}

export default Home;
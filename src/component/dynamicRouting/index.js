import React from 'react';
import { Link } from 'react-router-dom';
const users = [
   {id:"a1", name:'Pankaj',age:24},
   {id:"a2", name:'Sujeet kumar',age:24},
   {id:"a3", name:'Rakesh singh',age:24}
 ]
export default function DynamicRouting() {
  // navigate('users/',{replace:true});
  //navigate(-1) // go to previous page
  return (
   <>
   <h3 className=" text-green-800">Welcome to Dynamic Routing</h3>
    <ol>
       {users.map((user)=><li key={"users/"+user.id}><Link to={user.id} >{user.name} <span className=" inline-block pl-2 text-green-700">Age :  {user.age}</span></Link></li>)}
   </ol>
   </>
  )
}

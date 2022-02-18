import React from 'react';
import { useParams,useHistory } from 'react-router-dom';


const User = (props) => {
   let {id} = useParams();
  return (
    <h1>test {props.users.id}</h1>
  )
}

export default User;
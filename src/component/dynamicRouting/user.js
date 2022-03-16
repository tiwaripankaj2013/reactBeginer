import React from 'react';
import { useParams, } from 'react-router-dom';


const User = (props) => {
  return (
    <h1>test {props.users.id}</h1>
  )
}

export default User;
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllPostQuery } from "../../features/services/post";
import { useNavigate } from "react-router";

const Posts = () => {
  const responseInfo = useGetAllPostQuery();
  console.log('Response Information : ',responseInfo)

  return(
    <div className="bg-gray-500">
      redux toolkit use 
    </div>
  )
  
};

export default Posts;

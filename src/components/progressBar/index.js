import React, { useState,useEffect,useRef } from "react";

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);


  let interval = useRef(
  setInterval(()=>{
    setProgress(prevprog => prevprog + 1);
  },1000));
  console.log(interval);
  console.log(progress);
  // clearInterval(interval.current);
  useEffect(()=>{
if(progress>50){
console.log('test')
  clearInterval(interval.current);
}
  },[progress])


  return (
    <div className="w-full mt-2 h-10 bg-gray-300">
      <div
        className="bg-red-800 h-5"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

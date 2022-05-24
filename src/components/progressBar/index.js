import React, { useState,useEffect} from "react";

export const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(()=>{
   
    // let interval = setInterval(() => setProgress(progress + 10), 2000);
    
    // if(progress >= 100){
    //   clearInterval(interval);
    // }
    // let interval =  setInterval(function () {
    //   setProgress(progress +10);
    //   if(progress>100){
    //     clearInterval(interval);
    //   }
    //   },1000);
    
    
  },[progress]);
  


  return (
    <div className="w-full mt-2 h-10 bg-gray-300">
      <div
        className="bg-red-800 h-5"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

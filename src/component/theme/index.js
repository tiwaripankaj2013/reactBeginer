import React, { useState } from "react";
import { useEffect } from "react";
import "./square.css";
const Theme = () => {
  // const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useState('dark');
  const switchTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };
  useEffect(()=>{
    document.documentElement.className = theme
  },[theme])
  return (
    <div>
      <button className="btn btn-primary" onClick={switchTheme}>
        Switch 
      </button>
      <p>welcome to theme component</p>

      <div className="square">square</div>
    </div>
  );
};

export default Theme;

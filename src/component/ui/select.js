import React from 'react';

export default function CustomSelect(props) {
  return (
    <select className={props.className ? props.className :null}  defaultValue={'DEFAULT'}>
        <option value="DEFAULT" disabled>{props.default?props.default:'select field'}</option>
       {props.data.map((item,index)=>{
         return <option value={item.key} key={index}>{item.name}</option>
       })}
    </select>
  )
}

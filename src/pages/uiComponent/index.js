import React, { useState } from "react";
import { CustomButton } from "../../component/ui/customButton";
import {CustomSelect} from "../../component/ui/select";
import {Card} from '../../component/ui/card';
import {CustomTable} from '../../component/ui/customTable';
let stateList = [
  {
    key: "AN",
    name: "Andaman and Nicobar Islands",
  },
  {
    key: "AP",
    name: "Andhra Pradesh",
  },
  {
    key: "AR",
    name: "Arunachal Pradesh",
  },
  {
    key: "AS",
    name: "Assam",
  },
  {
    key: "BR",
    name: "Bihar",
  },
  {
    key: "CG",
    name: "Chandigarh",
  },
  {
    key: "CH",
    name: "Chhattisgarh",
  },
  {
    key: "DH",
    name: "Dadra and Nagar Haveli",
  },
  {
    key: "DD",
    name: "Daman and Diu",
  },
  {
    key: "DL",
    name: "Delhi",
  },
  {
    key: "GA",
    name: "Goa",
  },
  {
    key: "GJ",
    name: "Gujarat",
  },
  {
    key: "HR",
    name: "Haryana",
  },
  {
    key: "HP",
    name: "Himachal Pradesh",
  },
  {
    key: "JK",
    name: "Jammu and Kashmir",
  },
  {
    key: "JH",
    name: "Jharkhand",
  },
  {
    key: "KA",
    name: "Karnataka",
  },
  {
    key: "KL",
    name: "Kerala",
  },
  {
    key: "LD",
    name: "Lakshadweep",
  },
  {
    key: "MP",
    name: "Madhya Pradesh",
  },
  {
    key: "MH",
    name: "Maharashtra",
  },
  {
    key: "MN",
    name: "Manipur",
  },
  {
    key: "ML",
    name: "Meghalaya",
  },
  {
    key: "MZ",
    name: "Mizoram",
  },
  {
    key: "NL",
    name: "Nagaland",
  },
  {
    key: "OR",
    name: "Odisha",
  },
  {
    key: "PY",
    name: "Puducherry",
  },
  {
    key: "PB",
    name: "Punjab",
  },
  {
    key: "RJ",
    name: "Rajasthan",
  },
  {
    key: "SK",
    name: "Sikkim",
  },
  {
    key: "TN",
    name: "Tamil Nadu",
  },
  {
    key: "TS",
    name: "Telangana",
  },
  {
    key: "TR",
    name: "Tripura",
  },
  {
    key: "UK",
    name: "Uttar Pradesh",
  },
  {
    key: "UP",
    name: "Uttarakhand",
  },
  {
    key: "WB",
    name: "West Bengal",
  },
];
const habits = ["dancing", "listning music", "traveling"];
const tableData = [
    {id:1,fName:"Pankaj",lName:"Tiwari",email:"tiwari@gmail.com"},
    {id:2,fName:"Rakesh",lName:"Pandey",email:"rakesh@gmail.com"},
    {id:3,fName:"Shyam",lName:"Singh",email:"shyam@gmail.com"},
    {id:4,fName:"Mohan",lName:"Kumar",email:"mohan@yahoo.com"}
]
export const UiComponent = () => {
const { hobies, setHobies } = useState(true);
// const showHobies =  () => {
//   hobies === true ? setHobies(false) : setHobies(true);
// }
const columns = [
  {field:'id',title:'#'},
  {field:'fName',title:'First Name'},
  {field:'lName',title:'Last Name'},
  {field:'email',title:'Email'},
  {field:'edit',title:'Action'},
]
  return (
    <div className="custom-container">
      <CustomSelect
        className=" border-indigo-700 shadow-md m-2 border p-1"
        default="select state"
        data={stateList}
      />
     
      <CustomButton
        label="Show Hobbies"
        customClass=" bg-teal-600 text-white rounded px-3 py-1 cursor-pointer"
        event={() =>{setHobies(true)}}
      />
      
        {hobies? <ul className="px-2">
          {habits.map((item, index) => (
            <li className="mb-1 capitalize" key={index}>
              {item}
            </li>
          ))}
        </ul> : ''}
      
      {hobies ? <p>welcome </p> : ' '}
      <Card title="User List" subTitle="Basic Information">
        <CustomTable columns={columns} tableData={tableData}/>
      </Card>
    </div>
  );
};

export default UiComponent;

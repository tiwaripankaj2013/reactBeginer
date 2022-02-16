import React from 'react'
import ListItem from './ListItem';


const StudentList = (props) => {
   const students = [
      {name:"Rahul Kumar",class:7},
      {name:"Shyam Kumar singh",class:8},
      {name:"Piyush Kumar",class:9},
      {name:"Priya Kumari",class:10},
      {name:"Sumit Pandey",class:6}
   ]
const studentData = students.map((student)=>{
 return   <ListItem key={Math.random()} name={student.name} classes={student.class} />
})
  return (
    <div className="bg-gray-300">
           <h5 className="text-2xl text-purple-900">Student list</h5>
       <ol className="border border-gray">
         {studentData}
       </ol>
    </div>
  )
}

export default StudentList;
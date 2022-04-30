import React from 'react';
import {Rating} from './rating';

let ratings = [
   {
      id:1,
      name:"Pankaj kumar",
      rating:4.1,
      content:'Loreum lipsume about user feedback'
   },
   {
      id:2,
      name:"Sagar kumar",
      rating:4.5,
      content:'Loreum lipsume about user feedback'
   },
   {
      id:3,
      name:"Sadhir kumar",
      rating:2.85,
      content:'Loreum lipsume about user feedback'
   }
 ]
 const ratingsList = ratings.map((item) =>{
   return <Rating  name={item.name} rating={item.rating} content={item.content} />;
 })

export default function  RatingList (){
  return (
    <div className="bg-gray-300 p-4 mx-auto">
       {ratingsList}
    </div>
  )
}

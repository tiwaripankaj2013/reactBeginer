

const Rating = ({name,rating,content,id})=>{
   const userRating = new Array(5).fill().map((_,index)=>{
      return (index+1<Math.round(rating))? <span  className={`text-orange-500`}>&#9733;</span>:<span  className={`text-orange-500`}>&#9734;</span>
   }) 
   return <div className="list-item" >
         <h3 className="h-3 text-purple-900">{name}</h3>
         <div className="mt-2"> {userRating}</div>
         <p>{content}</p>
   </div>
}

export{Rating}
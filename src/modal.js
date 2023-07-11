import { useContext, useEffect, useState } from "react" 
import { Levelcontext } from "./context"
import Recipe from "./receipe"
import {FaTimes} from "react-icons/fa"

function Modal(){
   const{meal,setMeal,setshow,show}=useContext(Levelcontext)
   const[detail,setdetail]=useState({})


   useEffect(()=>{
     getmodal()
   },[ ])

   const getmodal=async()=>{
    const res=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
    const data=await res.json()
    setdetail(data.meals[0])
    console.log(data)
}
    return(
        <div class = "container">
    <div class = "meal-wrapper">
<div className = "meal-details">
<button type = "button" class = "btn recipe-close-btn" id = "recipe-close-btn" onClick={()=>setshow(!show)}>
          < FaTimes className = "fas fa-times"/>
        </button>
<div className = "meal-details-content">
        <h2 className = "recipe-title">{detail.strMeal}</h2>
        <p className = "recipe-category">{detail.strCategory}</p>
        <div className = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>{detail.strInstructions}</p>
        </div>
        <div className = "recipe-meal-img">
            <img src = {detail.strMealThumb}alt = ""/>
        </div>
        <div className = "recipe-link">
            
            <a href = {detail.strYoutube} target = "_blank">Watch Video</a>
        </div>  
        
</div>
</div>
</div>
</div>
    )
}
export default Modal;
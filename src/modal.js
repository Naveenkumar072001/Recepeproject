import { useContext, useEffect } from "react" 
import { Levelcontext } from "./context"
import Recipe from "./receipe"

function Modal(){
   const{meal,setMeal}=useContext(Levelcontext)
console.log(meal)

   useEffect(()=>{
     getmodal()
   },[ ])

   const getmodal=async()=>{
    const res=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`)
    const data=await res.json()
    console.log(data)
}
    return(
<div>
        <h2 className = "recipe-title">{meal.strMeal}</h2>
        <p className = "recipe-category">{meal.strCategory}</p>
        <div className = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>{meal.strInstructions}</p>
        </div>
        <div className = "recipe-meal-img">
            <img src = {meal.strMealThumb}alt = ""/>
        </div>
        <div className = "recipe-link">
            
            <a href = {meal.strYoutube} target = "_blank">Watch Video</a>
        </div>

</div>
    )
}
export default Modal;
import { useContext, useEffect, useState } from "react"

function Recipe(){
    const[setsearch]=useContext
const[receipe,setreceipe]=useState([])

useEffect(()=>{
    getreceipe()
},[])
    const getreceipe=async()=>{
        const receipe=await fetch()
        const data=await receipe.json()
        setreceipe(data.meals)
    }

    return(
        <div>
{receipe.map((meal)=>{
    <div className = "meal-item" data-id = "${meal.idMeal}">
    <div className = "meal-img">
        <img src = "${meal.strMealThumb}" alt = "food"/>
    </div>
    <div className = "meal-name">
        <h3>${meal.strMeal}</h3>
        <a href = "#" class = "recipe-btn">Get Recipe</a>
    </div>
</div>
} )}

        </div>
    )
}
export default Recipe;
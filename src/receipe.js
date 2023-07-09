import { useContext, useEffect, useState } from "react"
import { Levelcontext } from "./context"
import './index.css'
//import"./App.css"
import Modal from "./modal"
function Recipe(){
    const{setsearch,setQuery,query,meal,setMeal,show ,setshow}=useContext(Levelcontext)
const[receipe,setreceipe]=useState([])

useEffect(()=>{
    getreceipe()
},[query])
    const getreceipe=async()=>{
        const receipe=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`)
        const data=await receipe.json()
        setreceipe(data.meals) 
        setMeal(meal)
        //console.log(data.meals)
    }
    
    return(
        <div className = "container">
    <div className = "meal-wrapper">
        <div className = "meal-result">
        <h2 className = "title">Your Search Results:</h2>
        <div id="meal">
        {
            receipe.map(meal => {
                    return(
                    <div className = "meal-item" key = {meal.idMeal}>
                        <div className = "meal-img">
                            <img src = {meal.strMealThumb} alt = "food"/>
                        </div>
                        <div className = "meal-name">
                            <h3>{meal.strMeal}</h3>
                            <a href = "#" class = "recipe-btn" onClick={()=>setshow(!show) }>Get Recipe</a>
                            
                        </div>
                    </div>)
        } 
            )  
    }</div>
      </div>
      </div>
      </div>
      
    )
}
export default Recipe;
//data-id 
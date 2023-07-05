import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import Recipe from './receipe';
import { Levelcontext } from './context';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
  
function App(){
  const[search,setsearch]=useState("")

  const updatesearch= e =>{
setsearch(e.target.value)
  }
  console.log(search)

  return(
    
      
    <div className = "container">
    <div className = "meal-wrapper">
      <div className = "meal-search">
        <h2 className = "title">Find Meals For Your Ingredients</h2>
        <blockquote>Real food doesn't have ingredients, real food is ingredients.<br/>
          <cite>- Jamie Oliver</cite>
        </blockquote>
<form>
        <div className = "meal-search-box">
          
          <input type = "text" className = "search-control" onChange={updatesearch} placeholder="Enter an ingredient "id = "search-input"/>
          <button type = "submit" className = "search-btn btn" id = "search-btn">
            <i className = "fas fa-search"></i>
          </button>
        </div>
        </form>
        
      </div>
    </div>
    </div>
    
    
  )
}
export default App
//<Levelcontext.Provider value={{setsearch}}>
            //<Recipe/>
          //</Levelcontext.Provider>
import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App(){
  const[search,setsearch]=useState(0)

  return(
    <div class = "container">
    <div class = "meal-wrapper">
      <div class = "meal-search">
        <h2 class = "title">Find Meals For Your Ingredients</h2>
        <blockquote>Real food doesn't have ingredients, real food is ingredients.<br/>
          <cite>- Jamie Oliver</cite>
        </blockquote>

        <div class = "meal-search-box">
          <input type = "text" class = "search-control" placeholder="Enter an ingredient "id = "search-input"/>
          <button type = "submit" class = "search-btn btn" id = "search-btn">
            <i class = "fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}
export default App
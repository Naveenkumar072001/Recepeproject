import logo from './logo.svg';
//import './App.css';
import {useState} from "react"
import Recipe from './receipe';
import {FaSearch} from "react-icons/fa";
import { Levelcontext } from './context';
import Modal from './modal';
import './index.css';

function App(){
  const[search,setsearch]=useState("")
const[query,setQuery]=useState("egg")
const[meal,setMeal]=useState({})
const[show,setshow]=useState(true)


  const updatesearch= e =>{
setsearch(e.target.value)
  }
  console.log(search)

const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setsearch("");}
    console.log(query)
  return(
    <div className = "container">
    <div className = "meal-wrapper">
      <div className = "meal-search">
        <h2 className = "title">Find Meals For Your Ingredients</h2>
        <blockquote>Real food doesn't have ingredients, real food is ingredients.<br/>
          <cite>- Jamie Oliver</cite>
        </blockquote>

        <div className = "meal-search-box">
          <input type = "text" className = "search-control" placeholder="Enter an ingredient" id = "search-input" onChange={ updatesearch}/>
          <button type = "submit" className = "search-btn btn" id = "search-btn" onClick={getSearch}>
          <FaSearch className='icons'/>
          </button>
        </div>
      </div>
      </div>
      <div>
        <Levelcontext.Provider value={{setsearch,query,setQuery,search,meal,setMeal,show,setshow}}> 
        { show? <Recipe/> :<Modal/>   }                            
        </Levelcontext.Provider>
      </div>
      </div>
      
  )
}
export default App



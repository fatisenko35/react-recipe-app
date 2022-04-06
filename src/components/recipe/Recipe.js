import { useState, useEffect } from 'react';
import chef from "../../assets/home.svg";


import "./Recipe.css"
import "./Details.css"
import Details from '../details/Details';

const Recipe = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [select, setSelect] = useState("Breakfast");
  const [showData, setShowData] = useState(false);
  const [details, setDetails] = useState(false)


  const APP_ID = 'fa255c54';
  const APP_KEY = '864a82802664a50366c68f2ca424dad1';

  const fetchApi = async (query) => {

    if (query === "") {
      alert("Boş bırakmayınız");
      return
    }
    const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${select}`)
    const fetchData = await res.json();

    setData(fetchData.hits);
    console.log(fetchData.hits);
    fetchData.hits.map(item => console.log(item.recipe));
    setShowData(true);
  }
  const handleChange = (e) => {
    setSelect(e.target.value)
  }
  const handleClick = (e) => {
    setDetails(false)
    fetchApi(query)
  }
  const inputChange = (e) => {
    setQuery(e.target.value)

  }
const handleDetails = (e) => {
  const a = e.target.parentElement.firstChild.innerHTML;
  const filterData = data.filter((item) => {
   return item.recipe.label === a
  })
  setDetails(true)
  setData(filterData)
}

  return (
    <div className="recipe">


      
     { !details ? (<div className="search-div">
      <h1>Food App</h1>
        <input placeholder="Search" onChange={inputChange} />
        <button onClick={handleClick}>Search</button>
        <select name="cars" id="cars" onChange={handleChange}>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
          <option value="Teatime">Teatime</option>
        </select>
      </div>) : ("")
      }
      <div className="cards-container">
      {!showData ? (<img className="chef" src={chef} alt="" />) : (

data?.map((item, i) => {
   if (!details) {
   return  (
      <div className="cards" key={i}>
        <h1>{item?.recipe?.label}</h1>
        <img src={item?.recipe?.image} alt=" " />
        <button onClick={handleDetails}>View More</button>

       
      </div>

     )
   }
  else {
  return  (

      <Details item = {item} i = {i} /> 
    )
  }
} )
          
      


   

  ) 
}
 </div>
 </div>
  )}
export default Recipe
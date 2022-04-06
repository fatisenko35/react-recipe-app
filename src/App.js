import {useState} from 'react';
import './App.css';
import Router from './components/Router';
import meal from "./assets/meal.svg";
import "./components/header/Header.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleSubmit = (e) => { 
   
    e.preventDefault();

setIsLoggedIn(true)

    
}


  return (
    <div className="App">
     
     
   { !isLoggedIn ? (<div className="container1">
            <div className="container2">
               
                    <img src={meal} alt="" style={{ width: "150px" }} />
                    <h1 className="head">{"<Fatisenko />"} Recipe</h1>
                    <form onSubmit={handleSubmit }>
                        <input placeholder="USERNAME" required/>
                        <input type="password" placeholder="PASSWORD" required/> 
                        <button  >LOGIN</button>
                    </form>
             


            </div>
        </div>) :
   ( <Router />)}
      
    
    </div>  
     
    
  );
}

export default App;

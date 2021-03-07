import React,{useState} from "react"
import './App.css';

function App() {
const [count,setcount]=useState(0);



  return (
   <div className="App">
   
     <h2 className={count < 5 ? "lessthanfive" : count > 100 ? "greaterthanhundred" : null}>{count}</h2>
     <div className="button">
     {/* <button className="button" onClick={()=> setcount(0)} >0</button> */}
     <button className="button2" onClick={()=> setcount(count-1)}>-</button>
     <button className="button1" onClick={()=> setcount(count+1)}>+</button>
     
     </div>
   </div>

  );
}

export default App;

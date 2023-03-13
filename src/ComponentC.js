import './ComponentC.css'
import { useContext } from 'react'
import { CounterContext } from './CounterContext'

const ComponentC=()=>{
const {Counter,setCounter}=useContext(CounterContext)
    return(
      <div className="componentC-container">
        <h1 >Function Child Component</h1>
        <p >{Counter}</p>
        <button onClick={()=>setCounter(prevCounter=>prevCounter-1)}>Decrement</button>
    
       
      </div>
    )
}

export default ComponentC
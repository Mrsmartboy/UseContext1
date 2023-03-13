import {useState} from 'react'
import './App.css';
import { CounterContext } from './CounterContext';
import ComponentF from './ComponentF'
const App =()=>{

 
  const [Counter,setCounter] = useState(0)
  return(
    <div className='App-container'>
      <h1>App Component</h1>
      <p>{Counter}</p>
      <div className='button-container'>
      <button onClick={()=>setCounter(preCounter=>preCounter+1)}>Increment</button>
      <button onClick={()=>setCounter(preCounter=>preCounter-1)}>Decrement</button>
     
      </div>
      <CounterContext.Provider value={{Counter,setCounter}}>
      <ComponentF/>
      <hr/>
      </CounterContext.Provider>
    </div>
  )


}

export default App;

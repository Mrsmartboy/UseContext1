import ComponentC from './ComponentC'
import './ComponentF.css'
import { useContext } from 'react'
import { CounterContext } from './CounterContext'
const ComponentF=()=>{
  const {Counter,setCounter} = useContext(CounterContext)
    return(
      <div className="componentF-container">
        <h1 className='componentF-head'>Function Component</h1>
        <p className='componentF-para'>{Counter}</p>
        <button type='button' onClick={()=>setCounter(prevState=>prevState+1)}>Increment</button>
        <hr className='hr-line'/>
        <ComponentC/>

      </div>
    )
}

export default ComponentF
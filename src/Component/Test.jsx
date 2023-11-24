import React from 'react'
import { useState } from 'react';
    function App(){
        const[num,setNum]=useState(0)
        const plus=(e)=>{
            setNum(num+1)
        }
        const minus=(e)=>{
            setNum(num-1)
        }
    
  return (
    <div>
        <button onClick={minus}>-</button>
        <p>{num}</p>
        <button onClick={plus}>+</button>
    </div>
  )
}

export default App
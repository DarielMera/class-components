import React from "react"
import {useState, useEffect} from 'react'

function Counter2({name}){
    const [counter, setCounter] = useState(0)
    useEffect(()=>{
        document.title = `you clicked ${counter} times.`
        return () =>{
            document.title = '!! React App'
        }
    }, [counter])

    return (
      <>
      <h1>You clicked the button {counter} times</h1>
      <button onClick = {()=> setCounter(counter + 1)}>
          click Me!
          </button>
    </>
    )
}






export default Counter2 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
  function handleClick(){
    alert("first click")
  }
  const handleClick2 = () =>{
    alert("second click")
  }
  function handleClick3(num){
    alert(num+5)

  }

  return (
    <>
     
       
     
      <h3>React Core Concepts</h3>
      <Friends></Friends>
      
       <Users></Users>
       <Team></Team>
       <Counter></Counter>
    

     
     

    </>
  )
}

export default App

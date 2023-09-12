import { useState } from "react"

export default function Team() {


    
    const [team , setTeam] =useState(0)

    // function handlerAdd(){
      
    //     setTeam(team+1)
    // }
    // function handleRemove(){
    //     setTeam(team-1)
        
    // }
    const teamStyle ={
        border:'2px solid Red',
        padding:'10px',
        borderRadius:'15px'

    }

    return <div style={teamStyle} >
        
       <h3>Players:{team}</h3>
       <button onClick={()=>{setTeam(team+1)}}>Add Players</button>
      <button onClick={()=>{setTeam(team-1)}}>Remove Players</button>

           </div>

}
import { useState } from "react"

export default function Counter(){ 
    const [count , setCount] = useState(0)

    function handlerAdd(){
        const newCount = count +1
        setCount(newCount)
    }
    function handleReduce(){
        const newCount =count -1
        setCount(newCount)
    }
    const counterStyle ={
        border:'2px solid Red',
        padding:'10px',
        borderRadius:'15px',
        marginTop: '10px'
        

    }

    return <div style={counterStyle}>
        <h3>Counter: {count}</h3>
        <button onClick={handlerAdd}>Add</button>
        <button onClick={handleReduce}>Reduce</button>
    </div>
}
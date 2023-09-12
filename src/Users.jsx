import { useState ,useEffect } from "react"

export default function Users(){
    const [users , setusers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setusers(data.length))

    },[])

    return (
        <div>
            <h2>Users:{users}</h2>

        </div>
    )
}
import { useEffect } from "react";
import { useState } from "react";
import Axios from "axios"

function Contact()
{
    const [name,setName] = useState("Sasidev");
    const [data,setData] = useState([]);
    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status===200)
            {
                setData(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err))
    },[])
    const handleClick = ()=>
    {
        setName("Ravi");
    }
    const ContactDetails=()=>
    {
        return data.map((val)=>{
            return <p>Name : {val.name} ___ Phone: {val.phone}</p>

        })
    }
    return(
        
        <div>
            <h1>The owner of this page is {name}</h1>
            <button onClick={handleClick}>Change owner</button>
            {ContactDetails()}
        </div>
    )
}

export default Contact;
import React,{useEffect,useState} from "react";
import axios from "axios";

function AxiosPost(){
    const[name,setName]=useState("");
    
    const handleChange=(event)=>{
        setName(event.target.value);
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios  
          .post('http://localhost:3001/user',{name})
          .then((res)=>{
            console.log(res.data);
          })
          .catch((error)=>
          {
              console.log(error);
          });
        };

    return(
        <div>
            Axios Post
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleChange}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default AxiosPost;
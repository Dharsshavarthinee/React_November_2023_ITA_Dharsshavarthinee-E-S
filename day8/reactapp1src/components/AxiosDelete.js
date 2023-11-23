import React,{useEffect,useState} from "react";
import axios from "axios";

function AxiosDelete(){
    const[id,setId]=useState();
    
    const handleId=(event)=>{
        setId(event.target.value);
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios  
          .delete(`http://localhost:3001/user/${id}`)
          .then((res)=>{
            console.log(res.data);
            console.log(`Deleted ID: ${id}`)
          })
          .catch((error)=>
          {
              console.log("Error: ",error);
          });
        };

    return(
        <div>
            Axios Delete
            <form onSubmit={handleSubmit}>
                <input type="number"onChange={handleId}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default AxiosDelete;
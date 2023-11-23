import React,{useEffect,useState} from "react";
import axios from "axios";

function AxiosGet(){
    const[employee,setEmployee]=useState([]);
    useEffect(()=>{

        axios
        .get('http://localhost:3001/user')
        .then((res)=>
        {
            setEmployee(res.data);
        })
    .catch((err)=>
    {
        console.log(err);
    })
    },[]);

    return(
        <div>
            AxiosSet
            <ul>
                {employee.map((emp)=>(
                    <li key={emp.id}>{emp.name}</li>
                ))}
            </ul>
        </div>
    );
}
export default AxiosGet;
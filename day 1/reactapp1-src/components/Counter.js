import { useState } from "react"

const Counter =()=>{
    const[count,setCount]=useState(0);

    const incCount=()=>{
        let value=count;
        setCount(++value);
    }

    const decCount=()=>{
        let value=count;
        setCount(--value);
    }


    return(
        <div>
           <h2>Counter={count}</h2>
           <button onClick={incCount}>Increment</button>
           <button onClick={decCount}>Decrement</button>
        </div>
    );
};

export default Counter;
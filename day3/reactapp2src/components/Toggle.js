import { useState } from "react";

function Toggle(){
  const [name,setName]=useState("Kaioken");
  const [count,setCount]=useState(0);
  const nametoggler=()=>{
    let value=count;
    setCount(++value);

    if(count=== 3)
    {
      if(name==="Kaioken")
      setName("SuperSaiyan");
      else
      setName("Kaioken");

      setCount(0);
    }
  };


  return(
        <div>
          <h1>{name}</h1>
          <button onClick={nametoggler}>Toggle</button>
        </div>
  );
};

export default Toggle;
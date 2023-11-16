import { useState } from "react";
function ThemeSwitch()
{
    
    const [bg,setBg]=useState(false);
    const [bgc,setBgc]=useState("white")
    const [tc,setTc]=useState("black")
    const toggleMode=()=>
    {
        setBg(!bg);
        if(bg)
        {
            setBgc("black");
            setTc("white");
        }
        else{
            setBgc("white");
            setTc("wblack");
        }
    }
    return(
        <div style={{backgroundColor:bgc}}>
            {bg && <p style={{color:tc}}>LightMode</p>}
            {!bg && <p style={{color:tc}}>Dark Mode</p>}
            <button onClick={toggleMode} style={{backgroundColor:"blueviolet",color:"white"}}>Switch theme</button>
        </div>
    
   
    );
};

export default ThemeSwitch;
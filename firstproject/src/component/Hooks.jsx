import { useState } from "react";

function HookEx(){
   const [a,seta]=useState(10);
   function fun(){
    seta(20);
    alert("Value of variable "+a);
   }
    return(
        <>
        <h1>State of Variable</h1>
        <h1>{a}</h1>
        <button onClick={fun}>click</button>
       
       
        </>
    )
}
export default HookEx
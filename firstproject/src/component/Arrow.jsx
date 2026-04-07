function Arrow(){
    function abc(){
      alert("function call");
     }
     const fruit=()=>
     {
        alert("Example of arrow function")
     }
     const parameter=(name)=>
     {
        alert(name)
     }

    return(
        <>
        <h1>Example of arrow function</h1>
        <button onClick={abc}>click to call function</button>
        <button onClick={()=>fruit()}>Arrow function</button>
        <button onClick={()=>parameter("First Parameter")}>Parameter passing in arrow function</button>
        <button onClick={()=>parameter("Click on apple button")}>Apple</button>
         <button onClick={()=>parameter("Click on banana button")}>Banana</button>
        </>
    )
}
export default Arrow
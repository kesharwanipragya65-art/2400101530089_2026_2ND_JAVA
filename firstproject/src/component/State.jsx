function StateEx(){
    let data = "Demo"
    function update(){
        data="Example"
        alert(data)
    }
    return(
      <h1>
          <h1>State in React</h1>
          <h1>{data}</h1>
          <button onClick={update}>Click to change value</button>

      </h1>
    )
}
export default StateEx
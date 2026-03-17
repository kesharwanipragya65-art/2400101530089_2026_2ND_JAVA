import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './component/Demo'
import { Demo2 } from './component/Demo2'

function App() {
    const name="Pragya";
    let x=10;
    let y=20;
    var a=10;
    var b=20;
    const p=10;
    const q=20;
    function fun(){
      return "inside the function";
    }
    function sum(a,b){
      return a+b;
    }
    function cal(a,b,op){
      if(op=='+'){
        return a+b;
      }
      else if(op== '-')
      { return a-b;}

      else{
        return a*b;
      }
    }
    function tab(a){
      for(i=1;i<11;i++){
        return a*i;
      }
    }

  return (
    <div>
      {/* <h1>HI, my name is Pragya Kesharwani</h1>
      <h1>Inside the app component</h1> */}
      <h1>Use of variable with jsx</h1>
      <h1>value of variable {name}</h1>
      <h3>{x+y}</h3>
      <h3>{a+b}</h3>
      <h3>{p+q}</h3>
      <h2>{fun()}</h2>
      <h2> {tab(5)}</h2>
      <h2>calculator : {cal(5,6,'/')}</h2>
      <h2>example of parameterized function {sum(5,6)}</h2>
      {/* <Employee></Employee>
      <Demo></Demo>
      <Demo2></Demo2> */}
       
    </div>
  )
}
function Employee(){
  return(
    <h1>The Employee name is Pragya</h1>
  )
}

export default App

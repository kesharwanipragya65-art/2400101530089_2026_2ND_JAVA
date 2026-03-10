import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './component/Demo'
import { Demo2 } from './component/Demo2'

function App() {
 

  return (
    <div>
      <h1>HI, my name is Pragya Kesharwani</h1>
      <h1>Inside the app component</h1>
      <Employee></Employee>
      <Demo></Demo>
      <Demo2></Demo2>
       
    </div>
  )
}
function Employee(){
  return(
    <h1>The Employee name is Pragya</h1>
  )
}

export default App

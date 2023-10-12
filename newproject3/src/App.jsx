import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const msg = "Welcome to React!"
  const handleClick = ()=>{
    console.log("Hello, button clicked!");
  }
  const handleClickparameter = (a)=>{
    console.log("Hello, button clicked!", a);
  }
  return (
    <>
    <Navbar headline="myApp" menuitems={["Home", "About", "Custom", "contact"]}/>
    <Navbar headline="myApp2"/>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{msg}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <button onClick={handleClick}>Click me</button>
        <button onClick={()=> handleClickparameter("a")}>Click me but different</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

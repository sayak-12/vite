/* eslint-disable react/jsx-key */
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState(null)
  var welcomemsg = "Hello and welcome to React";
  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=30")
    .then(res=>res.json().then(result=>{
      setUsers(result);
    }))
  }, []);
  return (
    <>
    <Navbar heading="React"/>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{welcomemsg}</h1>
      <div className="card">
        <button onClick={() => {setCount((count) => count + 1);
        console.log("State refreshed");}}>
          count is {count}
        </button>
      </div>
      <div className="users">
        {!users && <p>No users found.</p>}
        {users && users.results.map((result)=> (
          <p key={result.email}>{result.email}</p>
        ))}
      </div>
    </>
  )
}

export default App

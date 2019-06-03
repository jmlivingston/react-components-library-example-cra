import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BlueButton, GreenButton } from 'jl-react-components-library'

function App() {
  return (
    <div className="App">
      <BlueButton text="Test" onClick={console.log} />
      <GreenButton text="Test" onClick={console.log} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App

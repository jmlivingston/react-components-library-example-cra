import BlueButton from 'jl-react-components-library/cjs/ui/BlueButton'
import GreenButton from 'jl-react-components-library/cjs/ui/GreenButton'
import React from 'react'
import './App.css'
import logo from './logo.svg'

function App() {
  return (
    <div className="App">
      <BlueButton text="Test" onClick={console.log} />
      <GreenButton text="Test" onClick={console.log} />

      {/* <GreenButton text="Test" onClick={console.log} /> */}
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

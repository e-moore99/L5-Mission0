import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Button from '@mui/material/Button';

function App() {
  return (
    <>
    <div className='page'>
    <div className='headerBox'>
    <Header />
    </div>
      <div className="bodyBox">
        <div className="searchBanner">
          <div className="searchTitle">
            <h1>Cloud types website</h1></div>
          <div className="searchbarBox">
          <input className="inputBox" type="text" /><Button variant="contained" className="searchButton">Search</Button>
          </div>
        </div>
        <div className="cardBox">
    	    <h2>random img boxes here</h2>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
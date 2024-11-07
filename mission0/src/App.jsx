import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Button from '@mui/material/Button';
import ImageCard from './components/ImageCard';

const clouds = [
  {
    type: "Cirrus",
    info: "High-altitude & wispy",
    img: "/images/cirrus.jpg",
    id: 1,
  },
  {
    type: "Cumulus",
    info: "Individual & puffy",
    img: "/images/cumulus.png",
    id: 2,
  },
  {
    type: "Stratus",
    info: "Low-level & flat",
    img: "/images/stratus.jpg" ,
    id: 3,
  }
];

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
            <h1 className="mainHeader">All About Clouds</h1></div>
          <div className="searchbarBox">
          <input className="inputBox" type="text" /><Button variant="contained" className="searchButton">Search</Button>
          </div>
        </div>
        <div className="cardBox">
          {clouds.map((cloud)=>(
            <ImageCard key={cloud.id} img={cloud.img} type={cloud.type} info={cloud.info} />

          ))}
        </div>
      </div>
      </div>
    </>
  )
}

export default App
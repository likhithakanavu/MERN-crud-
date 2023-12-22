import React from 'react'
import Nav from './Nav'
import Homeimg from '../files/im3.jpg'
import FBC from '../files/FBC.jpg'



export default function Home() {

  return (
    <>
    <Nav/>
    <div style={{ overflow: 'hidden' }}>
        <img
          src={FBC}
          alt="Services"
          style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
        />
      </div>  
    </>
  )
}

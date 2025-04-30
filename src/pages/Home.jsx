import React from 'react'
import Start from '../component/Start'
import Ready3 from '../component/Ready3'
import Ready2 from '../component/Ready2'
import Company from '../component/Company'
import Navbar from '../component/Navbar'
import Midle from '../component/Midle'
import Footer from '../component/Footer'
import How from '../component/How'
import Ready1 from '../component/Ready1'
import "../style/Home.css";



function Home() {
  return (
    <div>
       
        <Navbar/>
        
        <Midle/>
        <How/>
        
      
        <Ready2/>
        <Ready3/>
        <Start/>
  

        <Footer/>
        
        
    </div>
  )
}

export default Home
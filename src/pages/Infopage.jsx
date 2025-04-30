import React from 'react'
import InfoCompo from '../component/InfoCompo'
import Infoaccept from '../component/Infoaccept'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import '../style/infopage.css'


export default function Infopage() {  
  return (
    <div className='ikram'>
        <Navbar/>

        
  <h1>Info Card</h1>
  <h3>Congratulations, you have passed all the test</h3>


       <InfoCompo/>
       <Footer/>


    </div>
  )
}

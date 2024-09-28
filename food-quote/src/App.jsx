import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar/navbar'
import Footer from './component/footer/footer'
import Quote from './component/quote/quote'
import Data from './component/data'
function App() {


  return (
    <>
       <Navbar/>
       <Data/>
       <Footer/>
       {/* {data.map((item) => <Quote item={item}/>)} */}
       
    
    </>
  )
}

export default App

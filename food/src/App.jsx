import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Restaurantcard from './components/Restaurantcard/Restaurantcard'
import RestaurantCard from './components/Restaurantcard/Restaurantcard'


function App() {


  return (
    
      <div>
         <h1>Food Project</h1>
         <div className='card-container'>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
         </div>
      </div>
    
  )
}

export default App

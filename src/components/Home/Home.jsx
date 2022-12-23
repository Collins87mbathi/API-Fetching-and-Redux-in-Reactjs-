import React from 'react'
import Navbar from '../Navbar/Navbar'
import Products from '../Products/Products'
import Hero from "./hero.png";

const Home = () => {
  return (

    <div className='w-[100%] bg-[rgb(234,237,237)] max-w-[1400px] m-auto h-fit'>
        <Navbar/>
        <div className='w-[100%]'>
        <img className=' h-[500px] w-[100%] bg-gradient-to-b' src={Hero} alt="pic" />
        </div>
        <Products/>
    </div>
  )
}

export default Home
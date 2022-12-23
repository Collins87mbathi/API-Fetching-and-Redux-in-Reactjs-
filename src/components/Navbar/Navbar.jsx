import React from 'react'
import cart from "./purchase.png"
import search from "./find.png"
import { useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"

const Navbar = () => {
  // const products = useSelector((state)=> state.products.quantity);
const navigate = useNavigate();
  return (
    <div className='w-[100%] h-[60px] bg-[#131921] flex items-center relative'>
      <div className='w-[100%] flex items-center'>
        <div className='ml-[20px] pointer'>
          <p className='w-[100px] mt-[10px] text-[white] text-[20px] font-semibold'>Collins</p>
        </div>
        <div className='h-[35px] flex-1 flex items-center mt-[0px] mr-[15px]'>
          <input className='flex-1 w-[100%] h-[100%] border-none rounded ' type="text" placeholder="Search..." />
          <div className='bg-[#febd69] h-[100%] rounded ml-[-20px] w-[40px] flex items-center justify-center '>
            <img src={search} className='w-[22px]' alt="" />
          </div>
        </div>
        <div className='flex items-center w-fit justify-around h-[100%] pt-[5px] pr-[15px]'>
          <div
            className='text-[#fff] p-[5px] h-[80%] flex flex-col justify-center pointer mr-[15px]'
          >
            <p className='text-[12px]'>Hello,</p>
            <p className='text-[14px] semibold'>{"Guest"}</p>
          </div>
          <div  className='text-[#fff] p-[5px] h-[80%] flex flex-col justify-center pointer mr-[15px]' >
            <p className='text-[12px]'>Return</p>
            <p className='text-[14px] semibold'>& Orders</p>
          </div>
          <div className='flex items-center h-[90%] pointer'>
            <img className='w-[30px] mr-[10px]' onClick={() => navigate("/cart")} src={cart} alt="" />
            <p className='text-[#fff] font-medium'>0</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
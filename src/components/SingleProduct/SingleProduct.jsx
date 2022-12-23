import React from 'react'
import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/reducers/product.reducer';

const SingleProduct = ({prod}) => {
    const {id,title,description,price,category,image,rating} = prod;
    const [value, setValue] = React.useState(rating.rate);
    // const dispatch = useDispatch(); 
  return (
    <>
    <div className=' w-[100%] h-[100%] flex flex-col bd-[#fff] z-10 bg-white'>
      <p className='text-green-500 text-gray-500 text-sm  ml-44'>{category}</p>
        <div className='w-[100%] flex flex-col items-center mt-[20px] flex-[0.3]'>
        <img src={image}className=" w-[180px] h-[200px]" alt='pics'/> 
        </div>
        <div className='w-[90%] m-auto flex flex-col justify-evenly flex-[0.7]'>
        <h5 className='text-center text-[16px] font-semibold'>{title}</h5>
        <Rating
        name="simple-controlled"
        value={value}
        // onChange={(event, newValue) => {
        //   setValue(rating.rate);
        // }}
      />
        <p className='font-semibold'>$ {price}</p>
        <button type='click'onClick={()=>{
        console.log("hello")
        }} className='w-[100%] h-[33px] bg-[#fa8900] border-none rounded pointer'>Add to Basket</button>
        </div>
    </div>
    </>
  )
}

export default SingleProduct
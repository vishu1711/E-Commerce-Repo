import React from 'react';
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {

    const navigate=useNavigate()
   // console.log(item)
    return (<div onClick={()=>navigate(`/products/${3}`)} className='productCard w-[15rem] m-3 transition-all cursor-pointer'>

    <div className='h-[20rem] '>
        <img className='h-full w-full object-cover object-left-top ' src={item.imageUrl} alt='' />
    </div>
    <div className='textPart bg-whiten p-3'>
            <div>
                <p className='font-bold opacity-60'>{item.title}</p>
                <p>{item.description}</p>
            </div>
            <div className='flex item-center space-x-2'>
                <p className='font-semibold'>{item.price}</p>
                <p className='ine-throught opacity-50'>{item.discountedPrice}</p>
                <p className='text-green-600 font-semibold'>{item.discountPresent}% Off</p>
            </div>
    </div>
    </div>) 
}
export default ProductCard;
import React from 'react';
import CartItem from './CartItem';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const Cart = () => {

const navigate=useNavigate();

const handleCheckOut=()=>{
   navigate("/checkout?step=2")
}
    return (<div className='pt-5'>
             <div className='lg:grid grid-cols-3 lg:px-16 relative'>
             <div className='col-span-2'>
{[1,1,1,1,].map((items)=><CartItem  />)}
             </div>
                
                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
             <div className='border'>
                <p className='uppercase font-bold opacity-60 pb-4 text-center mt-2'>Product Details</p>
             </div>
               <hr/>
               <div className='space-y-3 font-semibold mb-10'>
                  <div className='flex justify-between pt-3 text-black'>
                     <span>Price</span>
                     <span>$599</span>
                  </div>
                   <div className='flex justify-between pt-3 text-black'>
                     <span >Discount</span>
                     <span className='text-green-600 font-semibold'>$599</span>
                  </div>
                   <div className='flex justify-between pt-3 text-black'>
                     <span>Dilevery Charge</span>
                     <span className='text-green-600 font-semibold'>Free</span>
                  </div> 
                  <div className='flex justify-between pt-3 text-black'>
                     <span>Toal Amount</span>
                     <span className='text-green-600 font-semibold'>$599</span>
                  </div>

               </div>
              <Button onClick={handleCheckOut} variant='contained' className='w-full mt-5'
  sx={{ px: "2.5rem", py: "0.5rem", bgcolor: "green" }}
>
  Checkout
</Button>

               
             </div>

             </div>
             
        
    </div>);
}


export default Cart;
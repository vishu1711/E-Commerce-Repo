import React from 'react';

import { Button } from '@headlessui/react';
import CartItem from '../Cart/CartItem';
import AddressCard from '../AddressCard/AddressCard';

export default function OrderSummery () {
    return (
    <div className='w-full'>
        <div className='p-5 shadow-lg rounded-sm-d border'>
            <AddressCard />
        </div>

        <div className='pt-5'>
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
              <Button variant='contained' className='w-full mt-5'  sx={{px:"2.5rem",py:"0.5rem",bgcolor:"green"}}>
               Checkout
              </Button>
               
             </div>

             </div>
             
        
    </div>
    </div>
);
}

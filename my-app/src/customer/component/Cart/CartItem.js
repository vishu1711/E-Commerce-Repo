import IconButton from '@mui/material/IconButton';
import React from 'react';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '@headlessui/react';

const CartItem = () => {
    return <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex item-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className="w-full h-full object-cover object-top" src='https://g.sdlcdn.com/imgs/k/v/g/Ketch-Skinny-Fit-Basic-Men-SDL215214216-1-13f44.jpg?w=220&h=258&sharp=7
                ' alt='' />

            </div>
            <div className='ml-5 space-y-1'>

               <p className='font-semibold '>Ketch Skinny Fit Basic Men's Jeans - Black ( Pack of 1 )</p>
               <p className='opacity-70'>Size : L,White</p>
               <p className='opacity-70 mt-2'>Seller: Cristaliyo 2fashion</p>

               <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 pt-6 mt-5'>
                <p className='font-semibold'>Rs 199</p>
                <p className='opacity-50 line-through'>Rs 221</p>
                <p className='text-green-600 font-semibold'>5% Off  </p>
               </div>

            </div>

            
        </div>
        <div className='lg:flex items-center lg-space-x-10 pt-4'>

                <div className='flex items-center space-x-2'>
                    <IconButton >
                        <RemoveCircleIcon />
                    </IconButton>
                    <span className='py-1 px-7  rounded-sm'>3</span>
                     <IconButton >
                      <AddCircleIcon />

                     </IconButton>
                       
                    
                </div>
                <div className=''>
                    <Button sx={{bgcolor:"RGB(145 85 253)"}}>
                        Remove  
                    </Button>
                </div>
            </div>
    </div>;
}



export default CartItem;
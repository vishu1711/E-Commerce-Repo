import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import OrderTracker from './OrderTracker';
import Grid from '@mui/material/Grid';
import { deepPurple } from '@mui/material/colors';
import Box from '@mui/material/Box';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const OrderDetails = () => {
    return <div className='px:5 lg:px-20'>
    <div>
        <h1 className='font-bold text-xl py-7'>Delevery Address</h1>
        <AddressCard />
    </div>
        <div>
            <OrderTracker activeStep={3} />
        </div>

{
    [1,1,1,1,1].map(()=><Grid className="space-x-5 " container >

            <Grid item container className="shadow-xl rounded-md p-5 w-full" sx={{alignContent:"center",justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className='flex item-center space-x-4'>
                        <img
          className="w-[5rem] h-[5rem] object-cover object-top rounded-md"
          src="https://m.media-amazon.com/images/I/71vhAmqLJ5L._AC_UL320_.jpg"
          alt="Product"
        />
        <div className="space-y-1">
          <p className="font-semibold text-gray-800">GENERIC</p>
          <p className=" space-x-5 opacity-60 text-xs font-smibold">Size: M</p>
          <p className="opacity-60 text-sm">Color: Red</p>
        </div>
                    </div>
                </Grid>
                
                <Grid item  >
                    <Box sx={{color:deepPurple[500]}}>
                            <StarBorderIcon sx={{fontSize:"[2rem]"}}  className='px-2 ' />
                            <span>
                                Rate And Review Product
                            </span>
                    </Box>

                </Grid>
            </Grid>

        </Grid>)
    }
        <Grid className="space-x-5 " container >

            <Grid item container className="shadow-xl rounded-md p-5 w-full" sx={{alignContent:"center",justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className='flex item-center space-x-4'>
                        <img
          className="w-[5rem] h-[5rem] object-cover object-top rounded-md"
          src="https://m.media-amazon.com/images/I/71vhAmqLJ5L._AC_UL320_.jpg"
          alt="Product"
        />
        <div className="space-y-1">
          <p className="font-semibold text-gray-800">GENERIC</p>
          <p className=" space-x-5 opacity-60 text-xs font-smibold">Size: M</p>
          <p className="opacity-60 text-sm">Color: Red</p>
        </div>
                    </div>
                </Grid>
                
                <Grid item  >
                    <Box sx={{color:deepPurple[500]}}>
                            <StarBorderIcon sx={{fontSize:"[2rem]"}}  className='px-2 ' />
                            <span>
                                Rate And Review Product
                            </span>
                    </Box>

                </Grid>
            </Grid>

        </Grid>

    </div>;
}

export default OrderDetails;
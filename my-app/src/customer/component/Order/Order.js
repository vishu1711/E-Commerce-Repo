import Grid from '@mui/material/Grid';
import React from 'react';
import OrderCard from './OrderCard';

const Order = () => {

    const orderStatus=[
        {
            lable:"On The Way", value:"on_the_way"
        },
        {
            lable:"Deleverty", value:"deleverty"
        },
        {
            lable:"Cancled", value:"cancled"
        },  
        {
            lable:"Return", value:"return"
        }, 
    ]
    return (
  <div className='ml-10 mt-5'>
    <Grid container >
      <Grid item xs={2.5}>
        <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
          <h1 className="font-bold text-lg">Filter</h1>
          <div className="space-y-4 mt-10">
            <h1 className="font-semibold">Order Status</h1>
            {orderStatus.map((option) => (
              <div key={option.value} className="flex items-center">
                <input
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  type="checkbox"
                  id={option.value}
                  defaultValue={option.value}
                />
                <label
                  className="ml-3 text-sm text-gray-600"
                  htmlFor={option.value}
                >
                  {option.lable}
                </label>
              </div>
            ))}
          </div>
        </div>
      </Grid>
      <Grid item xs={9}>
      <div className='space-y-5'>
     {
        [1,1,1,1,1,].map((items)=><OrderCard />)
      }
      </div>
     
                
      </Grid>
    </Grid>
  </div>
);

}

export default Order;
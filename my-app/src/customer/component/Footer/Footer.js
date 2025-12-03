
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import React from 'react';

const Footer = () => {
    return(<div>
        <Grid className="bg-black text-white text-center mt-10 " 
        container 
        sx={{bgcolor:"black",color:"white",py:3,justifyContent:'space-around'}}

        >

        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5 ' variant='h6'>Company</Typography>
            <div>
                 <Button className='pb-5' variant='h6' gutterBottum >About</Button>
            </div>
           
           <div>
                 <Button className='pb-5' variant='h6' gutterBottum >Blog</Button>
            </div>
             <div>
                 <Button className='pb-5' variant='h6' gutterBottum >Press</Button>
            </div>
           
           <div>
                 <Button className='pb-5' variant='h6' gutterBottum >Jobs</Button>
            </div>
            <div>
                 <Button className='pb-5' variant='h6' gutterBottum >Partners</Button>
            </div>

         </Grid>
          <Grid item xs={12} sm={6} md={3} >
            <Typography className='pb-5' variant='h6'>Solution</Typography>
            <div>
                 <Button className='pb-5' variant='h6' gutterBottum >Marketing</Button>
            </div>
           
           <div>
                 <Button className='pb-5' variant='h6' gutterBottum >Analytics</Button>
            </div>
             <div>
                 <Button className='pb-5' variant='h6' gutterBottum >Commerce</Button>
            </div>
           
           <div>
                 <Button className='pb-5' variant='h6' gutterBottum >Support</Button>
            </div>
           

         </Grid>
          <Grid item xs={12} sm={6} md={3} >
            <Typography className='pb-5' variant='h6'>Documentation</Typography>
            <div>
                 <Button className='pb-5' variant='h6' gutterBottum >Guides</Button>
            </div>
           
           <div>
                 <Button className='pb-5' variant='h6' gutterBottum >API Status</Button>
            </div>
          
         </Grid>
         <Grid item xs={12} sm={6} md={3} >
            <Typography className='pb-5' variant='h6'>Legal</Typography>
            <div>
                 <Button className='pb-5' variant='h6' gutterBottum >Claim</Button>
            </div>
           
           <div>
                 <Button className='pb-5' variant='h6' gutterBottum >Privacy</Button>
            </div>
             <div>
                 <Button className='pb-5' variant='h6' gutterBottum >Terms</Button>
            </div>
           
         </Grid>

        </Grid>
    </div>) 
}
export default Footer;
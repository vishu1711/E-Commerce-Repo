import React from 'react';
import Grid from '@mui/material/Grid';
import { ArchiveBoxArrowDownIcon } from '@heroicons/react/20/solid';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const ProductReviewCard = () => {
    return <div>

        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                <Avatar className='text-white ' sx={{width:"56",height:"56", bgcolor:"purple"}}>
                    R
                </Avatar>
                </Box>
            </Grid>
        <Grid item xs={9}>
         <div className='space-y-2'>
         <div>
            <p className='font-semibold text-lg'>Raam</p>
            <p>Date: April 5, 20225</p>
         </div>

         </div>
         <Rating value={4.5} name='half-rating' readonly/>
         <p>Nice Product , I loce this T shirt</p>
        </Grid>
        </Grid>
    </div>;
}

export default ProductReviewCard;
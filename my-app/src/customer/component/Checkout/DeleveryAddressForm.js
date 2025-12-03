import React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AddressCard from '../AddressCard/AddressCard';

export default function DeliveryAddressForm() {

     const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget); 
    const formValues = Object.fromEntries(data.entries());
    console.log("Form Data:", data);

    const address={
      firstname:data.get("firstname"),
      lastname:data.get("lastname"),
      address:data.get("address"),
      city:data.get("city"),
      state:data.get("state"),
      phonenumber:data.get("phonenumber"),
      zip:data.get("zip")

    }



  };
     
  return (
    <div>
      <Grid container spacing={4}>
        {/* LEFT SIDE */}
        <Grid item xs={12} lg={5}>
          <div className="border rounded-e-md shadow-md h-[30.5rem] w-[30.5rem] overflow-y-scroll p-5 py-7">
            <AddressCard />
            <Button sx={{ mt: 2, bgcolor: 'primary.main' }} size="large" variant="contained">
              Deliver Here
            </Button>
          </div>
        </Grid>

        {/* RIGHT SIDE */}
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5 w-full">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField required id="firstname" name="firstname" label="First Name" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id="lastname" name="lastname" label="Last Name" fullWidth />
                </Grid>
              </Grid>

              <Grid item xs={12} className="mt-5">
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  multiline
                  rows={4}
                />
              </Grid>

              <Grid container spacing={3} className="mt-5">
                <Grid item xs={12} sm={6}>
                  <TextField required id="city" name="city" label="City" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id="state" name="state" label="State" fullWidth />
                </Grid>
              </Grid>

              <Grid container spacing={3} className="mt-5">
                <Grid item xs={12} sm={6}>
                  <TextField required id="zip" name="zip" label="Zip" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required id="phonenumber" name="phonenumber" label="Phone Number" fullWidth />
                </Grid>
              </Grid>

              <Button
                sx={{ py: 1.5, mt: 3, bgcolor: 'primary.main' }}
                size="large"
                variant="contained"
                type="submit"

           
              >
                Deliver Here
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

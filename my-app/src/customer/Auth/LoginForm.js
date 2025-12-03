import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const navigate=useNavigate();
    const handleSubmit=(event)=>{

        event.preventDefault();

        const data=new FormData(event.currentTarget);

        const userData={
            firstName:data.get("firstname"),
            lastName:data.get("lastname"),
            email:data.get("email"),
            password:data.get("password"),
        }

        console.log("userData----->",userData);

    }
    return <div>
<form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
           
               
               <TextField 

                    required
                    id='email'
                    name="email"
                    label="Email"
                    fullWidth
                    autoComplete='email'
                
                />

                 <TextField 

                    required
                    id='password'
                    name="password"
                    label="Password"
                    fullWidth
                    autoComplete='password'
                   
                />
                <Grid item xs={12}>
                    <Button 
                    className='bg-[#9155fd] w-full'
                    type='sumbit'
                    variant='contained'
                    size='large'
                    sx={{padding:".8rem 0",}}>
                        Login
                    </Button>
                </Grid>
            </Grid>

        </Grid>
</form>
<div className='flex justify-center flex-col items-center'>
        <div className='py-3 flex items-center'>
            <p>
                If you don't have  Account ?
            </p>
            <Button onClick={()=>navigate("/register")} className='ml-5 ' size='small'>Register here </Button>
        </div>
    </div>
    </div>;
}


export default LoginForm;
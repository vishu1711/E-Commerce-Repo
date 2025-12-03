import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { getUser, register } from '../../Auth/Action';
import { store } from '../../State/Store';


const RegisterForm = () => {

    const jwt=localStorage.getItem("jwt");
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {auth}=useSelector(store=>store)

    useEffect(()=>{

        if(jwt){
        dispatch(getUser(jwt));

        }
    },[jwt,auth.jwt]) 

   
    const handleSubmit=(event)=>{

        event.preventDefault();

        const data=new FormData(event.currentTarget);

        const userData={
            firstName:data.get("firstname"),
            lastName:data.get("lastname"),
            email:data.get("email"),
            password:data.get("password"),
        }
        dispatch(register(userData));
        console.log("userData----->",userData);

    }
    return <div>
<form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <div  className='flex flex-item-center p-2'>
 <TextField 

                    required
                    id='firstname'
                    name="firstname"
                    label="First Name"
                   
                    autoComplete='given-name'
                />
                <TextField 

                    required
                    id='lastname'
                    name="lastname"
                    label="Last Name"
                    
                    autoComplete='given-name'
                />
            </div>
               
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
                        Register
                    </Button>
                </Grid>
            </Grid>

        </Grid>
</form>

    <div className='flex justify-center flex-col items-center'>
        <div className='py-3 flex items-center'>
            <p>
                If you have already Account ?
            </p>
            <Button onClick={()=>navigate("/login")} className='ml-5 ' size='small'>Login </Button>
        </div>
    </div>
    </div>;
}


export default RegisterForm;
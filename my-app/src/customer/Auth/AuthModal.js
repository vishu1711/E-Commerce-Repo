import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import RegisterForm from './RegisterForm';
import { useLocation } from 'react-router-dom';
import LoginForm from './LoginForm';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
 // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  outline:"none",

};

 const AuthModal= (handleClose,open)=> {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

const location=useLocation()

  return (
    <div>
      <Button onClick={handleClose}>Open modal</Button> 
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {location.pathname=="/login"?<LoginForm />:<RegisterForm />}
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <RegisterForm />
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}






export default AuthModal;
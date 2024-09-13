import { Box, Button, Grid2, styled, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "./Authcontext";

const BackgroundBox = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  }));
  const RegisterBox = styled(Box)(({ theme }) => ({
    backdropFilter: 'blur(8px)',
    borderRadius: '20px', 
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', 
    textAlign: 'center',
    width: '100%',
    width: '550px',
    height: 'auto',
    marginTop:'40px'
    
  }));
  const RegisterButton = styled(Button)(({ theme }) => ({
    outline:'1px solid #B2BEB5',
    backgroundColor:'black',
    color: 'white',  
    borderRadius: '30px', 
    fontSize: '16px',
    '&:hover': {
      backgroundColor: 'gray',
      color:'white' 
    },
  }));

const Register = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {register, message} = useAuth();
    const navigate =useNavigate();

    const handleRegister = () =>{
        const sucees = register (username, password);
        if(sucees){
            navigate('/login');
        }
    };

    return <BackgroundBox>
    <RegisterBox>
    <Typography variant="h4" sx={{fontWeight: '800', paddingTop: '50px'}}>Register</Typography>
        <Typography sx={{marginTop: '20px',color:'gray'}}>Please enter your details</Typography>
        <Grid2 container xs={12} spacing={2} sx={{ marginTop: '40px', justifyContent:'center' }}>
            <Grid2 xs={6}>
                <TextField  
            sx={{
                '& .MuiOutlinedInput-root': {
                borderRadius: '10px 50px 10px 50px',},
                width:'195px'
                }} id="outlined-basic" label="First Name" variant="outlined" />
            </Grid2>
            <Grid2 xs={6}>
                <TextField 
            sx={{
                '& .MuiOutlinedInput-root': {
                borderRadius: '10px 50px 10px 50px',},
                width:'195px'
                }} id="outlined-basic" label="Last Name" variant="outlined" />
            </Grid2>
        </Grid2>
        <TextField 
        sx={{
            marginTop:'30px',
            width: '400px',
            '& .MuiOutlinedInput-root': {
            borderRadius: '10px 50px 10px 50px',},
            }} id="outlined-basic" label="Address" variant="outlined" />
        <TextField 
        sx={{
            width: "400px", 
            marginTop: '30px',
            '& .MuiOutlinedInput-root': {
            borderRadius: '10px 50px 10px 50px',},
            }} id="outlined-basic" label="Phone Number" variant="outlined" />
        <TextField 
        sx={{
            width: "400px", 
            marginTop: '30px',
            '& .MuiOutlinedInput-root': {
            borderRadius: '10px 50px 10px 50px',},
            }} 
            id="outlined-basic" 
            label="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined" />
        <TextField 
        sx={{
            width: "400px", 
            marginTop: '30px',
            '& .MuiOutlinedInput-root': {
            borderRadius: '10px 50px 10px 50px',},
            }} 
            id="outlined-basic" 
            label="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined" />
        <TextField 
        sx={{
            width: "400px", 
            marginTop: '30px',
            '& .MuiOutlinedInput-root': {
            borderRadius: '10px 50px 10px 50px',},
            }} id="outlined-basic" label="Confirm Password" variant="outlined" />
        
        <RegisterButton sx={{
            marginTop:'40px', 
            width:'170px', 
            height:'45px',
            borderRadius:'10px 50px 10px 50px',
            textTransform: 'capitalize',
            fontSize:'17px'
            }}
            onClick={handleRegister}
            >Register</RegisterButton>
            {message && <Typography color="primary">{message}</Typography>}
            <Typography sx={{marginTop:'90px', color:'gray'}}>Have an account? <Link
            to='/login'
            sx={{
                color:'black',
                fontWeight:'700',
            }}
            href="#"
            underline="hover"
            >Sign In</Link></Typography>
            
        
    </RegisterBox>
</BackgroundBox>
}
export default Register;
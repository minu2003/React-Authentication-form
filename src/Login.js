import { Box, Button, styled, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "./Authcontext";


const BackgroundBox = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  }));
  const LoginBox = styled(Box)(({ theme }) => ({
    backdropFilter: 'blur(8px)',
    borderRadius: '20px', 
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', 
    textAlign: 'center',
    width: '100%',
    width: '500px',
    height: '600px'
    
  }));
  const LoginButton = styled(Button)(({ theme }) => ({
    outline:'1px solid #B2BEB5',
    backgroundColor:'black',
    color: 'white',  
    borderRadius: '30px', // Rounded button
    fontSize: '16px',
    '&:hover': {
      backgroundColor: 'gray',
      color:'white' // Darker green on hover
    },
  }));

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {login, message} = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
      const success = login(username, password);
      if(success){
        navigate('/');
      }
    }


    return  <BackgroundBox>
        <LoginBox>
        <Typography variant="h4" sx={{fontWeight: '800', paddingTop: '50px'}}>Login</Typography>
            <Typography sx={{marginTop: '20px',color:'gray'}}>Please enter your login and password</Typography>
            <TextField 
            sx={{
                marginTop:'40px',
                width: '400px',
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
            <Typography sx={{fontSize:'14px',marginTop:'20px', color:'#353935'}}><Link href="#" underline="hover">Forgot Password?</Link></Typography>
            
            <LoginButton sx={{
                marginTop:'40px', 
                width:'150px', 
                height:'45px',
                borderRadius:'10px 50px 10px 50px',
                textTransform: 'capitalize',
                fontSize:'17px'
                }}
                onClick={handleLogin}
                >Login</LoginButton>

            {message && <Typography color="primary">{message}</Typography>}

                <Typography sx={{marginTop:'100px', color:'gray'}}>Don't have an account? <Link 
                to='/register'
                sx={{
                    color:'black',
                    fontWeight:'700',
                }}
                href="#"
                underline="hover"
                >Sign Up</Link></Typography>
                
            
        </LoginBox>
    </BackgroundBox>
}
export default Login;
import React, {useState} from 'react';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import splashImage2 from './assets/splash-image-2.jpg';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const theme = useTheme();
    const isMobile = useMediaQuery('(max-width:890px)');

    const handleLogin = (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        alert(`Logged in as ${username}`);
    };

    return(
        <Box sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            height: '100vh'
        }}>
            <Box sx={{
                //width: isMobile ? 0.9 : 0.45,
                width: 0.45,
                display: 'flex',
                justifyContent: 'flex-end',
            }}>
                <img src={splashImage2}
                    alt='forrest'
                    style={{
                        width: 'auto',
                        height: '30vh',
                    }} />
            </Box>

            <Box sx={{
                // width: isMobile ? 1 : 0.7,
                width: 0.45,
                alignSelf: 'center',
            }}>
                <Typography
                    variant='h1'
                    component='h1'
                    sx={{
                        fontSize: '2rem',
                        fontWeight: '800',
                        marginBottom: '1rem',
                    }}>
                    Log In
                </Typography>
                <Typography
                    variant='p'
                    component='p'
                    sx={{
                        color: (theme) => theme.palette.grey[600],
                        fontWeight: '400',
                        marginBottom: '2rem',
                    }}>
                    Welcome back. Please log in to your account.
                </Typography>

                <Box onSubmit={handleLogin}
                    component='form'
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        width: 0.7,
                    }}>
                    <TextField label='Username'
                        variant='outlined'
                        type="text"
                        value={username}
                        placeholder="Enter your username"
                        onChange={(e) => setUsername(e.target.value)}
                        required>
                    </TextField>
                    
                    <TextField label='Password'
                        variant='outlined'
                        type='password'
                        value={password}
                        placeholder='Enter your password'
                        onChange={(e) => setPassword(e.target.value)}
                        required>
                    </TextField>
                    
                    <Box sx={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        justifyContent: 'space-between',
                        alignItems: isMobile ? 'flex-start' : 'center',
                        gap: isMobile ? 1 : 0
                        
                    }}>
                        <FormControlLabel control={
                            <Checkbox />
                        }
                        label="Remember Me"
                        />

                        <Link 
                            href='#'
                            underline='none'
                            sx={{
                                color: (theme) => theme.palette.grey[600],
                            }}>
                            Forget password?
                        </Link>
                    </Box>

                    <Button
                        type='submit'
                        variant='contained'
                        sx={{
                            bgcolor: (theme) => theme.palette.secondary.main,
                            height: '50px',
                        }}>
                        Log In
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;
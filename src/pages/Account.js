import React from 'react';
import Box from '@mui/material/Box';
import { Typography, useTheme, Paper, Button } from '@mui/material';
import CustomCard from '../CustomCard';

export default function Account() {
    const theme = useTheme();

    return(
        <Box sx={{
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3)            
        }}>

            <Typography variant='h1' color='primary.main'>Account Settings</Typography>
            <Typography variant='h2' color='text.primary'>My Profile</Typography>

            <Box sx={{
                marginTop: theme.spacing(3),
                display: 'flex',
                flexDirection: 'column',
                gap: theme.spacing(2)
            }}>

                <Paper sx={{
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: theme.shape.borderRadius / 4,
                    padding: theme.spacing(3),
                    boxShadow: 'none',
                }}>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <Typography variant='h3' sx={{
                            marginBottom: '1rem',
                            color: 'primary.main'
                        }}>Personal Information</Typography>
                        <Button 
                            variant='outlined'
                            color='primary'
                        >Edit</Button>
                    </Box>

                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: '1fr 1fr',
                            md: '1fr 1fr 1fr 1fr'
                        },
                        gap: theme.spacing(2)
                    }}>
                        <CustomCard>
                            <Typography variant='h4' color='secondary.main'>First Name</Typography>
                            <Typography variant='body1'>Rafiqur</Typography>
                        </CustomCard>
                        <CustomCard>
                            <Typography variant='h4' color='secondary.main'>Last Name</Typography>
                            <Typography variant='body1'>Rahman</Typography>
                        </CustomCard>
                        <CustomCard>
                            <Typography variant='h4' color='secondary.main'>Email Address</Typography>
                            <Typography variant='body1'>rafiqurrahman@gmail.com</Typography>
                        </CustomCard>
                        <CustomCard>
                            <Typography variant='h4' color='secondary.main'>Phone</Typography>
                            <Typography variant='body1'>+09 345 346 46</Typography>
                        </CustomCard>
                    </Box>
                </Paper>
            </Box>
        </Box>
    )
}
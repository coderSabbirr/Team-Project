import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{bgcolor: 'black',py:3}}>
            <Typography variant='h5' sx={{color: 'white', textAlign:'center'}}>All Right Reserved by Photomanea</Typography>
        </Box>
    );
};

export default Footer;
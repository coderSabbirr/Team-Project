import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import styles from './Photomanea.module.css'

const PhotomaneaBox = () => {
    return (
        <div className={styles.maneaBox}>
            <Box sx={{maxWidth:'md', margin:'auto', textAlign: 'center', display: 'flex', flexDirection: 'column',alignItems:'center',height:'100%',justifyContent:'center'}}>
                <Typography variant='h2' sx={{color:'white',mb:2}}> Start SomeThing New</Typography>
                <Typography variant='h6' sx={{color:'white',mb:3}}>I appreciate the raw reality of everyday life, the fleeting beauty of those in-between moments, and I do my very best to take every picture with that in mind. I want my viewers to relate to my photographs through recognition of and familiarity with the situations.</Typography>
                <Button sx={{border:1,borderColor:'white',color:'white',py:2, px:2,fontWeight:'500',fontSize:'18px'}}>Show Our Freelancer</Button>
            </Box>
        </div>
    );
};

export default PhotomaneaBox;
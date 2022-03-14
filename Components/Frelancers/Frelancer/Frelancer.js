import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from '../Frelancer.module.css'
import Link from 'next/link';

const Frelancer = (props) => {
    const {name,img,title,id}=props.frelancer
    return (
        <Grid  item xs='4'>
          <Box className={styles.frelancerSingle} sx={{width:'100%', overflow:'hidden'}}>
            <div className={styles.frelancerimg}>
                <img style={{width: '100%', height: '100%'}} src={img} alt="" />
            </div>
            <Link  href="/freelancer/[id]" as={`/freelancer/${id}`} >
            <div className={styles.frelancerdesc}>
                <Typography variant='h4' sx={{textAlign: 'center'}}>{name}</Typography>
                <Typography sx={{textAlign: 'center',color:'red'}}>{title}</Typography>
            </div>
            </Link>
          </Box>
        </Grid>
    );
};

export default Frelancer;
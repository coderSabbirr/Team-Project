import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from '../Frelancer.module.css'
import Frelancer from '../Frelancer/Frelancer';
import Link from 'next/link';

const freelancers=[
    {
        id: '1',
        img: 'https://i.ibb.co/PwndXJ1/pexels-wendy-wei-2966398.jpg',
        name:'sokina Banu',
        title:'Photgrapher,Artist',
        facebookIcon:'www.facebook.com',
        instagramIcon:'www.facebook.com',
        pinterstIcon:'www.facebook.com',
    },
    {
        id: '2',
        img: 'https://i.ibb.co/tJtTQRL/pexels-waseem-kahlool-673021.jpg',
        name:'Ata Chowdury',
        title:'Photographer',
        facebookIcon:'www.facebook.com',
        instagramIcon:'www.facebook.com',
        pinterstIcon:'www.facebook.com',
    },
    {
        id: '3',
        img: 'https://i.ibb.co/M1HdK0F/pexels-mustafa-husnii-381843.jpg',
        name:'SoyabinTel',
        title:'Photographer',
        facebookIcon:'www.facebook.com',
        instagramIcon:'www.facebook.com',
        pinterstIcon:'www.facebook.com',
    },
    {
        id: '4',
        img: 'https://i.ibb.co/ysQx5K9/pexels-roman-ska-10780009.jpg',
        name:'Komra Khatun',
        title:'Photographer,Jornalist',
        facebookIcon:'www.facebook.com',
        instagramIcon:'www.facebook.com',
        pinterstIcon:'www.facebook.com',
    },
]

const AllFrelancers = () => {
    return (
        <div className={styles.freelancer} >
            <>
                <Box  sx={{padding: 10, textAlign: 'center'}}>
                    <Typography sx={{color: 'red'}}>
                        FreeLancers
                    </Typography>
                    <Typography className={styles.heading} variant='h2'>
                    Our Top Level Photographar
                    </Typography>
                </Box>
            </>
            <Grid container direction="col" columnSpacing={{ }}>
                {
                    freelancers.map(frelancer=> 
                       
                            <Frelancer key={frelancer.id} frelancer={frelancer}/>

                            )
                }
            </Grid>
            
        </div>
    );
};

export default AllFrelancers;
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from './PhotoCollection.module.css'
import Singlephoto from './Singlephoto';

const photosGallery = [
    {
        img: 'https://i.ibb.co/M7wVVxX/pexels-bess-hamiti-35537.jpg'
    },
    {
        img: 'https://i.ibb.co/86bb03s/pexels-andre-moura-3334450.jpg'
    },
    {
        img: 'https://i.ibb.co/VmGvfDv/pexels-luizclas-556669.jpg'
    },
    {
        img: 'https://i.ibb.co/4TDvS8f/pexels-ruvim-3622517.jpg'
    },
    {
        img: 'https://i.ibb.co/CMP65kY/pexels-frans-van-heerden-2253391.jpg'
    }
]

const PhotoCollection = () => {
    return (
        <div>
            <Box  sx={{padding: 10, textAlign: 'center'}}>
                <Typography sx={{color: 'red'}}>
                    Photography
                </Typography>
                <Typography className={styles.heading} variant='h2'>
                Colect Our Top Photo
                </Typography>
            </Box>

            <div className={styles.photos}>
                {
                    photosGallery.map(photo=> 
                        <Singlephoto key={photo.img} photo={photo}/>
                        )
                }
            </div>
        </div>
    );
};

export default PhotoCollection;
import React from 'react';
import styles from './PhotoCollection.module.css'
import { Typography } from '@mui/material';
import Link from 'next/link';

const Singlephoto = (props) => {
    const {img}=props.photo
    return (
        <div className={styles.singlePhoto}>
            <div className={styles.galleryImg}>
                <img src={img} alt="gallery image" />
            </div>
            <div className={styles.photoLink}>
                <Typography variant="h1" sx={{color:'white',display:'flex', justifyContent:'center',width:'100%',height:'100%',alignItems: 'center'}}><Link className={styles.linkphoto} href='/'>+</Link></Typography>
            </div>
        </div>
    );
};

export default Singlephoto;
import React from 'react';
import TweenOne from "rc-tween-one";
import BannerAnim, { Element } from "rc-banner-anim";
import "rc-banner-anim/assets/index.css";
import Link from 'next/link';
import styles from './Banner.module.css'
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
const BgElement = Element.BgElement;

const Banner = () => {
  return (
    <div className={styles.banner}>

    
    <BannerAnim prefixCls={styles.bannerUser} 
      autoPlay
      autoPlaySpeed={1000}
      duration={700}
      delay={3000}
      arrow={false}
      thumb={false}
      autoPlayEffect={false}
    > 
     
     <Element prefixCls={styles.bannerImg} style={{
          backgroundImage: 'url(https://i.ibb.co/rsGsvDC/pexels-pixabay-163194.jpg)',backgroundSize: '100% 100%'
        }}  key="0">
      <TweenOne
        className={styles.bannerDetails}
        animation={{ y: 30, opacity: 0, type: "from" }}
      >
        <Box sx={{display:'flex', maxWidth: 'md', textAlign:'center'}}>
          <Typography className={styles.bannerHeading} variant='h1'>
            Wecome To Our PhotoManea Website
          </Typography>
        </Box>
      </TweenOne>
    
    </Element>
    <Element prefixCls={styles.bannerImg} style={{
          backgroundImage: 'url(https://i.ibb.co/w7WNVSF/pexels-photomix-company-212372.jpg)',backgroundSize: '100% 100%'
        }}  key="1">
      <TweenOne
        className={styles.bannerDetails}
        animation={{ y: 30, opacity: 0, type: "from" }}
      >
        <Box sx={{display:'flex', maxWidth: 'md', textAlign:'center'}}>
          <Typography className={styles.bannerHeading} variant='h1'>
            We Provide You Best Photographer
          </Typography>
        </Box>
      </TweenOne>
    
    </Element>

    <Element prefixCls={styles.bannerImg} style={{
          backgroundImage: 'url(https://i.ibb.co/F4TZz1S/pexels-arthouse-studio-4338093.jpg)',backgroundSize: '100% 100%'
        }}  key="2">
      <TweenOne
        className={styles.bannerDetails}
        animation={{ y: 30, opacity: 0, type: "from" }}
      >
        <Box sx={{display:'flex', maxWidth: 'md', textAlign:'center'}}>
          <Typography className={styles.bannerHeading} variant='h1'>
            Some Special Photo For Future Life
          </Typography>
        </Box>
      </TweenOne>
    
    </Element>
    
    </BannerAnim>
    </div>
  );
};

export default Banner;
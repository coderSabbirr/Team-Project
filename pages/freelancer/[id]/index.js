import React from 'react';
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import style from '../../../styles/frellancerDetails.module.scss'



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


const frellancerDetails = () => {
    const router = useRouter();
    const {id} = router.query;
    
    const currentFreelancer = freelancers.find((freelancer) => freelancer.id === id);

    console.log(currentFreelancer)
  return (
    <div className={style.freelancer} > frellancerDetails 
         <Grid sx={{mt:12,ml:6}} container spacing={2}>
        <Grid className={style.profile} item md={4} xs={6}>
          <div className={style.profileImg}>
            <img src={currentFreelancer?.img} />      
        </div> 
        <div className={style.profiletxt}>
            <div> <bold>Name</bold> </div>
            <div>{currentFreelancer?.name} </div>
            <div> <bold>Title</bold></div>
            <div>{currentFreelancer?.title}</div>
        </div>
        </Grid>
        <Grid item md={6} xs={12}>
          
        </Grid>
      </Grid>
    </div>
  )
}

export default frellancerDetails
import React from 'react';
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import style from '../../../styles/frellancerDetails.module.scss';
import galleryStyle from '../../../Components/PhotoCollection/PhotoCollection.module.css'
import Singlephoto from '../../../Components/PhotoCollection/Singlephoto'
import Button from '@mui/material/Button';

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

let photosGallery = [
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
    },
    {
        img: 'https://i.ibb.co/VmGvfDv/pexels-luizclas-556669.jpg'
    },
    {
        img: 'https://i.ibb.co/4TDvS8f/pexels-ruvim-3622517.jpg'
    },
    {
        img: 'https://i.ibb.co/CMP65kY/pexels-frans-van-heerden-2253391.jpg'
    },
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
    },
    {
        img: 'https://i.ibb.co/VmGvfDv/pexels-luizclas-556669.jpg'
    },
    {
        img: 'https://i.ibb.co/4TDvS8f/pexels-ruvim-3622517.jpg'
    },
    {
        img: 'https://i.ibb.co/CMP65kY/pexels-frans-van-heerden-2253391.jpg'
    },
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
    },
    {
        img: 'https://i.ibb.co/VmGvfDv/pexels-luizclas-556669.jpg'
    },
    {
        img: 'https://i.ibb.co/4TDvS8f/pexels-ruvim-3622517.jpg'
    },
    {
        img: 'https://i.ibb.co/CMP65kY/pexels-frans-van-heerden-2253391.jpg'
    },
    {
        img: 'https://i.ibb.co/M7wVVxX/pexels-bess-hamiti-35537.jpg'
    },
]


const frellancerDetails = () => {
    const router = useRouter();
    const {id} = router.query;
    const copyData = photosGallery;
    const [galleryImg,setGalleryImg] = React.useState(photosGallery);
    
    const currentFreelancer = freelancers.find((freelancer) => freelancer.id === id);
    const newGallery = galleryImg.splice(0,5);
    console.log(copyData)
  return (
    <div className={style.freelancer} > frellancerDetails 
         <Grid sx={{mt:12,ml:6}} container spacing={2}>
        <Grid className={style.profile} item md={4} xs={12}>
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
        <Grid item md={0} xs={0}>
          
        </Grid>
      </Grid>
        <div style={{marginTop:'40px'}}>
        <div className={galleryStyle.photos}>
                {
                    newGallery?.map(photo=> 
                        <Singlephoto key={photo.img} photo={photo}/>
                        )
                }
            </div>
            {
            copyData?.length >6 &&
            <Button sx={{m:3}} variant="outlined" >
             See all image
            </Button>
            }
        </div>
    </div>
  )
}

export default frellancerDetails
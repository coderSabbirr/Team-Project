import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from './HomeBlog.module.css'
import HomeBlog from './HomeBlog'

const newBlogs =[
    {
        id: 1,
        title:'Favorite Images of 2021:A Retrospective',
        desc: 'Before we go through everything you need to know about blog images, it’s worth taking a look at a brief history of blogging.Blogging began to gain popularity during the early noughties and truly exploded with the rise of content marketing. Since then, blogging has completely changed the way we create content and communicate online. Today starting a blog or website is a matter of hours even for complete beginners.Originally bloggers were everyday folk who mused, ranted and raved about topics that were important to them. But businesses soon followed suit when they realised the value of sharing their expertise and knowledge. These days, companies who blog receive approximately 97% more inbound links than those who don’t. Blogging businesses also have an average 126% increase in lead generation. The bottom line is: including professional visuals positively affects traffic, responses, and retention. Images also make the blog more memorable and easier to find',
        date: 'september 27,2021',
        bgImage: 'https://i.ibb.co/qDg30n5/pexels-quintin-gellar-313787.jpg',
        profileImg: 'https://i.ibb.co/L0pfQyM/pexels-andrea-piacquadio-3771120.jpg'
    },
    {
        id: 2,
        title:'Favorite Images of 2021:A Retrospective',
        desc: 'Before we go through everything you need to know about blog images, it’s worth taking a look at a brief history of blogging.Blogging began to gain popularity during the early noughties and truly exploded with the rise of content marketing. Since then, blogging has completely changed the way we create content and communicate online. Today starting a blog or website is a matter of hours even for complete beginners.Originally bloggers were everyday folk who mused, ranted and raved about topics that were important to them. But businesses soon followed suit when they realised the value of sharing their expertise and knowledge. These days, companies who blog receive approximately 97% more inbound links than those who don’t. Blogging businesses also have an average 126% increase in lead generation. The bottom line is: including professional visuals positively affects traffic, responses, and retention. Images also make the blog more memorable and easier to find',
        date: 'september 27,2021',
        bgImage: 'https://i.ibb.co/jk94ckJ/pexels-fox-225157.jpg',
        profileImg: 'https://i.ibb.co/r5bWNb7/pexels-tu-n-ki-t-jr-1319909.jpg'
    },
    {
        id: 3,
        title:'Favorite Images of 2021:A Retrospective',
        desc: 'Before we go through everything you need to know about blog images, it’s worth taking a look at a brief history of blogging.Blogging began to gain popularity during the early noughties and truly exploded with the rise of content marketing. Since then, blogging has completely changed the way we create content and communicate online. Today starting a blog or website is a matter of hours even for complete beginners.Originally bloggers were everyday folk who mused, ranted and raved about topics that were important to them. But businesses soon followed suit when they realised the value of sharing their expertise and knowledge. These days, companies who blog receive approximately 97% more inbound links than those who don’t. Blogging businesses also have an average 126% increase in lead generation. The bottom line is: including professional visuals positively affects traffic, responses, and retention. Images also make the blog more memorable and easier to find',
        date: 'september 27,2021',
        bgImage: 'https://i.ibb.co/mtdpPjw/pexels-yuting-gao-1637110.jpg',
        profileImg: 'https://i.ibb.co/KFmn4p9/pexels-evelina-zhu-5434019.jpg'
    }
]

const Blogs = () => {
    return (
        <Box sx={{pb:4}}>
            <Box  sx={{padding: 10, textAlign: 'center'}}>
                <Typography sx={{color: 'red'}}>
                    Blog
                </Typography>
                <Typography className={styles.heading} variant='h2'>
                Our Popular Blog
                </Typography>
            </Box>
            <Box sx={{display:'flex',gap:2,maxWidth:'lg',mx:'auto',overflow:'hidden'}}>
                {
                    newBlogs.map(blog=> 
                        <HomeBlog key={blog.id} blog={blog} />
                        )
                }
            </Box>
            
        </Box>
    );
};

export default Blogs;
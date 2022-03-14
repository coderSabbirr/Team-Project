import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import React from 'react';
import Link from 'next/link';
import styles from './HomeBlog.module.css'

const HomeBlog = (props) => {
	const {id,title,desc,date,bgImage,profileImg}= props.blog
	const split = desc.split('')
    const doted = '...';
    const shortArray = split.slice(0,200).join('').concat(doted)
    return (
		<Link href="/about">
        <Box sx={{px:1,pb:6}}> 
			<div className= {styles.wrap}> 
				<div className= {styles.profile}> 
					<Typography sx={{fontSize: 23, fontWeight: 'bold'}}>{title}</Typography>
					<div className= {styles.description}> 
					<Typography sx={{fontSize: 15,color: 'gray'}}>{shortArray}</Typography>
					</div>
					<div className= {styles.client}> 
						<div className= {styles.clientimg}> 
							<img src= {profileImg} alt='sdafds' />
						</div>
						<Typography sx={{fontSize: 16,color: 'red',fontWeight: 'bold'}}>{date}</Typography>
					</div>
					<div className= {styles.img} style={{backgroundImage: `url(${bgImage})`}}> 
					</div>
				</div>
			</div>
			
		</Box>
		</Link>
    );
};

export default HomeBlog;
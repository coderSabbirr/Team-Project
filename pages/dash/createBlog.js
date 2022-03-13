import React from 'react';
import dynamic from "next/dynamic";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Editor from '../../Components/Editor';

// dynamically emport component 
const Editor = dynamic(() => import("../../Components/Editor"), { ssr: false })

const createBlog = () => {
  return (
    <Container>
      <div style={{marginBottom:'15px',fontWeight:'500',color:'grey'}}>
          Create Blog
      </div>
        <Editor />
     </Container>
  )
}

export default createBlog
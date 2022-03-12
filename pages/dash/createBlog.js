import React from 'react';
import dynamic from "next/dynamic";
// import Editor from '../../Components/Editor';

// dynamically emport component 
const Editor = dynamic(() => import("../../Components/Editor"), { ssr: false })

const createBlog = () => {
  return (
    <div>
        <Editor />
    </div>
  )
}

export default createBlog
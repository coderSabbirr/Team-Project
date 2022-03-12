import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const Editor = () => {
    const [value,setValue] = useState('');

    const handleChange = (e, editor) => {
        console.log(editor.getData());
    }

  return (
    <>
        <Container>
            <CKEditor
            editor={ClassicEditor}
            onChange={handleChange}
            />
        </Container>
    </>
  )
}

export default Editor
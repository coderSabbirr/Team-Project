import React, { useState } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


const Editor = () => {
    const [value,setValue] = useState('');
    const [parseValue,setParseValue] = useState([]);

    const dt = new Date();
  const stringDt = dt.toDateString();

    // const [backendData, setBackendData] = useState({ type:parseValue[0]?.type,
    //     data: parseValue[0]?.props?.children[0]});

    const handleChange = (e, editor) => {
        // console.log(e);
        const data = editor.getData();
        setValue(data)
        setParseValue(ReactHtmlParser(data));
    }

    const initialInfo={
        jsonData:value,
        date: stringDt,
    }
   
    
  return (
    <>
            <CKEditor
            editor={ClassicEditor}
            onChange={handleChange}
            />
            <div>
                {ReactHtmlParser(value)}
            </div>
    </>
  )
}

export default Editor
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';

export default function OrderFree () {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const inputData = {
    title: '',
    email: '',
    image: '',
    orderAs: '',
    date: '',
    userid: ''
  };

  const gradeintBackground = {
    backgroundImage: 'linear-gradient(-45deg, #FF7F50, #FFB6C1)'
  }

  const transparentBackground = {
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  }

  const imgStyle = {
    width: '250px',
    height: '150px',
    borderRadius: '5px'
  }

  const inputStyle = {
    width: '100%',
    padding: '5px 15px',
    boxSizing: 'border-box',
    borderRadius: '15px',
    marginBottom: '10px',
    outline: 'none',
    border: 'none'
  }

  const submitButton = {
    display: 'block',
    margin: '0 auto',
    backgroundColor: '#2E8B57',
    border: 'none',
    padding: '5px 20px',
    borderRadius: '15px',
    fontSize: '18px',
    color: 'white',
    cursor: 'pointer'
  }

  const postData = async (submitData) => {
    window.alert('place order');
    // setIsLoading(true);
    // const response = await fetch('', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(submitData)
    // });
    // const data = await response.json();
    // console.log(data);
    // if (data.success === true) {
    //   // console.log(data.user);
    //   localStorage.setItem('displayName', data.user.name);
    //   localStorage.setItem('email', data.user.email);
    //   localStorage.setItem('role', data.user.role);
    //   setIsLoading(false);
    //   router.push('/');
    // }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    inputData.title = document.getElementById("title").value;
    inputData.email = document.getElementById("email").value;
    inputData.image = document.getElementById("image").value;
    inputData.orderAs = document.getElementById("orderAs").value;
    inputData.date = document.getElementById("date").value;
    inputData.userid = document.getElementById("userid").value;
    console.log(inputData);
    postData(inputData);
  }

  const goToHome = () => {
    router.push('/');
  }

  return (
    <Box sx={{ width: '100%'}} height="100vh" style={gradeintBackground}>
      <Box sx={{display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{width: 300, height: 650, p: '10px', borderRadius: '10px' }} style={transparentBackground}>
          <br/>
          <Box>
            <Box sx={{ width: '250', height: '150', m: '0 auto', display: 'flex', justifyContent: 'center' }}>
              <img src="https://i.ibb.co/Cb8Bp86/male-avatar.png" style={imgStyle}/>
            </Box>
          </Box>
          <br/> <br/>
          <Typography sx={{ textAlign: 'center' }} variant="h5">Order Image</Typography> <br/>
          <form onSubmit={handleSubmit}>
            <input style={inputStyle} id="title" type="text" name="title" value="Image Title" disabled/> <br/>
            <input style={inputStyle} id="email" type="email" name="email" value="Freelancer Email" disabled/> <br/>
            <input style={inputStyle} id="image" type="text" name="image" value="Image Url" disabled/> <br/>
            <input style={inputStyle} id="orderAs" type="text" name="orderAs" value="Order As: freelancer" disabled/> <br/>
            <input style={inputStyle} id="date" type="date" name="date" placeholder="" required/> <br/>
            <input style={inputStyle} id="userid" type="text" name="userid" value="user id" disabled/> <br/> <br/>
            <button style={submitButton} type="submit">Place Order</button> <br/>
          </form>
          {isLoading && <Box sx={{ display: 'flex', jusfityContent: 'center' }}>
            <CircularProgress />
          </Box>}
        </Box>
      </Box>
    </Box>
  )
}
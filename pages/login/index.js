import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router'

export default function Login () {
  const router = useRouter();

  const inputData = {};

  const gradeintBackground = {
    backgroundImage: 'linear-gradient(-45deg, #90EE90, #00BFFF)'
  }

  const transparentBackground = {
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  }

  const imgStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '75px'
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

  const registerLink = {
    color: '#2E8B57',
    textDecoration: 'underline',
    cursor: 'pointer'
  }

  const handleData = (e) => {
    inputData[e.target.name] = e.target.value;
  }

  const postData = async (submitData) => {
    const response = await fetch('https://salty-beyond-87590.herokuapp.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submitData)
    });
    const data = await response.json();
    // console.log(data);
    if (data.success === true) {
      // console.log(data.user);
      localStorage.setItem('displayName', data.user.name);
      localStorage.setItem('email', data.user.email);
      localStorage.setItem('role', data.user.role);
      router.push('/');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
    // post to api
    postData(inputData);
  }

  const goToRegister = () => {
    router.push('/register');
  }

  return (
    <Box sx={{ width: '100%'}} height="100vh" style={gradeintBackground}>
      <Box sx={{display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{width: 300, height: 500, p: '10px', borderRadius: '10px' }} style={transparentBackground}>
          <br/>
          <Box>
            <Box sx={{ width: '150', height: '150', m: '0 auto', display: 'flex', justifyContent: 'center' }}>
              <img src="https://i.ibb.co/Cb8Bp86/male-avatar.png" style={imgStyle}/>
            </Box>
          </Box>
          <br/> <br/>
          <Typography sx={{ textAlign: 'center' }} variant="h5">Please Login</Typography> <br/>
          <form onSubmit={handleSubmit}>
            <input style={inputStyle} onBlur={handleData} type="email" name="email" placeholder="Email" required/> <br/>
            <input style={inputStyle} onBlur={handleData} type="password" name="password" placeholder="Password" required/> <br/>
            <button style={submitButton} type="submit">Login</button> <br/>
            <span>Do not have an account? <span style={registerLink} onClick={goToRegister}>Create one here</span></span>
          </form>
        </Box>
      </Box>
    </Box>
  )
}
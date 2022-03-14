import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';

export default function Register () {
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
    border: 'none',
    fontSize: '10px'
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
    const response = await fetch('https://salty-beyond-87590.herokuapp.com/api/register', {
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
    // console.log(inputData);
    if (inputData.password === inputData.confirmPassword) {
      if (inputData.password.length < 8) {
        window.alert('')
      }
      const submitData = {
        name: inputData.name,
        email: inputData.email,
        password: inputData.password,
        role: inputData.role
      }
      // console.log(submitData);
      // post submitData to register
      postData(submitData);
    } else {
      window.alert('Passwords are not matched');
    }
  }

  const goToRegister = () => {
    router.push('/login');
  }

  return (
    <Box sx={{ width: '100%'}} height="100vh" style={gradeintBackground}>
      <Box sx={{display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{width: 300, height: 650, p: '10px', borderRadius: '10px' }} style={transparentBackground}>
          <br/>
          <Box>
            <Box sx={{ width: '150', height: '150', m: '0 auto', display: 'flex', justifyContent: 'center' }}>
              <img src="https://i.ibb.co/Cb8Bp86/male-avatar.png" style={imgStyle}/>
            </Box>
          </Box>
          <br/> <br/>
          <Typography sx={{ textAlign: 'center' }} variant="h5">Please Register</Typography> <br/>
          <form onSubmit={handleSubmit}>
            <input style={inputStyle} onBlur={handleData} type="text" name="name" placeholder="Full Name" required/> <br/>
            <input style={inputStyle} onBlur={handleData} type="email" name="email" placeholder="Email" required/> <br/>
            <input style={inputStyle} onBlur={handleData} type="password" name="password" placeholder="Create Password (min 8 letters/symbols/numbers)" required/> <br/>
            <input style={inputStyle} onBlur={handleData} type="password" name="confirmPassword" placeholder="Confirm Password" required/> <br/>
            <label>Upload Profile Image: </label>
            <input type="file" name="image"/> <br/> <br/>
            <label>Please select role: </label> <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input onBlur={handleData} type="radio" name="role" value="freelancer" required/> Freelancer
            <input onBlur={handleData} type="radio" name="role" value="user" required/> User <br/> <br/>
            <button style={submitButton} type="submit">Register</button> <br/>
            <span>Already have an account? <span style={registerLink} onClick={goToRegister}>Login here</span></span>
          </form>
        </Box>
      </Box>
    </Box>
  )
}
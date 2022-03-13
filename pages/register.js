import { Container, Grid, TextField,Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const register = () => {
  return (
    <>
    <Container>
    <Grid sx={{mt:20}} container spacing={2}>
  <Grid item md={6} xs={12}>
 <form>
 <TextField
          required
          label="Name"
          variant="standard"
          sx={{
            mb:2,
            width:'60%'
          }}
        />
        <br />
        <TextField
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          sx={{
            mb:2,
            width:'60%'
          }}
        />
        <br />
        <TextField
          label="Retype Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          sx={{
            mb:2,
            width:'60%'
          }}
        />

<br />
<FormControl sx={{width:'60%',mt:1,mb:2}} >
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
    Who are you?
  </InputLabel>
  <NativeSelect
    defaultValue={'user'}
  >
    <option value={'user'}>User</option>
    <option value={'freelancer'}>Freelancer</option>
  </NativeSelect>
</FormControl>
<br />
<Button variant="outlined">Register</Button>
 </form>
  </Grid>
  <Grid item xs={4}>
    
  </Grid>
</Grid>
   
    </Container>
    </>
  )
}

export default register
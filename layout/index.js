
import Grid from '@mui/material/Grid';

export function Indexlayout({children}) {
    return <main>
        <Grid container spacing={2}>
  <Grid item xs={6}>
    okok
  </Grid>
  <Grid item xs={6}>
  {children}
  </Grid>
</Grid>
        
    </main>
}


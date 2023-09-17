import { Button, Container, Grid, Paper, Typography } from "@mui/material"

interface ICrudContainerProps {
  title: string;
  openNew: () => void;
  children: JSX.Element[] | JSX.Element;
}

export const CrudContainer = ({ title, openNew, children }: ICrudContainerProps) => {
  return (
    <Grid
      sx={{ padding: '20px' }}
      component={Paper}
      elevation={4}
      container
      direction="row"
      justifyContent="center">
      <Grid 
        item 
        xs={12} 
        sm={10} 
        md={10} 
        lg={11} 
        xl={11}>
        <Typography variant="h4" >
          { title }
        </Typography>
      </Grid>
      <Grid 
        item 
        paddingBottom={1.5}
        xs={12} 
        sm={2} 
        md={2} 
        lg={1} 
        xl={1}>
        <Button
          onClick={() => openNew()} 
          sx={{ width: '100%' }} 
          variant="contained">New +</Button>
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  )
}
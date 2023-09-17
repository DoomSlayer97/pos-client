import { Box, Container, Grid, Toolbar } from "@mui/material"

interface AdminContainerProps {
  children: JSX.Element[] | JSX.Element;
}

export const AdminContainer = ({ children }: AdminContainerProps) => {

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3} sx={{ margin: '40px 0px' }} >
          { children }
        </Grid>
      </Container>
    </Box>
  )

}
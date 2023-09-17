import { LockOutlined } from "@mui/icons-material";
import { 
  Typography, 
  Link, 
  createTheme, 
  ThemeProvider, 
  Container, 
  CssBaseline, 
  Box, 
  Avatar, 
  TextField, 
  FormControlLabel, 
  Checkbox, 
  Button, 
  Grid 
} from "@mui/material"
import { useAuth } from "../useAuth";

const Copyright = (props: any) => {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright ©'}
      <Link color="inherit">xd</Link>
    </Typography>
  )

} 

const defaultTheme = createTheme();


export const AuthMain = () => {

  const { form, onChangeForm, onSubmitAuth }  = useAuth();

  return (
    <ThemeProvider theme={defaultTheme} >
      <Container component={'main'} maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} >
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5" >
            Sign in
          </Typography>
          <Box  sx={{ mt: 1 }} >
            <TextField
              value={form.username}
              onChange={(e) => onChangeForm(e.target.name, e.target.value)}
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              type="text"
              autoFocus
            />
            <TextField
              value={form.password}
              onChange={(e) => onChangeForm(e.target.name, e.target.value)}
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="renember" color="primary" />}
              label="Renember me"
            />
            <Button
              onClick={onSubmitAuth}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have and account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>

  )


}
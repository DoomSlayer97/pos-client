import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { AdminAppbar, AdminToolbar, AdminContainer } from './'

const defaultTheme = createTheme();

export const drawerWidth: number = 240;

interface AdminMainProps {
  children: JSX.Element[] | JSX.Element;
}

export const AdminMain = ({ children }: AdminMainProps) => {
  
  return (
    <ThemeProvider theme={defaultTheme} >
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AdminAppbar />
        <AdminToolbar />
        <AdminContainer>
          { children }
        </AdminContainer>
      </Box>
    </ThemeProvider>
  )

}
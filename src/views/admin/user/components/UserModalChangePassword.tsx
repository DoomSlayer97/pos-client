import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material"
import { useUser } from "../useUser"

export const UserModalChangePassword = () => {

  const {
    onChangeFormChangePassword,
    showChangePasswordModal,
    formChangePassword
  } = useUser();
  
  return (
    <Dialog open={showChangePasswordModal} >
      <DialogTitle>Change Password</DialogTitle>
      <DialogContent>
        <Grid container direction="row" spacing={2} sx={{ padding: '10px' }} >
          <Grid item xs={12} >
            <TextField 
              name="password"
              onChange={(e) => onChangeFormChangePassword(e.target.name, e.target.value)}
              value={formChangePassword.password}
              sx={{ width: '100%' }} 
              label="Firstname" 
              variant="outlined" />
          </Grid> 
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="contained">Save changes</Button>
      </DialogActions>
    </Dialog>
  )
}
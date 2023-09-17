import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material"
import { useUser } from "../useUser"

export const UserModalForm = () => {

  const { 
    showFormModal, 
    closeModal,
    onChangeForm,
    form, 
    saveNewUser,
    isNew,
    saveUserChanges
  } = useUser();

  return (
    <Dialog open={showFormModal} onClose={closeModal} >
      <DialogTitle>{isNew ? 'Create User' : 'Edit User'}</DialogTitle>
      <DialogContent>
        <Grid container direction="row" spacing={2} sx={{ padding: '10px' }}  >
          <Grid item xs={6} >
            <TextField 
              name="firstName"
              onChange={(e) => onChangeForm(e.target.name, e.target.value)}
              value={form.firstName}
              sx={{ width: '100%' }} 
              label="Firstname" 
              variant="outlined" />
          </Grid>
          <Grid item xs={6} >
            <TextField  
              name="lastName"
              onChange={(e) => onChangeForm(e.target.name, e.target.value)}
              value={form.lastName}
              sx={{ width: '100%' }} 
              label="Lastname" 
              variant="outlined" />
          </Grid>
          <Grid item xs={12} >
            <TextField 
              name="username"
              onChange={(e) => onChangeForm(e.target.name, e.target.value)}
              value={form.username}
              sx={{ width: '100%' }} 
              label="Username" 
              variant="outlined" />
          </Grid>
          { isNew &&
            <Grid item xs={12} >
              <TextField 
                name="password"
                onChange={(e) => onChangeForm(e.target.name, e.target.value)}
                value={form.password}
                sx={{ width: '100%' }} 
                label="Password" 
                type="password" 
                variant="outlined" />
            </Grid>
          }
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => isNew ? saveNewUser() : saveUserChanges()} variant="contained">
          { isNew ? 'Save' : 'Save changes' }
        </Button>
        <Button onClick={closeModal} >Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}
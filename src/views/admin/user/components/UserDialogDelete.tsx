import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useUser } from "../useUser"

export const UserDialogDelete = () => {

  const { 
    showDeleteDialog, 
    closeDeleteDialog,
    deleteUser
  } = useUser();
  
  return (
    <Dialog
      open={showDeleteDialog}
      onClose={closeDeleteDialog}>
      <DialogTitle>{"Delete User"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Want to delete this user?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={deleteUser} variant='contained'>Delete</Button>
        <Button onClick={closeDeleteDialog} >Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}
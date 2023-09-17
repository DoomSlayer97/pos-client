import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material"
import { useCategory } from "../useCategory"
import { getError } from "../../../../helpers";

export const CategoryModalForm = () => {
 
  const { 
    showFormModal, 
    closeModalForm, 
    onChangeForm, 
    form,
    isNew,
    saveNewCategory,
    saveChangesCategory,
    errors,
  } = useCategory();

  const nameError = getError(errors, 'name');

  return (
    <Dialog open={showFormModal} onClose={closeModalForm} >
      <DialogTitle>{isNew ? 'Create Category' : 'Edit Category'}</DialogTitle>
      <DialogContent>
        <Grid 
          container 
            direction='row' 
          spacing={2} 
          sx={{ padding: '10px' }}>
          <Grid item xs={12} >
            <TextField
              error={nameError ? true : false}
              helperText={nameError ? nameError.text : ""}
              name="name"
              onChange={(e) => onChangeForm(e.target.name, e.target.value)}
              value={form.name}
              sx={{ width: '100%' }}
              label="Category name"
              variant="outlined"/>
            </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
      <Button onClick={isNew ? saveNewCategory : saveChangesCategory} variant="contained">
        { isNew ? 'Save' : 'Save changes' }
      </Button>
      <Button onClick={closeModalForm}>Cancel</Button>
      </DialogActions>
    </Dialog> 
  )

}
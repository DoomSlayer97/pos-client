import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, TextField } from "@mui/material"
import { useProductProvider } from "../useProductProvider"
import { getError } from "../../../../helpers";

export const ProductProviderModalForm = () => {

  const { 
    showFormModal, 
    closeModalForm,
    form,
    isNew,
    saveNewProductProvider,
    onChangeForm,
    saveChangesProductProvider,
    errors,
  } = useProductProvider();

  const nameError = getError(errors, 'name');
  const emailError = getError(errors, 'email');
  const numberError = getError(errors, 'number');

  return (
    <Dialog 
      open={showFormModal} 
      onClose={closeModalForm} >
      <DialogTitle>Product Provider Form</DialogTitle>
      <DialogContent>
        <Grid container direction="row" spacing={2} sx={{ padding: '10px' }}>
          <Grid item xs={12} >
            <FormControl fullWidth>
              <TextField 
                error={nameError ? true : false}
                helperText={nameError ? nameError.text : ""}
                name="name"
                value={form.name}
                onChange={(e) => onChangeForm(e.target.name, e.target.value)}
                label="Name"
                variant="outlined"/>
            </FormControl>
          </Grid>
          <Grid item xs={12} >
            <FormControl fullWidth>
              <TextField 
                error={emailError ? true : false}
                helperText={emailError ? emailError.text : ""}
                name="email"
                value={form.email}
                onChange={(e) => onChangeForm(e.target.name, e.target.value)}
                label="E-mail"
                variant="outlined"/>
            </FormControl>
          </Grid>
          <Grid item xs={12} >
            <FormControl fullWidth>
              <TextField 
                error={numberError ? true : false}
                helperText={numberError ? numberError.text : ""}
                name="number"
                value={form.number}
                onChange={(e) => onChangeForm(e.target.name, e.target.value)}
                label="Number"
                variant="outlined"/>
            </FormControl>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button 
          onClick={ isNew ? saveNewProductProvider : saveChangesProductProvider} 
          variant="contained">
          { isNew ? 'Save' : 'Save changes' }
        </Button>
        <Button onClick={closeModalForm} >Cancel</Button>
      </DialogActions>
    </Dialog>
  )

}
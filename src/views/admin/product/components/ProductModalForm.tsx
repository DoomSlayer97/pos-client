import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useProduct } from "../useProduct"
import { productStatusList } from "../../../../models/Product";
import { 
  CategorySelect, 
  ProviderSelect,
  SelectCombo 
} from "../../../../components"

export const ProductModalForm = () => {

  const { 
    showFormModal, 
    onChangeForm, 
    form,
    closeModalForm,
    saveNewProduct,
    isNew,
    saveChangesProduct,
  } = useProduct();

  return (
    <Dialog open={showFormModal} onClose={closeModalForm}>
      <DialogTitle>{isNew ? 'Create Product' : 'Edit Product'}</DialogTitle>
      <DialogContent>
        <Grid container direction='row' spacing={2} sx={{ padding: '10px' }}>
          <Grid item xs={12} >
            <TextField
              name="name"
              onChange={(e) => onChangeForm(e.target.name, e.target.value)}
              value={form.name}
              sx={{ width: '100%' }}
              label="Product name"
              variant="outlined"/>
          </Grid>
          <Grid item xs={12} >
            <TextField
              name="sku"
              onChange={(e) => onChangeForm(e.target.name, e.target.value)}
              value={form.sku}
              sx={{ width: '100%' }}
              label="SKU"
              variant="outlined"/>
          </Grid>
          <Grid item xs={12} >
            <TextField
              name="price"
              onChange={(e) => onChangeForm(e.target.name, e.target.value)}
              value={form.price}
              sx={{ width: '100%' }}
              label="Price"
              type="number"
              variant="outlined"/>
          </Grid>
          <Grid item xs={12} >
            <TextField
              name="stock"
              onChange={(e) => onChangeForm(e.target.name, e.target.value)}
              value={form.stock}
              sx={{ width: '100%' }}
              label="Stock"
              type="number"
              variant="outlined"/>
          </Grid>
          <Grid item xs={6}>
            <CategorySelect 
              value={form.category} 
              onChangeForm={(name, value) => onChangeForm(name, value)} 
              />
          </Grid>
          <Grid item xs={6}>
            <ProviderSelect
              value={form.provider}
              onChangeForm={(name, value) => onChangeForm(name, value)}/>
          </Grid>
          <Grid item xs={12}>
            <SelectCombo
              name="status"
              label="Status"
              placeholder="Status"
              rows={productStatusList}
              value={form.status}
              onChangeForm={onChangeForm}/>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={isNew ? saveNewProduct : saveChangesProduct} variant="contained">
          { isNew ? 'Save' : 'Save changes' }
        </Button>
        <Button onClick={closeModalForm}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )

}
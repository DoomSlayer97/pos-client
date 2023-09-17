import { Grid } from "@mui/material"
import { useEffect } from "react"
import { CrudContainer, LoadingOverlay, } from "../../../../components"
import { useProduct } from "../useProduct"
import { ProductModalForm, ProductTable } from "./"

export const ProductMain = () => {

  const { openNew, getProducts, isLoading } = useProduct();

  useEffect(() => {

    getProducts();

  }, []);

  return (
    <>
      <Grid 
        sx={{ padding: '20px 30px' }} 
        container>
        <CrudContainer 
          title="Product catalogue"
          openNew={openNew}>
          <ProductTable />
        </CrudContainer>
      </Grid>
      <LoadingOverlay show={isLoading} />
      <ProductModalForm />
    </>
  )
}
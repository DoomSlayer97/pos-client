import { Grid } from "@mui/material"
import { CrudContainer, LoadingOverlay } from "../../../../components"
import { useProductProvider } from "../useProductProvider"
import { ProductProviderTable, ProductProviderModalForm } from "./"
import { useEffect } from "react"

export const ProductProviderMain = () => {
 
  const { openNew, isLoading, getProductProviders } = useProductProvider();

  useEffect(() => {

    getProductProviders();

  }, [])

  return (
    <>
      <Grid
        sx={{ padding: '20px 30px' }} 
        container>
        <CrudContainer
          title="Provider catalogue"
          openNew={openNew}>
          <ProductProviderTable />
        </CrudContainer>
      </Grid>
      <LoadingOverlay show={isLoading} />
      <ProductProviderModalForm />
    </>
  )

}
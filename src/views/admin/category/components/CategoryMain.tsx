import { Grid } from "@mui/material"
import { useEffect } from "react"
import { useCategory } from "../useCategory"
import { CrudContainer, LoadingOverlay } from "../../../../components";
import { CategoryTable, CategoryModalForm } from "./"


export const CategoryMain = () => {

  const { openNew, getCategories, isLoading } = useCategory();

  useEffect(() => {

    getCategories();

  }, [])

  return (
    <>
      <Grid 
        sx={{ padding: '20px 30px' }} 
        container>
        <CrudContainer
          title="Category catalogue"
          openNew={openNew}>
          <CategoryTable />
        </CrudContainer>
      </Grid>
      <LoadingOverlay show={isLoading} />
      <CategoryModalForm />
    </>
  )  

}
import { Grid } from "@mui/material"
import { CrudContainer, LoadingOverlay } from "../../../../components"
import { UserTable, UserModalForm, UserModalChangePassword, UserDialogDelete } from "./"
import { useEffect } from "react"
import { useUser } from "../useUser"

export const UserMain = () => {

  const { getUsers, openModalForm, isLoading } = useUser();

  useEffect(() => {

    getUsers();
    
  }, []);
  
  return (
    <>
      <CrudContainer
        title="User Catalogue"
        openNew={() => openModalForm()}>
        <UserTable /> 
      </CrudContainer>
      <LoadingOverlay show={isLoading} />
      <UserModalForm />
      <UserModalChangePassword />
      <UserDialogDelete />
    </>
  )
}
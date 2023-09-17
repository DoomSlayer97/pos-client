import { Container, Grid, Typography, Button } from "@mui/material"
import { UserMain } from "./components"
import { UserProvider } from "../../../context/admin/user/UserProvider"

export const UserCrud = () => {
  return (
    <>
      <UserProvider>
        <UserMain />
      </UserProvider>
    </>
  )
}
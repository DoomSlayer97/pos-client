import { AuthProvider } from "../../context/auth/AuthProvider"
import { AuthMain } from "./components"

export const Auth = () => {

  return (
    <AuthProvider>
      <AuthMain />
    </AuthProvider>
  )
  
}
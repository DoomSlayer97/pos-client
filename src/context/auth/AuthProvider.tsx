import { useReducer } from "react";
import { AuthState } from "./interface/interface";
import { AuthReducer } from "./AuthReducer";
import { AuthContext } from "./AuthContext";

export const INITIAL_STATE: AuthState = {
  form: {
    username: '',
    password: ''
  }
}

interface props {
  children: JSX.Element[] | JSX.Element;
}

export const AuthProvider = ({ children }: props) => {

  const [ authState, dispatch ] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider value={{ authState, dispatch }} >
      { children }
    </AuthContext.Provider>
  )

}
import { createContext } from "react";
import { AuthAction } from "./AuthReducer";
import { AuthState } from "./interface/interface"

export type AuthContextProps = {
  authState: AuthState;
  dispatch: React.Dispatch<AuthAction>
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);
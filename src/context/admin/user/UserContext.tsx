import { createContext } from "react"
import { UserState } from "./interface/interface";
import { User } from "../../../models/User";

export type UserContextProps = {
  userState: UserState;
  loadSelectedUser: (user: User) => void;
  selectUser: (id: number) => void;
  loadUsers: (users: User[]) => void;
  openNew: () => void;
  closeModal: () => void;
  changeForm: (key: string, value: string) => void;
  setLoading: (value: boolean) => void;
  selectUserChangePassword: (id: number) => void;
  changeFormChangePassword: (key: string, value: string) => void;
  closeDeleteDialog: () => void;
  openDeleteUserDialog: (id: number) => void;
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps)
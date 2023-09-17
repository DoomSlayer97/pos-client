import { useReducer } from 'react'
import { UserContext } from './UserContext'
import { UserReducer } from './UserReducer';
import { UserState } from './interface/interface'
import { User } from '../../../models/User';

const INITIAL_STATE: UserState = {
  isNew: true,
  showFormModal: false,
  showChangePasswordModal: false,
  showDeleteDialog: false,
  isLoading: false,
  currentUserId: 0,
  users: [],
  form: {
    firstName: '',
    lastName: '',
    password: '',
    username: '',
  },
  formChangePassword: {
    password: ''
  }
}

interface props {
  children: JSX.Element[] | JSX.Element;
}

export const UserProvider = ({ children }: props) => {

  const [userState, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  const setLoading = (value: boolean) => {
    dispatch({ type: 'setLoading', payload: value });
  }

  const loadSelectedUser = ( user: User ) => {
    dispatch({ type: 'loadSelectedUser', payload: user });
  }

  const selectUser = (id: number) => {
    dispatch({ type: 'selectUser', payload: id });
  }

  const loadUsers = (users: User[]) => {
    dispatch({ type: 'loadUsers', payload: users });
  }

  const openNew = () => {
    dispatch({ type: 'openNew' });
  }

  const closeModal = () => {
    dispatch({ type: 'closeModal' });
  }

  const changeForm = (key: string, value: string) => {
    dispatch({ type: 'changeForm', payload: { key, value } });
  }

  const selectUserChangePassword = (id: number) => {
    dispatch({ type: 'selectUserChangePassword', payload: { id } });
  }

  const changeFormChangePassword = (key: string, value: string) => {
    dispatch({ type: 'changeFormChangePassword', payload: { key, value } });
  } 

  const closeDeleteDialog = () => {
    dispatch({ type: 'closeDeleteDialog' });
  }

  const openDeleteUserDialog = (id: number) => {
    dispatch({ type: 'openDeleteUserDialog', payload: { id } })
  }

  return (
    <UserContext.Provider value={{ 
      userState,
      loadSelectedUser,
      selectUser,
      loadUsers,
      openNew,
      closeModal,
      changeForm,
      setLoading,
      selectUserChangePassword,
      changeFormChangePassword,
      closeDeleteDialog,
      openDeleteUserDialog
    }} >
      { children }
    </UserContext.Provider>
  )
}
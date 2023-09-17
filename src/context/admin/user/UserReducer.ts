import { User } from "../../../models/User";
import { UserState } from "./interface/interface";

type UserAction =
  | { type: 'addUser', payload: User }
  | { type: 'loadSelectedUser', payload: User }
  | { type: 'selectUser', payload: number; }
  | { type: 'loadUsers', payload: User[] }
  | { type: 'openNew' }
  | { type: 'closeModal' }
  | { type: 'changeForm', payload: { key: string, value: string } }
  | { type: 'setLoading', payload: boolean }
  | { type: 'selectUserChangePassword', payload: { id: number } }
  | { type: 'changeFormChangePassword', payload: { key: string, value: string } }
  | { type: 'closeDeleteDialog' }
  | { type: 'openDeleteUserDialog',  payload: { id: number } }

export const UserReducer = ( state: UserState, action: UserAction ): UserState => {

  switch (action.type) {

    case 'setLoading':  {

      const isLoading = action.payload;
  
      return {
        ...state,
        isLoading
      }

    }

    case 'addUser': {

      return {
        ...state
      }

    }

    case 'loadSelectedUser': { 

      const user = action.payload;
  
      return {
        ...state,
        isNew: false,
        showFormModal: true,
        currentUserId: user.id as number,
        form: {
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          password: ''
        }
      }

    }

    case 'selectUser': {

      const id = action.payload;
  
      return {
        ...state,
        currentUserId: id 
      };

    }

    case 'loadUsers': {

      const users = action.payload;
      
      return {
        ...state,
        users
      }

    }

    case 'openNew': {

      return {
        ...state,
        isNew: true,
        showFormModal: true
      }

    }

    case 'closeModal': {

      return {
        ...state,
        showFormModal: false,
        form: {
          firstName: '',
          lastName: '',
          password: '',
          username: ''
        }
      }

    }

    case 'changeForm': {

      const { key, value } = action.payload;
  
      return {
        ...state,
        form: {
          ...state.form,
          [key]: value
        }
      }

    }

    case 'selectUserChangePassword': {

      const { id } = action.payload;
  
      return {
        ...state,
        currentUserId: id,
        showChangePasswordModal: true
      };

    }

    case 'changeFormChangePassword': {

      const { key, value } = action.payload;
  
      return {
        ...state,
        formChangePassword: {
          ...state.formChangePassword,
          [key]: value
        }
      }

    }

    case 'closeDeleteDialog': {

      return {
        ...state,
        showDeleteDialog: false
      }

    }

    case 'openDeleteUserDialog': {

      const { id } = action.payload;
      
      return {
        ...state,
        showDeleteDialog: true,
        currentUserId: id
      }

    }
      
  }

}
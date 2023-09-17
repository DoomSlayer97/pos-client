import { User } from '../../../../models/User'

export interface UserState {
  isNew: boolean;
  showFormModal: boolean;
  showChangePasswordModal: boolean;
  showDeleteDialog: boolean;
  currentUserId: number;
  isLoading: boolean;
  users: User[];
  form: {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
  };
  formChangePassword: {
    password: string;
  }
}
import { UserContext } from "../../../context/admin/user/UserContext"
import { useContext } from "react"
import { userHttp } from "../../../http/user"

export const useUser = () => {

  const { 
    userState, 
    loadUsers, 
    openNew, 
    closeModal,
    changeForm,
    loadSelectedUser,
    setLoading,
    selectUserChangePassword,
    changeFormChangePassword,
    openDeleteUserDialog,
    closeDeleteDialog
  } = useContext(UserContext);

  const users = userState.users;
  const showFormModal = userState.showFormModal;
  const form = userState.form;
  const isNew = userState.isNew;
  const currentId = userState.currentUserId;
  const isLoading = userState.isLoading;
  const showChangePasswordModal = userState.showChangePasswordModal;
  const formChangePassword = userState.formChangePassword;
  const showDeleteDialog = userState.showDeleteDialog;

  const getUsers = async () => {
    
    const users = await userHttp().findAll();

    if ( users ) {
      
      loadUsers(users);

    }

  }

  const saveNewUser = async () => {

    setLoading(true);

    const res = await userHttp().create(form);

    if ( res ) {

      closeModal();

      setLoading(false);

      await getUsers();

    }

  }

  const saveUserChanges = async () => {

    const res = await userHttp().update(form, currentId);

    if ( res ) {

      closeModal();

      await getUsers();

    }

  }

  const editUser = async (id: number) => {

    setLoading(true);

    const user = await userHttp().findOne(id);

    if ( user ) {

      loadSelectedUser(user);

      setLoading(false)

    }

  }

  const changePasswordUser = async (id: number) => {

    setLoading(true);

    const res = await userHttp().findOne(id);

    if ( res ) {

      setLoading(false);

    }

  }

  const deleteUser = async () => {

    setLoading(true);

    const res = await userHttp().deleteOne(currentId);

    if ( res ) {

      setLoading(false);

      closeDeleteDialog();

      await getUsers();

    }

  }

  const deleteUserDialog = async (id: number) => {
    
    openDeleteUserDialog(id);

  }

  const openModalForm = () => {
    openNew()
  }

  const onChangeForm = (key: string, value: string) => {
    changeForm(key, value);
  }

  const onChangeFormChangePassword = (key: string, value: string) => {
    changeFormChangePassword(key, value);
  }

  return {
    users,
    getUsers,
    showFormModal,
    openModalForm,
    closeModal,
    onChangeForm,
    form,
    saveNewUser,
    editUser,
    isNew,
    saveUserChanges,
    isLoading,
    showChangePasswordModal,
    onChangeFormChangePassword,
    formChangePassword,
    changePasswordUser,
    showDeleteDialog,
    deleteUserDialog,
    closeDeleteDialog,
    deleteUser
  }

}
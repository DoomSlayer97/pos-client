import { useContext } from "react"
import { CategoryContext } from "../../../context/admin/categories/CategoryContext";
import { categoryHttp } from "../../../http/category";
import { Category } from "../../../models/Category";
import { generateInputErrors } from "../../../helpers"

export const useCategory = () => {

  const { dispatch, categoryState } = useContext(CategoryContext);

  const categories = categoryState.categories;
  const isLoading = categoryState.isLoading;
  const showFormModal = categoryState.showFormModal;
  const form = categoryState.form;
  const isNew = categoryState.isNew;
  const currentId = categoryState.currentCategoryId;
  const errors = categoryState.errors;

  const getCategories = async () => {

    const res = await categoryHttp().findAll();

    if ( !res.error ) {

      const findedCategories = res.res;

      dispatch({ type: 'loadCategories', payload: findedCategories ? findedCategories : [] });

    }

  }

  const editCategory = async (id: number) => {

    setLoading(true);

    const res = await categoryHttp().findOne(id);

    if ( !res.error ) {

      const findedCategory = res.res as Category;

      dispatch({ type: 'loadSelectedCategory', payload: findedCategory });

      setLoading(false);

    }

  }

  const saveChangesCategory = async () => {

    clearErrors();

    setLoading(true);

    const res = await categoryHttp().update(form, currentId);
    
    setLoading(false);

    if ( !res.error ) {

      closeModalForm();

      await getCategories();

    } else {

      const httpErrors = res.error as string[];
      const inputKeys = Object.keys(form);

      const generatedErrors = generateInputErrors(inputKeys, httpErrors);

      dispatch({ type: 'setErrors', payload: generatedErrors });

    }

  }

  const saveNewCategory = async () => {

    clearErrors();

    setLoading(true);

    const res = await categoryHttp().create(form);

    setLoading(false);

    if ( !res.error ) {

      closeModalForm();

      await getCategories();

    } else {
      
      const httpErrors = res.error as string[];
      const inputKeys = Object.keys(form);

      const generatedErrors = generateInputErrors(inputKeys, httpErrors);

      dispatch({ type: 'setErrors', payload: generatedErrors });

    }

  }

  const openNew = () => {
    dispatch({ type: 'openNew' });
  }

  const setLoading = (value: boolean) => {
    dispatch({ type: 'setLoading', payload: value });
  }

  const onChangeForm = (key: string, value: string) => {
    dispatch({ type: 'changeForm', payload: { key, value } });
  }

  const closeModalForm = () => {
    
    dispatch({ type: 'closeFormModal' });
    
    clearErrors();

  }

  const clearErrors = () => {
    dispatch({ type: 'clearErrors' })
  }

  return {
    openNew,
    setLoading,
    onChangeForm,
    closeModalForm,
    categories,
    isLoading,
    showFormModal,
    form,
    isNew,
    getCategories,
    saveNewCategory,
    editCategory,
    saveChangesCategory,
    errors,
  }

}
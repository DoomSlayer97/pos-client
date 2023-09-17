import { useContext } from "react";
import { ProductProviderContext } from "../../../context/admin/productprovider/ProductProviderContext";
import { productProviderHttp } from "../../../http/productProvider";
import { generateInputErrors } from "../../../helpers";


export const useProductProvider = () => {

  const { productProviderState, dispatch } = useContext(ProductProviderContext);

  const productProviders = productProviderState.productProviders;
  const isLoading = productProviderState.isLoading;
  const showFormModal = productProviderState.showFormModal;
  const form = productProviderState.form;
  const isNew = productProviderState.isNew;
  const currentId = productProviderState.currentProductProviderId;
  const errors = productProviderState.errors;

  const editProductProvider = async (id: number) => {

    setLoading(true);

    const productProvider = await productProviderHttp().findOne(id);

    if ( productProvider ) {

      dispatch({ type: 'loadSelectedProductProvider', payload: productProvider });

      setLoading(false);

    }

  }

  const getProductProviders = async () => {
    
    const productProviders = await productProviderHttp().findAll();

    if ( productProviders ) {

      dispatch({ type: 'loadProductProviders', payload: productProviders })

    }

  }


  const saveNewProductProvider = async () => {

    setLoading(true);

    const res = await productProviderHttp().create(form);

    setLoading(false);
    
    if ( !res.error ) {

      closeModalForm();
      
      await getProductProviders();

    } else {

      const httpErrors = res.error as string[];
      const inputKeys = Object.keys(form);

      const generatedErrors = generateInputErrors(inputKeys, httpErrors);

      dispatch({ type: 'setErrors', payload: generatedErrors });

    }

  }

  const saveChangesProductProvider = async () => {

    setLoading(true);

    const res = await productProviderHttp().update(form, currentId);

    setLoading(false);
    
    if ( !res.error ) {

      closeModalForm();

      await getProductProviders();

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
    productProviders,
    isLoading,
    showFormModal,
    form,
    isNew,
    openNew,
    editProductProvider,
    onChangeForm,
    closeModalForm,
    getProductProviders,
    saveNewProductProvider,
    saveChangesProductProvider,
    errors
  }

}
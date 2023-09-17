import { useContext } from "react"
import { ProductContext } from "../../../context/admin/products/ProductContext";
import { productHttp } from "../../../http/product"

export const useProduct = () => {

  const { dispatch, productState } = useContext(ProductContext);

  const products = productState.products;
  const isLoading = productState.isLoading;
  const showFormModal = productState.showFormModal;
  const form = productState.form;
  const isNew = productState.isNew;
  const currentId = productState.currentProductId;

  const getProducts = async () => {
    
    const products = await productHttp().findAll();

    if ( products ) {

      dispatch({ type: 'loadProducts', payload: products })

    }

  }

  const editProduct = async (id: number) => {

    setLoading(true);

    const product = await productHttp().findOne(id);

    if ( product ) {

      dispatch({ type: 'loadSelectedProduct', payload: product });

      setLoading(false);

    }

  }

  const saveChangesProduct = async () => {

    setLoading(true);

    const res = await productHttp().update(form, currentId);

    if ( res ) {

      closeModalForm();

      setLoading(false);

      await getProducts();

    }

  }

  const saveNewProduct = async () => {

    setLoading(true);

    const res = await productHttp().create(form);

    if ( res ) {

      closeModalForm();

      setLoading(false);

      await getProducts();

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
  }

  return {
    openNew,
    getProducts,
    products,
    editProduct,
    isLoading,
    showFormModal,
    onChangeForm,
    form,
    closeModalForm,
    saveNewProduct,
    isNew,
    saveChangesProduct,
  }

}
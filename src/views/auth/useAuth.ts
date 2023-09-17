import { useContext } from "react"
import { AuthContext } from "../../context/auth/AuthContext"
import { authHttp } from "../../http/auth";
import { tokenUtils } from "../../utils";

export const useAuth = () => {

  const { authState, dispatch } = useContext(AuthContext);
 
  const form = authState.form;

  const onSubmitAuth = async () => {

    const res = await authHttp().auth(form);

    console.log(res);

    if ( !res.error ) {

      const userToken = res.res?.token as string;

      tokenUtils.setToken(userToken);

    }

  }

  const onChangeForm = (key: string, value: string) => {
    dispatch({ type: 'changeForm', payload: { key, value } });
  }

  return {
    onChangeForm,
    form,
    onSubmitAuth
  }
  
}
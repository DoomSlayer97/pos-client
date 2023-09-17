import { AxiosError } from "axios";
import { 
  HttpErrorResponse, 
  HttpResponseData, 
  HttpResult } from "../interfaces/http";
import { http } from "./http";

export const authHttp = () => {

  interface AuthHttpAuthDto {
    username: string;
    password: string;
  }

  interface AuthHttpAuthResponse {
    token: string
  }

  const auth = async (dto: AuthHttpAuthDto) => {
    try {

      const res = await http().post<HttpResponseData<AuthHttpAuthResponse>>(`login/auth`, dto);
  
      if ( res.status != 200 ) return { error: res.data.message }
  
      return {
        res: { token: res.data.data.token }
      };
      
    } catch (error) {

      console.log(error);

      return { error: error }
    }

 
  }

  return {
    auth,
  }
  
}
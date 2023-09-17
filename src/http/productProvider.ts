import { AxiosError } from "axios";
import { HttpError, HttpResponseData, HttpResult } from "../interfaces/http";
import { ProductProvider } from "../models/ProductProvider"
import { http } from "./http"

export const productProviderHttp = () => {

  interface ProductProviderCreateDto {
    id?: number;
    name: string;
    number: string;
    email: string;
  }

  const create = async (dto: ProductProviderCreateDto): Promise<HttpResult<boolean>> => {

    try {

      await http().post<HttpResponseData<ProductProvider>>(`admin/providers`, dto);
  
      return { res: true };

      
    } catch (e) {

      const error = e as AxiosError<HttpError>;

      const message = error.response?.data.message;

      return { error: message };
      
    }


  }

  const findAll = async (): Promise<false | ProductProvider[]> => {

    const res = await http().get<HttpResponseData<ProductProvider[]>>(`admin/providers`);

    if ( res.status != 200 ) return false;

    return res.data.data;

  }

  const findOne = async (id: number): Promise<false | ProductProvider> => {
    
    const res = await http().get<HttpResponseData<ProductProvider>>(`admin/providers/${id}`);

    if ( res.status != 200 ) return false;

    return res.data.data;

  }

  interface ProductProviderUpdateDto {
    id?: number;
    name: string;
    number: string;
    email: string;
  }

  const update = async (dto: ProductProviderUpdateDto, id: number): Promise<HttpResult<boolean>> => {

    try {

      await http().put<HttpResponseData<ProductProvider>>(`admin/providers/${id}`, dto);
      
      return { res: true };
      
    } catch (e) {
     
      const error = e as AxiosError<HttpError>;

      const message = error.response?.data.message;

      return { error: message }

    }


  }

  const deleteOne = async (id: number) => {

    const res = await http().delete<HttpResponseData<boolean>>(`admin/providers/${id}`);

    if ( res.status != 200 ) return false;

    return true;

  }

  return {
    create,
    findAll,
    findOne,
    update,
    deleteOne,
  }

}
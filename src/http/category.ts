import { AxiosError } from "axios"
import { HttpError, HttpResponseData, HttpResult } from "../interfaces/http";
import { Category } from "../models/Category"
import { http } from "./http"

export const categoryHttp = () => {

  interface CategoryHttpCreateDto {
    name: string;
  }

  const create = async (dto: CategoryHttpCreateDto): Promise<HttpResult<boolean>> => {

    try {

      await http().post<HttpResponseData<Category>>(`admin/categories`, dto);
    
      return { res: true };

    } catch(e) {

      const error = e as AxiosError<HttpError>;

      const message = error.response?.data.message;

      return { error: message };

    }

  }
  
  const findAll = async (): Promise<HttpResult<Category[]>> => {
    
    const res = await http().get<HttpResponseData<Category[]>>(`admin/categories`);

    if ( res.status != 200 ) return { error: res.data.message };

    return { res: res.data.data };

  }

  const findOne = async (id: number): Promise<HttpResult<Category>> => {
   
    const res = await http().get<HttpResponseData<Category>>(`admin/categories/${id}`);

    if ( res.status != 200 ) return { error: res.data.message };

    return { res: res.data.data };

  }

  interface CategoryHttpUpdateDto {
    name: string;
  }

  const update = async (dto: CategoryHttpUpdateDto, id: number): Promise<HttpResult<Category>> => {

    try {

      const res = await http().put<HttpResponseData<Category>>(`admin/categories/${id}`, dto);
    
      return { res: res.data.data };
      
    } catch (e) {

      const error = e as AxiosError<HttpError>;

      const message = error.response?.data.message;

      return { error: message }
      
    }


  }

  const deleteOne = async (id: number) => {
    
    const res = await http().delete(`admin/categories/${id}`);

    if ( res.status != 200 ) return false;

    return true;

  }

  return {
    create,
    findAll,
    findOne,
    update,
    deleteOne
  }

}
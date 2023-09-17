import { http } from './http'
import { Product, ProductStatus } from '../models/Product'
import { HttpResponseData } from '../interfaces/http'

export const productHttp = () => {

  interface ProductHttpCreateDto {
    name: string;
    sku: string;
    price: number;
    stock: number;
    status: ProductStatus;
    category: number;
    provider: number;
  }

  const create = async (dto: ProductHttpCreateDto): Promise<boolean> => {
    
    const res = await http().post<HttpResponseData<Product>>(`admin/products`, dto);

    if ( res.status != 201 ) return false;

    return true;

  }

  const findAll = async (): Promise<false | Product[]> => {
    
    const res = await http().get<HttpResponseData<Product[]>>(`admin/products`);

    if ( res.status != 200 ) return false;

    return res.data.data;

  }

  const findOne = async (id: number): Promise<false | Product> => {

    const res = await http().get<HttpResponseData<Product>>(`admin/products/${id}`);

    if ( res.status != 200 ) return false;

    return res.data.data;

  }

  interface ProductHttpUpdateDto {
    name: string;
    sku: string;
    price: number;
    stock: number;
    status: ProductStatus;
    category: number;
    provider: number;
  }

  const update = async (dto: ProductHttpUpdateDto, id: number): Promise<boolean> => {

    const res = await http().put<HttpResponseData<Product>>(`admin/products/${id}`, dto);

    if ( res.status != 200 ) return false;

    return true;

  }

  const deleteOne = async (id: number): Promise<boolean> => {

    const res = await http().delete<HttpResponseData<any>>(`admin/products/${id}`);

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
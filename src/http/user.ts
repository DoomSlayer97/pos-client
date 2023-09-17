import { http } from './http'
import { User } from '../models/User'
import { HttpResponseData } from '../interfaces/http'

export const userHttp = () => {

  interface UserHttpCreateDto {
    firstName: string;
    lastName:  string;
    username:  string;
    password?:  string;
  }

  const create = async (dto: UserHttpCreateDto) => {

    const res = await http().post<HttpResponseData<User>>('admin/users', dto);

    if ( res.status != 201 ) return false;

    return true;

  }

  const findAll = async () => {

    const res = await http().get<HttpResponseData<User[]>>('admin/users');

    if ( res.status !=  200) return false;

    return res.data.data;

  }

  const findOne = async (id: number) => {

    const res = await http().get<HttpResponseData<User>>(`admin/users/${id.toString()}`);

    if ( res.status == 404 ) return false;

    return res.data.data;

  }

  interface UserHttpUpdateDto {
    firstName: string;
    lastName:  string;
    username:  string;
    password?:  string;
  }

  const update = async (dto: UserHttpUpdateDto, id: number) => {

    const res = await http().put<HttpResponseData<User>>(`admin/users/${id}`, dto);

    if ( res.status != 200 ) return false;

    return res.data.data;

  }

  const deleteOne = async (id: number) => {

    const res = await http().delete<HttpResponseData<any>>(`admin/users/${id}`);

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
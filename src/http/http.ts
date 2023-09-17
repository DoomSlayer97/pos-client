import axios, { AxiosInstance } from "axios"

export const http = (): AxiosInstance => {

  const httpConnection = axios.create({
    baseURL: 'http://localhost:3000'
  });

  return httpConnection;

}
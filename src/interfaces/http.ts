
export interface HttpResponseData<T> {
  data: T;
  message: string | string[];
  status: boolean;
  errors?: any;
}

export interface HttpErrorResponse {
  message: string;
  errors: any
}

export interface HttpResult<T = any> {
  res?: T;
  error?: string | string[];
}

export interface HttpError {
  message: string;
}
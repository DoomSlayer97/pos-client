import { AuthState } from "./interface/interface";

export type AuthAction = 
  | { type: 'changeForm', payload: { key: string, value: string } }

export const AuthReducer = ( state: AuthState, action: AuthAction ): AuthState => {

  switch (action.type) {

    case 'changeForm': {

      const { key, value } = action.payload;

      return {
        ...state,
        form: {
          ...state.form,
          [key]: value
        }
      }

    }

  }

}
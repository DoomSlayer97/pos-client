
class TokenUtils {

  setToken(value: string) {

    localStorage.setItem('token', value);

  }

  getToken() {

    return localStorage.getItem('token');

  }

}

export const tokenUtils = new TokenUtils();

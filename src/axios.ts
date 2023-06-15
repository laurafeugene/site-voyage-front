import axios, { Axios } from 'axios';

class Client {
  axios: Axios;

  constructor() {
    this.axios = axios;
    this.axios.defaults.baseURL = 'https://qwikle-server.eddi.cloud';
    this.intercept();
  }

  private intercept() {
    this.axios.interceptors.response.use((response) => {
      if (response.data.errors) {
        // Changer selon ce que vous voulez renvoyer dans le catch
        return Promise.reject(response);
      }
      return response;
    });
  }

  public setAutorization(token: string) {
    this.axios.defaults.headers.common.Authorization = token;
  }

  public removeAuthorization() {
    this.axios.defaults.headers.common.Authorization = '';
  }
}

export default new Client();

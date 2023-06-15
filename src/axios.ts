import axios, { Axios, AxiosError } from 'axios';

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
        return Promise.reject(
          /**
           * En renvoyant une instance AxiosError on garde la logique d'axios pour les erreurs
           * cela vous permet d'utiliser axios de la même manière que la doc pour gérer les erreurs
           * et il fonctionnera également parfaitement avec les réponse du back.
           * @see {@link https://axios-http.com/docs/handling_errors}
           */
          new AxiosError(
            'Apollo Error',
            undefined,
            undefined,
            undefined,
            response
          )
        );
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

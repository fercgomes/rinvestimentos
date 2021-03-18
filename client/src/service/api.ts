import Axios, { AxiosInstance } from 'axios';

class API {
  private axios: AxiosInstance;

  constructor() {
    this.axios = Axios.create({
      baseURL:
        process.env.NODE_ENV === 'production'
          ? 'https://api.rinvestimentos.xyz'
          : 'http://api.localhost:3001',
    });
  }

  public async getPortfolio() {
    return await this.axios.get('/reddit/portfolio').then((res) => res.data);
  }

  public async getDDs() {
    return await this.axios.get('/reddit/dds').then((res) => res.data);
  }

  public async getQuote(ticker: string) {
    return await this.axios
      .get(`/market-data/quote?ticker=${ticker}`)
      .then((res) => res.data);
  }
}

const api = new API();
export { api };

import { API } from './API';

class DataAPI extends API {
  constructor(baseUrl = 'http https://swapi.co/api') {
    super(baseUrl);
  }

  getPerson(id) {
    let url = '/people';
    if (id) {
      url += `/${id}`;
    }
    return this.makeRequest({ url, method: 'GET' });
  }
}

export default new DataAPI();

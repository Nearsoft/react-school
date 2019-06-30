import { API } from './API';

class DataAPI extends API {
  constructor(baseUrl = 'https://rickandmortyapi.com/api') {
    super(baseUrl);
  }

  getEpisodes() {
    const url = '/episode';
    return this.makeRequest({ url, method: 'GET' })
      .then(({ results }) => results);
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

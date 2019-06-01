import { API } from './API';

class DataAPI extends API {
  constructor(baseUrl = 'https://rickandmortyapi.com/api') {
    super(baseUrl);
  }

  getCharacter(id) {
    let url = '/character';
    if (id) {
      url += `/${id}`;
    }
    return this.makeRequest({ url, method: 'GET' });
  }

  searchCharacterByName(name) {
    const url = `/character/?name=${name}`;
    return this.makeRequest({ url, method: 'GET' });
  }
}

export default new DataAPI();

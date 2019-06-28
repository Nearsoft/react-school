import { API } from './API';

class SatelliteAPI extends API {
  constructor(baseUrl = 'https://www.n2yo.com/rest/v1/satellite') {
    super(baseUrl);
    this.apiKey = process.env.REACT_APP_N2YO_KEY;
  }

  getUrlWithKey(url) {
    return `${url}&apiKey=${this.apiKey}`;
  }

  getPositions(observerPositions, seconds = 1, satId = 36516) {
    const { lat, lng } = observerPositions;
    const url = `positions/${satId}/${lat}/${lng}/0/${seconds}`;
    return this.makeRequest({
      url: this.getUrlWithKey(url),
      method: 'GET'
    }).then(data => {
      if (data.error) {
        return Promise.reject(data.error);
      }
      return data;
    });
  }
}

export default new SatelliteAPI();

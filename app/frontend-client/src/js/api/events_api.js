import Request from './api_central'

class Events {

  static getEvents() {
    return Request({
      method: 'GET',
      url: '/event'
    });
  }

}

export default Events;

import Axios from 'axios';
const Request = (options) => {

  const onSuccess = response => {
    console.debug('Request Successful!', response.data);
    return response.data;
  };

  const onError = error => {
    console.debug('Request Failed:', error.config);

    if (error.response) {
      console.debug('Status:', error.response.status);
      console.debug('Data:', error.response.data);
      console.debug('Headers:', error.response.headers);
    } else {
      console.debug('Error Message:', error.message);
    }

    return Promise.reject(error.data || error.response || error.message);
  };

  const client = Axios.create({
    baseURL: 'http://localhost:4000/api/'
  });

  return client(options)
    .then(onSuccess)
    .catch(onError);
}

export default Request;

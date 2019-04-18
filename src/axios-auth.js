import axios from 'axios'

const instance = axios.create({
   baseURL: 'https://vs-js-axios.firebaseio.com'
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance
import axios from 'axios';

export default axios.create({
	baseURL: 'http://720607d2c7b7.ngrok.io', // ngrok URL expires every 8 hours
});

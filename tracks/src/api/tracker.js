import axios from 'axios';

export default axios.create({
	baseURL: 'http://95d1771fc486.ngrok.io', // ngrok URL expires every 8 hours
});

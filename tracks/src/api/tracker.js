import axios from 'axios';

export default axios.create({
	baseURL: 'http://6ba91c0a2621.ngrok.io', // ngrok URL expires every 8 hours
});

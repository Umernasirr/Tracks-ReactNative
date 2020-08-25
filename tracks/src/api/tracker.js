import axios from 'axios';

export default axios.create({
	baseURL: 'http://48f624eeccd0.ngrok.io', // ngrok URL expires every 8 hours
});

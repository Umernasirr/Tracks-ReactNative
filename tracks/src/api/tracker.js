import axios from 'axios';

export default axios.create({
	baseURL: 'http://83775288f4fc.ngrok.io', // ngrok URL expires every 8 hours
});

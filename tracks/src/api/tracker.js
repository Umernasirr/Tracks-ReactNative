import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const instance = axios.create({
	baseURL: 'http://d6b1f897658a.ngrok.io', // ngrok URL expires every 8 hours
});

instance.interceptors.request.use(
	async (config) => {
		const token = await AsyncStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);

export default instance;

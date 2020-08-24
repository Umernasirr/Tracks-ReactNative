import createDataContext from './createDataContext';

import trackerAPI from '../api/tracker';
import Axios from 'axios';
import tracker from '../api/tracker';
import AsyncStorage from '@react-native-community/async-storage';
import { debug } from 'react-native-reanimated';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
	switch (action.type) {
		case 'add_error':
			return { ...state, errorMessage: action.payload };

		case 'signup':
			return { ...state, errorMessage: '', token: action.payload };
		default:
			return state;
	}
};

const signup = (dispatch) => async (email, password) => {
	try {
		console.log('hi');
		const response = await tracker.post('/signup', { email, password });
		console.log('token is ', response.data.token);
		await AsyncStorage.setItem('token', response.data.token);

		dispatch({ type: 'signup', payload: response.data.token });

		console.log('navigation point');
		navigate('SigninScreen');
		console.log('done ?');
	} catch (err) {
		console.log(err);
		dispatch({ type: 'add_error', payload: 'Something went wrong with Sign up' });
	}
	// API request to signUp with email and password
	// Modify state and change state to show authentication
};

const signin = (dispatch) => {
	return ({ email, password }) => {
		// API request to signUp with email and password
		// Modify state and change state to show authentication
	};
};

export const { Provider, Context } = createDataContext(authReducer, { signup }, { token: null, errorMessage: '' });

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
		case 'signin':
			return { ...state, errorMessage: '', token: action.payload, isSignedIn: true };
		case 'clear_error_message':
			return { ...state, errorMessage: '' };
		case 'signout':
			return { ...state, token: null, errorMessage: '' };
		default:
			return state;
	}
};

const tryLocalSignin = (dispatch) => async () => {
	const token = await AsyncStorage.getItem('token');
	if (token) {
		dispatch({ type: 'signin', payload: token });

		navigate('BottomTabScreenStack');
	} else {
		console.log('hello');
		navigate('SignScreenStack');
	}
};

const clearErrorMessage = (dispatch) => () => {
	dispatch({ type: 'clear_error_message' });
};

const signup = (dispatch) => async (email, password) => {
	try {
		const response = await tracker.post('/signup', { email, password });

		if (!response.data.token) {
			dispatch({ type: 'add_error', payload: 'Something went wrong with Sign up' });
			return;
		}
		await AsyncStorage.setItem('token', response.data.token);

		dispatch({ type: 'signin', payload: response.data.token });
		navigate('BottomTabScreenStack');
	} catch (err) {
		dispatch({ type: 'add_error', payload: 'Something went wrong with Sign up' });
	}
	// API request to signUp with email and password
	// Modify state and change state to show authentication
};

const signout = (dispatch) => async () => {
	await AsyncStorage.removeItem('token');
	dispatch({ type: 'signout' });

	navigate('SignScreenStack');
};

const signin = (dispatch) => async (email, password) => {
	try {
		const response = await tracker.post('/signin', { email, password });

		if (!response.data.token) {
			dispatch({ type: 'add_error', payload: 'Something went wrong with Sign up' });
			return;
		}

		await AsyncStorage.setItem('token', response.data.token);

		dispatch({ type: 'signin', payload: response.data.token });

		navigate('BottomTabScreenStack');
	} catch (err) {
		dispatch({ type: 'add_error', payload: 'Something went wrong with Sign In' });
	}
	// API request to signUp with email and password
	// Modify state and change state to show authentication
};

export const { Provider, Context } = createDataContext(
	authReducer,
	{ signup, signin, signout, clearErrorMessage, tryLocalSignin },
	{ isSignedIn: false, token: null, errorMessage: '' }
);

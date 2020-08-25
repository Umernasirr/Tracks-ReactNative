import React, { useContext, useEffect } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

const ResolveAuthScreen = ({ navigation }) => {
	const { state, tryLocalSignin } = useContext(AuthContext);

	useEffect(() => {
		console.log(state);
		tryLocalSignin();
	}, []);

	return null;
};

export default ResolveAuthScreen;

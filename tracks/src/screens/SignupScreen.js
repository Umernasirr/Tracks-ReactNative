import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
	const { state, signup, tryLocalSignin } = useContext(AuthContext);

	useEffect(() => {
		tryLocalSignin();
	});

	return (
		<View style={styles.container}>
			<AuthForm
				headerText="Sign Up For Tracker"
				errorMessage={state.errorMessage}
				submitButtonText="Sign Up"
				onSubmit={signup}
			/>

			<NavLink text="Already have an account? Sign in Instead" routeName="SigninScreen" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 200,
	},
});

export default SignupScreen;

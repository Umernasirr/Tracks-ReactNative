import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
	const { state, signin } = useContext(AuthContext);

	return (
		<View style={styles.container}>
			<AuthForm
				headerText="Sign In For Tracker"
				errorMessage={state.errorMessage}
				submitButtonText="Sign In"
				onSubmit={(email, password) => signin(email, password)}
			/>

			<NavLink text="Dont have an account? Sign Up Instead" routeName="SignupScreen" />
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

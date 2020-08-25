import React, { useState, useContext } from 'react';
import { Text, Input, Button } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
	const { state, signup } = useContext(AuthContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<View style={styles.container}>
			<Spacer>
				<Text h3>Sign Up For Tracker</Text>
			</Spacer>

			<Input autoCapitalize="none" autoCorrect={false} label="Email" value={email} onChangeText={setEmail} />
			<Input
				secureTextEntry
				label="Password"
				autoCapitalize="none"
				autoCorrect={false}
				value={password}
				onChangeText={setPassword}
			/>
			{state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
			<Spacer>
				<Button title="Sign Up" onPress={() => signup(email, password)} />
			</Spacer>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 200,
	},
	errorMessage: {
		fontSize: 16,
		color: 'red',
		textAlign: 'center',
	},
});

export default SignupScreen;

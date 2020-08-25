import React, { useState } from 'react';

import { Text, Button, Input } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import Spacer from './Spacer';
const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<View>
			<Spacer>
				<Text h3>{headerText}</Text>
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
			{errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

			<Spacer>
				<Button
					title={submitButtonText}
					onPress={() => {
						onSubmit(email, password);
					}}
				/>
			</Spacer>
		</View>
	);
};

const styles = StyleSheet.create({
	errorMessage: {
		fontSize: 16,
		color: 'red',
		textAlign: 'center',
	},
});

export default AuthForm;

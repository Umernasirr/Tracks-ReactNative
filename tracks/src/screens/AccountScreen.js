import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
const AccountScreen = () => {
	const { signout } = useContext(AuthContext);
	return (
		<View style={styles.container}>
			<Spacer>
				<Button title="Sign Out" onPress={signout} />
			</Spacer>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 10,
	},
});

export default AccountScreen;

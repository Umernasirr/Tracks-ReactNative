import React, { useContext } from 'react';
import Spacer from './Spacer';
import { Text } from 'react-native-elements';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Context as AuthContext } from '../context/AuthContext';
const NavLink = ({ text, routeName }) => {
	const { state, clearErrorMessage } = useContext(AuthContext);

	const navigation = useNavigation();
	return (
		<TouchableOpacity
			onPress={() => {
				clearErrorMessage();
				navigation.navigate(routeName);
			}}
		>
			<Spacer>
				<Text>{text}</Text>
			</Spacer>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	// link: {
	// 	color: 'blue',
	// },
});
export default NavLink;

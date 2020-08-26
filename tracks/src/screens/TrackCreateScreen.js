// import '../_mockLocation';
import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { withNavigationFocus } from '@react-navigation/native';

import { Context as LocationContext } from '../context/LocationContext';
import Map from '../components/Map';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({ navigation }) => {
	const [isFocused, setIsFocused] = useState(false);

	useEffect(() => {
		const startRecording = navigation.addListener('focus', () => {
			setIsFocused(true);
		});

		// const stopRecording = navigation.addListener('blur', () => {
		// 	setIsFocused(true);
		// });

		return startRecording;
		// return stopRecording;
	}, [navigation]);

	const { addLocation } = useContext(LocationContext, isFocused);

	const [error] = useLocation(addLocation);

	return (
		<View>
			<Text h3 />
			<Map />
			{error ? <Text>Please Enable location services</Text> : null}
		</View>
	);
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;

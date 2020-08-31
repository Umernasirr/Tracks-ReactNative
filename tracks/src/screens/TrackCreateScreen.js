import '../_mockLocation';
import React, { useContext, useState, useEffect, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { withNavigationFocus } from '@react-navigation/native';

import { Context as LocationContext } from '../context/LocationContext';
import Map from '../components/Map';
import Trackform from '../components/TrackForm';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({ navigation }) => {
	const [isFocused, setIsFocused] = useState(false);

	useEffect(() => {
		const startRecording = navigation.addListener('focus', () => {
			setIsFocused(true);
		});

		const stopRecording = navigation.addListener('blur', () => {
			setIsFocused(false);
		});

		return startRecording, stopRecording;
		// return stopRecording;
	}, [navigation]);

	const {
		state: { recording },
		addLocation,
	} = useContext(LocationContext);
	const callback = useCallback((location) => addLocation(location, recording), [recording]);

	const [error] = useLocation(isFocused || recording, callback);

	return (
		<View>
			<Text h3 />
			<Map />
			{error ? <Text>Please Enable location services</Text> : null}
			<Trackform />
		</View>
	);
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;

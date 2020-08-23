import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import AccountScreen from './src/screens/AccountScreen';

export default function App() {
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		const loadFonts = async () => {
			await Font.loadAsync({
				Roboto: require('native-base/Fonts/Roboto.ttf'),
				Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
				...Ionicons.font,
			});

			setIsReady(true);
		};

		loadFonts();
		console.log('App Loaded');
	}, []);

	// Render
	if (!isReady) {
		return <AppLoading />;
	}

	return (
		<NavigationContainer>
			<Container>
				<Text>Open up App.js to start working on your app!</Text>
			</Container>
		</NavigationContainer>
	);
}

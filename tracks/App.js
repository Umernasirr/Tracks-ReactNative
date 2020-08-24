import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Context
import { Provider as AuthProvider } from './src/context/AuthContext';

// Screens
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';

// Navigator
import { navigationRef } from './src/navigationRef';
function App() {
	const [isSignedIn, setIsSignedIn] = useState(false);

	const SignStack = createStackNavigator();
	const TrackStack = createStackNavigator();
	const BottomTab = createBottomTabNavigator();

	const TrackStackScreen = () => {
		return (
			<TrackStack.Navigator initialRouteName="TrackListScreen">
				<TrackStack.Screen name="TrackListScreen" component={TrackListScreen} />
				<TrackStack.Screen name="TrackDetailScreen" component={TrackDetailScreen} />
			</TrackStack.Navigator>
		);
	};

	return (
		<NavigationContainer ref={navigationRef}>
			{!isSignedIn ? (
				<SignStack.Navigator initialRouteName="SignupScreen">
					<SignStack.Screen name="SignupScreen" options={{ headerShown: false }} component={SignupScreen} />
					<SignStack.Screen name="SigninScreen" component={SigninScreen} />
				</SignStack.Navigator>
			) : (
				<BottomTab.Navigator>
					<BottomTab.Screen name="TrackStackScreen" component={TrackStackScreen} />

					<BottomTab.Screen name="TrackCreateScreen" component={TrackCreateScreen} />
					<BottomTab.Screen name="AccountScreen" component={AccountScreen} />
				</BottomTab.Navigator>
			)}
		</NavigationContainer>
	);
}

export default () => (
	<AuthProvider>
		<App />
	</AuthProvider>
);

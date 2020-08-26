import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Context
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
// Screens
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
// COntext
import { Context as AuthContext } from './src/context/AuthContext';

// Navigator
import { navigationRef } from './src/navigationRef';
import { Button } from 'react-native';
const App = () => {
	const [isSignedIn, setIsSignedIn] = useState(false);

	const SignStack = createStackNavigator();
	const TrackStack = createStackNavigator();
	const BottomTab = createBottomTabNavigator();
	const RootStack = createStackNavigator();
	const { state } = useContext(AuthContext);

	useEffect(() => {
		setIsSignedIn(state.isSignedIn);
		// setIsSignedIn(useContext(AuthContext));
	}, []);

	useEffect(() => {
		setIsSignedIn(state.isSignedIn);
		// setIsSignedIn(useContext(AuthContext));
	}, [state.isSignedIn]);

	const TrackStackScreen = () => {
		return (
			<TrackStack.Navigator initialRouteName="TrackListScreen">
				<TrackStack.Screen name="TrackListScreen" component={TrackListScreen} />
				<TrackStack.Screen name="TrackDetailScreen" component={TrackDetailScreen} />
			</TrackStack.Navigator>
		);
	};

	const SignScreenStack = () => (
		<SignStack.Navigator initialRouteName="SignupScreen">
			<SignStack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
			<SignStack.Screen name="SigninScreen" component={SigninScreen} options={{ headerShown: false }} />
		</SignStack.Navigator>
	);

	const BottomTabScreenStack = () => (
		<BottomTab.Navigator initialRouteName="TrackStackScreen">
			<BottomTab.Screen name="TrackStackScreen" component={TrackStackScreen} />
			<BottomTab.Screen name="TrackCreateScreen" component={TrackCreateScreen} />
			<BottomTab.Screen name="AccountScreen" component={AccountScreen} />
		</BottomTab.Navigator>
	);
	return (
		<SafeAreaProvider>
			<NavigationContainer ref={navigationRef}>
				<RootStack.Navigator headerMode="none">
					{!state.token ? (
						<RootStack.Screen
							name="SignScreenStack"
							component={SignScreenStack}
							options={{ animationEnabled: false }}
						/>
					) : (
						<RootStack.Screen
							name="BottomTabScreenStack"
							component={BottomTabScreenStack}
							options={{ animationEnabled: false }}
						/>
					)}
				</RootStack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
};

export default () => (
	<AuthProvider>
		<LocationProvider>
			<App />
		</LocationProvider>
	</AuthProvider>
);

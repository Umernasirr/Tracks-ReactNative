import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Context
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';

// Screens
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
// Context
import { Context as AuthContext } from './src/context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// Navigator
import { navigationRef } from './src/navigationRef';
import { Button } from 'react-native';
const App = () => {
	const [isSignedIn, setIsSignedIn] = useState(false);

	const SignStack = createStackNavigator();
	const TrackStack = createStackNavigator();
	const TrackCreateStack = createStackNavigator();
	const AccountStack = createStackNavigator();

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
			<TrackStack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: '#3A99F0',
					},
					headerTintColor: '#fff',
				}}
				initialRouteName="TrackListScreen"
			>
				<TrackStack.Screen name="TrackListScreen" component={TrackListScreen} options={{ title: 'Tracks' }} />
				<TrackStack.Screen
					name="TrackDetailScreen"
					component={TrackDetailScreen}
					options={{ title: 'Track Details' }}
				/>
			</TrackStack.Navigator>
		);
	};

	const SignScreenStack = () => (
		<SignStack.Navigator initialRouteName="SignupScreen">
			<SignStack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
			<SignStack.Screen name="SigninScreen" component={SigninScreen} options={{ headerShown: false }} />
		</SignStack.Navigator>
	);

	const TrackCreateStackScreen = () => (
		<TrackCreateStack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#3A99F0',
				},
				headerTintColor: '#fff',
			}}
		>
			<TrackCreateStack.Screen name="Add Track" component={TrackCreateScreen} />
		</TrackCreateStack.Navigator>
	);

	const AccountScreenStack = () => (
		<AccountStack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#3A99F0',
				},
				headerTintColor: '#fff',
			}}
		>
			<TrackCreateStack.Screen name="Account Settings" component={AccountScreen} />
		</AccountStack.Navigator>
	);

	const BottomTabScreenStack = () => (
		<BottomTab.Navigator initialRouteName="TrackStackScreen">
			<BottomTab.Screen
				name="TrackStackScreen"
				component={TrackStackScreen}
				options={{
					title: 'View Tracks',
					tabBarIcon: () => <MaterialCommunityIcons name="map-marker-path" size={24} color="black" />,
				}}
			/>
			<BottomTab.Screen
				name="TrackCreateScreen"
				component={TrackCreateStackScreen}
				options={{ title: 'Add Track', tabBarIcon: () => <FontAwesome name="plus" size={18} /> }}
			/>
			<BottomTab.Screen
				name="AccountScreen"
				component={AccountScreenStack}
				options={{ title: 'Account Settings', tabBarIcon: () => <FontAwesome name="gear" size={18} /> }}
			/>
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
	<TrackProvider>
		<AuthProvider>
			<LocationProvider>
				<App />
			</LocationProvider>
		</AuthProvider>
	</TrackProvider>
);

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const TrackCreateScreen = () => {
	return (
		<SafeAreaView style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
			<Text style={{ fontSize: 48 }}>TrackCreateScreen</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={{ fontSize: 48 }}>TrackListScreen</Text>
			<Button title="Go to Track Detail" onPress={() => navigation.navigate('TrackDetailScreen')} />
		</View>
	);
};

const styles = StyleSheet.create({});

export default TrackListScreen;

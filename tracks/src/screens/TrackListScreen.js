import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Button, ListItem } from 'react-native-elements';

import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
	const { state, fetchTracks } = useContext(TrackContext);
	useEffect(() => {
		const fetchData = navigation.addListener('focus', fetchTracks);
		return fetchData;
		// return stopRecording;
	}, [navigation]);

	return (
		<View>
			{/* <ListOfTracks /> */}

			<FlatList
				data={state}
				keyExtractor={(item) => item._id}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate('TrackDetailScreen', { _id: item._id })}>
							<ListItem key={item._id} bottomDivider chevron title={item.name} />
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default TrackListScreen;

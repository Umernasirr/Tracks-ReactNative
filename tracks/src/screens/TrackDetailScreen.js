import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';
import { Text } from 'react-native-elements';

const TrackDetailScreen = ({ route }) => {
	const { state } = useContext(TrackContext);
	const _id = route.params._id;
	const track = state.find((track) => track._id === _id);
	const initialCoords = track.locations[0].coords;
	return (
		<View>
			<Text style={styles.name} h3>
				{track.name}
			</Text>
			<MapView
				style={styles.map}
				initialRegion={{
					longitudeDelta: 0.01,
					latitudeDelta: 0.01,
					...initialCoords,
				}}
			>
				<Polyline coordinates={track.locations.map((location) => location.coords)} />
			</MapView>
		</View>
	);
};

const styles = StyleSheet.create({
	map: {
		height: 300,
		margin: 10,
	},
	name: {
		alignSelf: 'center',
		fontWeight: 'normal',
		marginVertical: 20,
		borderColor: '#3A99F0',
		borderBottomWidth: 3,
	},
});

export default TrackDetailScreen;

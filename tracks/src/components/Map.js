import React, { useContext } from 'react';

import { StyleSheet, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-elements';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
	const {
		state: { currentLocation, locations },
	} = useContext(LocationContext);

	if (!currentLocation) {
		return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
	}

	const coords = currentLocation.coords;
	return (
		<MapView
			style={styles.map}
			initialRegion={{
				latitude: coords.latitude,
				longitude: coords.longitude,
				latitudeDelta: 0.01,
				longitudeDelta: 0.01,
			}}
		>
			<Circle
				center={{
					latitude: coords.latitude,
					longitude: coords.longitude,
				}}
				radius={20}
				strokeColor="rgba(158,158,255,1.0)"
				fillColor="rgba(158,158,255,0.4)"
			/>
			<Polyline coordinates={locations.map((loc) => loc.coords)} />
		</MapView>
	);
};

const styles = StyleSheet.create({
	map: {
		height: 300,
	},
});

export default Map;

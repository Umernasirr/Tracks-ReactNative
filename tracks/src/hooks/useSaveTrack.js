import { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';
import { navigate } from '../navigationRef';
export default () => {
	const { createTrack } = useContext(TrackContext);

	const {
		state: { locations, name },
		reset,
	} = useContext(LocationContext);

	const saveTrack = async () => {
		await createTrack(name, locations);
		// Cleanup after Track is created
		reset();
		navigate('TrackStackScreen');
	};

	return [saveTrack];
};

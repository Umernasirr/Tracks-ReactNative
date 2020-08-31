import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';

import { Context as LocationContext } from '../context/LocationContext';
import Spacer from './Spacer';

const TrackForm = ({ setIsFocused }) => {
	const {
		state: { name, recording, locations },
		startRecording,
		stopRecording,
		changeName,
	} = useContext(LocationContext);

	console.log(locations.length);
	return (
		<>
			<Spacer />
			<Input value={name} onChangeText={changeName} placeholder="Enter Track Name" />
			<Spacer>
				{recording ? (
					<Button
						onPress={() => {
							stopRecording();
						}}
						title="Stop"
					/>
				) : (
					<Button
						onPress={() => {
							startRecording();
						}}
						title="Start Recording"
					/>
				)}
			</Spacer>
		</>
	);
};

export default TrackForm;

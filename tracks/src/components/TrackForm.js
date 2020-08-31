import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';

import { Context as LocationContext } from '../context/LocationContext';
import Spacer from './Spacer';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = ({ setIsFocused }) => {
	const [saveTrack] = useSaveTrack();
	const {
		state: { name, recording, locations },
		startRecording,
		stopRecording,
		changeName,
	} = useContext(LocationContext);

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
			<Spacer>
				{!recording && locations.length ? (
					<Button type="outline" title="Save Recording" onPress={saveTrack} />
				) : null}
			</Spacer>
		</>
	);
};

export default TrackForm;

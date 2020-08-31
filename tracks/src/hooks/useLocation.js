import React, { useState, useEffect } from 'react';

import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default (shouldTrack, callback) => {
	const [error, setError] = useState(null);
	useEffect(() => {
		let subscriber;

		//  Start Watching
		const startWatching = async () => {
			try {
				await requestPermissionsAsync();
				const sub = await watchPositionAsync(
					{
						accuracy: Accuracy.BestForNavigation,
						timeInterval: 1000,
						distanceInterval: 10,
					},
					callback
				);
				subscriber = sub;
			} catch (error) {
				console.log(error);
				setError(error);
			}
		};

		if (shouldTrack) {
			startWatching();
		} else {
			if (subscriber) {
				subscriber.remove();
				subscriber = null;
			}
		}

		// clean up function

		return () => {
			if (subscriber) {
				subscriber.remove();
				subscriber = null;
			}
		};
	}, [shouldTrack, callback]);

	return [error];
};

import React, { useState, useEffect } from 'react';

import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default (callback) => {
	const [error, setError] = useState(null);

	const startWatching = async () => {
		try {
			await requestPermissionsAsync();
			const subscriber = await watchPositionAsync(
				{
					accuracy: Accuracy.BestForNavigation,
					timeInterval: 1000,
					distanceInterval: 10,
				},

				callback
			);
		} catch (error) {
			console.log(error);
			setError(error);
		}
	};

	useEffect(() => {
		startWatching();
	}, []);

	return [error];
};

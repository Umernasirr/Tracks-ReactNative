import createDataContext from './createDataContext';

const trackReducer = (state, action) => {
	switch (action.type) {
		default:
			state;
	}
};

const fetchTracks = (dispatch) => () => {};

const createTrack = (dispatch) => (name, locations) => {
	console.log(name, locations.length);
};

export const { Context, Provider } = createDataContext(trackReducer, { fetchTracks, createTrack }, []);
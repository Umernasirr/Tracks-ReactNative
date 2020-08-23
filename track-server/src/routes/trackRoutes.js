const express = require('express');
const mongoose = require('mongoose');

const requireAuth = require('../middlewares/requireAuth');

const Track = mongoose.model('Track');

const router = express.Router();

router.use(requireAuth);

router.get('/tracks', async (req, res) => {
	const userId = req.user._id;

	const tracks = await Track.find({ userId });

	res.send(tracks);
});

router.post('/tracks', async (req, res) => {
	const { name, locations } = req.body;
	if (!name || !locations) {
		res.status(422).send({ error: 'You must provide a name and a location' });
	}

	const track = new Track({ name, locations, userId: req.user._id });
	try {
		await track.save();
	} catch (err) {
		res.status(422).send({ err: err.message });
	}
	res.send(track);
});

module.exports = router;

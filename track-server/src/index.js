require('./models/User');
require('./models/Track');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRouter = require('./routes/trackRoutes');

const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
// Routes
app.use(authRoutes);
app.use(trackRouter);

const mongoURI =
	'mongodb+srv://umernasirr:hQ8zV0DesKlpkj6y@cluster0.ecngt.mongodb.net/track?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
	console.log('Connected to mongo Instance');
});

mongoose.connection.on('error', (err) => {
	console.log('Error connecting to mongo ', err);
});

app.get('/', requireAuth, (req, res) => {
	res.send(`Your email is ${req.user.email} `);
});

app.listen(3000, () => {
	console.log('Listening on Port 3000');
});

const express = require('express');
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');

const app = express();

dotenv.config();

var hbs = exphbs.create({
	extname: '.hbs'
});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('home');
});

var projects = [
	{
		title: 'Convolutional Neural Network',
		description:
			'Created a simple Convolutional Neural Network from scratch using python and the MNIST database was used to train it to recognise handwritten digits.',
		link: 'https://github.com/DaVinciTachyon/NeuralNetworks',
		image: 'brain.svg'
	}
];

app.get('/code/', function(req, res) {
	res.render('code', { projects: projects });
});

app.listen(8080);

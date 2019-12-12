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

var projects = [];

app.get('/code/', function(req, res) {
	res.render('code', { projects: projects });
});

app.listen(8080);

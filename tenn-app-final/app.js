'use strict';

// MongoDB config
const mongojs = require('mongojs');
const connectionString = 'mongodb://Admin:secretpassword@ds113958.mlab.com:13958/webdjs';
const collections = ['users', 'jobs'];

const db = mongojs(connectionString, collections);

// EXPRESS config
const express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser');

const app = express();

// view engine
app.set('views engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

// set static folder
app.use('/', express.static(path.join(__dirname, 'src')));

// body-parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes User
app
	// .get('/users', function (req, res, next) {
	// 	db['users'].find(function (err, users) {
	// 		if (err) {
	// 			res.send(err);
	// 		}
	// 		res.json(users);
	// 	})
	// })
	// .get('/users/:id', function (req, res, next) {
	// 	db['users'].findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, user) {
	// 		if (err) {
	// 			res.send(err);
	// 		}
	// 		res.json(user);
	// 	})
	// })
	.post('/users', function (req, res, next) {
		let user = req.body;

		//validations
		if (!user.username || !user.password) {
			res.status(400);
			res.json({ "error": "Bad data!" });
		}
		else {
			db['users'].save(user, function (err, user) {
				if (err) {
					res.send(err);
				}
				res.json(user);
			})
		}
	});

const port = 3000;
app.listen(port);
console.log(`Server running on port:${port}`);

// open in the browser
require('openurl').open(`http://localhost:${port}`);
'use strict';

// MongoDB config
const mongojs = require('mongojs');
const connectionString = 'mongodb://localhost/teenAppDatabase';
const collections = ['users', 'jobs'];

const db = mongojs(connectionString, collections);

// EXPRESS config
const express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, charset");
  next();
});

app.set('views engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

app.use('/', express.static(path.join(__dirname, 'src')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const jwt = require('jsonwebtoken');

function createToken(user) {
  return jwt.sign(user, "ngEurope rocks!", { expiresIn : 60*5 });
}

app
	.get('/users', function (req, res, next) {
		db['users'].find(function (err, users) {
			if (err) {
				res.send(err);
			}
			res.json(users);
		})
	})
	.post('/users', function (req, res, next) {
		let user = req.body;

		if (!user.username || !user.passHash) {
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
	})
	.post('/authenticate', function(req, res, next)  {
		if (!req.body.username || !req.body.password) {
			return res.status(400).send("You must send the username and the password");
		}
		// Search IS NOT WORKING PROPERLY
		var user = db['users'].find({username: req.body.username});
		console.log(user);
		if (!user) {
			return res.status(401).send("The username or password don't match");
		}
		if (!(user.password === req.body.passHash)) {
			return res.status(401).send("The username or password don't match");
		}

		res.status(200).send({
			id_token: createToken(user)
		});
	});

const port = 3000;
app.listen(port);
console.log(`Server running on port:${port}`);
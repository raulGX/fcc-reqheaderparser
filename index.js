const express = require('express'),
	app = express(),
	path = require('path'),
	port = process.env.PORT || 8080;

app.use('/', (req, res) => {
	res.send(req.headers);
});

app.listen(port, (err) => {
	if (err){
		console.log(err);
		process.exit(1);
	}
	console.log('Listening to port:', port);
});

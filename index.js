const express = require('express'),
	app = express(),
	path = require('path'),
	port = process.env.PORT || 8080;

app.use('/', (req, res) => {
	var objToSend = {
		ipaddress: "",
		language: "",
		software: ""
	};
	var headers = req.headers;
	console.log(req);

	objToSend.ipaddress = req.headers['x-forwarded-for'] ||
     	req.connection.remoteAddress ||
     	req.socket.remoteAddress ||
     	req.connection.socket.remoteAddress;

	objToSend.language = headers["accept-language"].split(',')[0];

	objToSend.software = /\(([^)]+)\)/.exec(headers["user-agent"])[1]; //complicated regex for extracting first string between paranthesisses

	res.send(objToSend);
});

app.listen(port, (err) => {
	if (err){
		console.log(err);
		process.exit(1);
	}
	console.log('Listening to port:', port);
});

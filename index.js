const os = require('os');
const express = require('express');

const app = express();

function freeMem() { 
	return Math.round(os.freemem() / (1024 * 1024));
}

function totalMem() {
	return Math.round(os.totalmem() / (1024 * 1024));
}


Math.round(os.totalmem() / (1024 * 1024));

app.get('/memory', function(req, res) {
	// res.send('Hello World');

	const free = freeMem();
	const total = totalMem();
	const used = total - free;
	res.json({ freeMemory: free, totalMemory: total, usedMemory: used});
});

app.listen(4567, function() {
	console.log('Listening at port 4567...');
});
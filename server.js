const path = require('path')
const express = require('express');
const app = express();
const compression = require('compression')
const PORT = process.env.PORT || 3000

const publicDir = path.join('.', 'out')

app.use(compression())

app.use('/', express.static(publicDir, { extensions: ['html'] }));
app.listen(PORT, () => {
	console.log("Server listening at " + PORT)
});
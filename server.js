const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const port = 8081;

app.listen(port, () => console.log(`Server running on port ${port}`));
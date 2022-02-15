const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const routesHandler = require('./routes/handler.js');
const cors = require('cors');
require('dotenv/config');

const app = express();
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/", routesHandler);

const PORT = process.env.PORT; // backend routing port

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
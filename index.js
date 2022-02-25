const express = require('express');
var app = express();
const dotnev = require('dotenv');
const port = process.env.PORT || 5000


// config
dotnev.config();
app.use(express.json());

app.get('/', function(req, res, err){
    res.json('Hello from the other side');
});


app.listen(port, (err) => {
    console.log("up and running");
});

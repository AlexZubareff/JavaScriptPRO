const express = require('express');
const app = express();
const fs = require('fs');
// app.use(express.static('.'));
app.listen(3000, () => {
    console.log(('Server is running on 3000 port!'))
});
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.get('/catalogData', (req, res) =>{
    fs.readFile('./database/catalog.json', 'utf-8', (err, data) => {
        // console.log(data);
        res.send(data);
    });
});
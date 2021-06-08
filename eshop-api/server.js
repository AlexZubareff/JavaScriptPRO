const express = require('express');
const app = express();
const fs = require('fs');
// app.use(express.static('.'));
app.listen(3000, () => {
    console.log(('Server is running on 3000 port!'))
});

app.get('/catalogData', (req, res) =>{
    fs.readFile('./database/catalog.json', 'utf-8', (err, data) => {
        // console.log(data);
        res.send(data);
    });
});
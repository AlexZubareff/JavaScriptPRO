const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
// app.use(express.static('.'));
app.listen(3000, () => {
    console.log(('Server is running on 3000 port!'))
});

app.use(cors());
app.use(bodyParser.json());
// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });
app.post('/addToCart',(req, res) => {
    fs.readFile('./database/cart.json', 'utf-8', (err, data) => {
        if (err) {
            res.send('{"result": 0}')
        } else {
            const catr = JSON.parse(data);
            const item = req.body;
            catr.push(item);
            fs.writeFile('/database/cart.json', JSON.stringify(data), (err) => {
                if (err) {
                    res.send('{"result": 0}')
                } else {
                    res.send('{"result": 1}')
                }
            })
        }
    })
})

app.get('/catalogData', (req, res) => {
    fs.readFile('./database/catalog.json', 'utf-8', (err, data) => {
        // console.log(data);
        res.send(data);
    });
});

app.get('/cartData', (req, res) =>{
    fs.readFile('./database/cart.json', 'utf-8', (err, data) => {
        // console.log(data);
        res.send(data);
    });
});
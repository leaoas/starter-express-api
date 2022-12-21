const express = require('express')
const app = express()

var path = require('path');
var bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.text())

app.all('/api/*', (req, res) => {
    console.log("Just got a request: " + req.path)
    console.log("req.body = " + req.body)
    res.send(200, 'OK')
})

app.listen(process.env.PORT || 3000)

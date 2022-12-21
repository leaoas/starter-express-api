const express = require('express')
const app = express()

var path = require('path');

app.use(express.static(path.join(__dirname, 'static')));

app.all('/api/*', (req, res) => {
    console.log("Just got a request!")
    console.log("req.body = " + req.body)
    res.send(200, 'OK')
})

app.listen(process.env.PORT || 3000)

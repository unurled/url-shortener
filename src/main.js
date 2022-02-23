require('dotenv').config()
const express = require("express")
const path = require('path');
const app = express()

// Database config
const connection = require('./config/db.config')
connection.once('open', () => console.log('DB Connected'))
connection.on('error', () => console.log('Error'))

// Routes Config
app.use(express.json({
    extended: false
})) //parse incoming request body in JSON format.

app.use('/', require('./service/redirect'))
app.use('/api/url', require('./service/url'))
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + `../../public/index.html`))
})
app.get('/public/js/app.js', function(req, res) {
    res.sendFile(path.join(__dirname + `../../public/js/app.js`))
})
app.get('/public/js/service/FetchService.js', function(req, res) {
    res.sendFile(path.join(__dirname + `../../public/js/service/FetchService.js`))
})
app.get('/public/main.css', function(req, res) {
    res.sendFile(path.join(__dirname + `../../public/main.css`))
})

//Listen for incoming requests
const PORT = process.env.PORT
app.listen(PORT, console.log(`server started, listening PORT ${PORT}`))
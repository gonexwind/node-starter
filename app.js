const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// Running Port 
const port = 3000

// Route Apps
const indexRoute = require('./routes/index')

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use('/', indexRoute)

// Error Page
app.get('*', (req, res) => res.render('error'))

// Listen Port
app.listen(port, () => console.log(`Running at ${port}`))
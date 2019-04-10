var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist');

//on connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database mongodb @ 27017')
});

//on error
mongoose.connection.on('error', (err) => {
  console.log('Error in db connection : ' + err);
})

//port number
const port = 3000;

//adding middleware - cors
app.use(cors());
app.use(bodyparser.json());

//static files
//__dirname refers to current direcory 
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', route);
//testing server
app.get('/', (req, res) => {
  res.send('Foobar');
})

app.listen(port, () => {
  console.log('Server started at port ' + port);
});


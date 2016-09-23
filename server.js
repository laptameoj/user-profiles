const express = require('express');
const { json } = require('body-parser');
const port = 5000;
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const session = require('express-session');
const sessionConfig = require('./config/config')
const app = express();

app.use( session(sessionConfig) );
app.use( json() );

//console.log(sessionConfig);
app.use( cors(corsOptions) );

app.use( express.static(__dirname + '/public'));

require('./controller/userRoutes')(app)


app.listen(port);

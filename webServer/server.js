const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();


app.listen(3000);
app.set('view engine','ejs');


app.use(morgan('dev'));
app.use(express.static('public'));
app.use(cors());
app.options('*', cors());


app.get('/', (req, res) => {
    res.render('register', {username: null});

});

app.get('/chat', (req, res) => {

    console.log(req);
    res.render('chatroom');

});



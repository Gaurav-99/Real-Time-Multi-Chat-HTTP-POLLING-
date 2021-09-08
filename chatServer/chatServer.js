const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const util = require('./util.js');
const registerService = require('./registerService.js');
const messageService = require('./messageService.js');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors());
app.options('*', cors());



app.post('/register', (req, res) => {
    console.log(req.body);
    if (!util.validateFieldsForRegister(req.body)){
        res.send({"Sucess": false});
        return;
    }
    let resp = registerService.registerClient(req.body);
    res.send({"id" : resp});
});



app.post('/sendmessage', (req, res) => {
    console.log(req.body);
    if (!util.validateFieldsForSendMessage(req.body)){
        res.send({"Sucess": false});
        return;
    }

    if (!registerService.checkUserPresent(req.body.from)){
        res.send({"Sucess": false});
        return;
    }
        
    messageService.addMessageToQueue(req.body);
    res.send({"Sucess" : true});

    
});


app.post('/getmessage', (req, res) => {

    if(!registerService.checkUserPresent(req.body.from)){
        res.send({"Sucess": false});
        return;
    }
    let lastMessage = messageService.getMessagesFromIndex(req.body.index);

    res.send(lastMessage);
    
});



var server = app.listen(8080, () => {
    console.log("debug : ", server.address().address, server.address().port);
});


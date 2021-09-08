const LIMIT = 10;
var messageById = {};
var messageQueue = [];
var index = 0;


function getNextIndex(){
    index += 1;
    return index;
}

function addMessageToQueue(message) {
    let id = getNextIndex();
    message["id"] = id;
    messageById[id] = message;
    messageQueue.push(id);

    console.log(messageById);
    console.log(messageQueue);    
}

function getMessagesFromIndex(index) {
    let res = [];
    let flag = false;
    messageQueue.forEach(ele => {
        if (flag === true){
            res.push(messageById[ele]);
        }
        
        if (ele === index){
            flag = true;
        }
    });

    console.log(res);
    return res;
}


module.exports = {
    addMessageToQueue,
    getMessagesFromIndex

};
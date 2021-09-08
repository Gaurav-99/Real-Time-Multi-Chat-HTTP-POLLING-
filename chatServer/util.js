
const messageService = require('./messageService.js');

function validateFieldsForRegister(data){
    if (data.name !== undefined && data.name !== ""){
        return true;
    }

}

function validateFieldsForSendMessage(data){
    if (data.from !== undefined && data.message !== undefined && data.message !== "" && data.from !== ""){
        return true;
    }
    
}

function validateFieldsForGetMessage(data){
    if (data.index <= messageService.getNextIndex()-1){
        return true;
    }
    
}

module.exports = {
    validateFieldsForRegister,
    validateFieldsForSendMessage,
    validateFieldsForGetMessage

};
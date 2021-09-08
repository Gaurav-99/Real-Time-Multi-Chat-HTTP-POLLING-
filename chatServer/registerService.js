
var idToNameMap = {};
var indx = 0;

function registerClient(data) {
    idToNameMap[indx] = data.name;
    indx = indx + 1;
    console.log(idToNameMap);
    return indx -1;
}

function getUserNameFromId(id){
    return idToNameMap[id];
}

function checkUserPresent(id){
    if(idToNameMap[id] !== undefined)
        return true;
}

module.exports = {
    registerClient,
    getUserNameFromId,
    checkUserPresent
};
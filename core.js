const fs = require('fs');

function CheckUserFile() {
    if(!fs.existsSync(`Users`)) fs.mkdirSync("Users");
}

function CheckUserExists(UserID = 0) {
    UserID = parseInt(UserID);
    if(isNaN(UserID)) return false;
    CheckUserFile();
    if(fs.existsSync(`./Users/${UserID}.json`)) return true;
    return false;
}

function ChangeOrSetValue(UserID = 0, coins = 0) {
    UserID = parseInt(UserID);
    coins = parseInt(coins);
    if(isNaN(UserID) || isNaN(coins)) return false;
    CheckUserFile();
    let json = {userInfo: {coins: coins}};
    fs.writeFileSync(`./Users/${UserID}.json`, `${JSON.stringify(json, null, 2)}`);
    return true;
}

function GetValue(UserID = 0) {
    UserID = parseInt(UserID);
    if(isNaN(UserID)) return NaN;
    CheckUserFile();
    if(CheckUserExists(UserID)) {
        let jsonFile = fs.readFileSync(`./Users/${UserID}.json`);
        let userInfo = JSON.parse(jsonFile);
        return parseInt(userInfo.userInfo.coins);
    }
    return 0;
}

module.exports = {
    CheckUserFile: CheckUserFile,
    CheckUserExists: CheckUserExists,
    ChangeOrSetValue: ChangeOrSetValue,
    GetValue: GetValue
}
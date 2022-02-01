const { CheckUserFile, CheckUserExists, ChangeOrSetValue, GetValue } = require('./core');

function UserExists(UserID = 0) {
    UserID = parseInt(UserID);
    if(isNaN(UserID)) return false;
    if(CheckUserExists(UserID) === true) return true;
    return false;
}

function CreateUser(UserID = 0) {
    UserID = parseInt(UserID);
    if(isNaN(UserID)) return false;
    CheckUserFile();
    if(!CheckUserExists(UserID)) {
        ChangeOrSetValue(UserID, 0);
        return true;
    }
    return false;
}

function RemoveUser(UserID = 0) {
    let fs = require('fs');
    if(CheckUserExists(UserID)) {
        fs.rmSync(`./Users/${UserID}.json`);
        return true;
    }
    return false;
}

function RemoveAllUsers() {
    let fs = require('fs');
    if(fs.existsSync(`Users`)) {
        fs.rmSync("Users", { recursive: true, force: true });
        return true;
    }
    return false;
}

module.exports = {
    UserExits: UserExists,
    CreateUser: CreateUser,
    RemoveUser: RemoveUser,
    RemoveAllUsers: RemoveAllUsers
}
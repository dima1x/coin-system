const { CheckUserFile, CheckUserExists, ChangeOrSetValue, GetValue } = require('./core');

function AddCoins(UserID = 0, count = 0) {
    UserID = parseInt(UserID);
    count = parseInt(count);
    if(isNaN(count) || isNaN(UserID)) return 3;
    CheckUserFile();
    if(count >= 0) {
        let coins = GetValue(UserID);
        ChangeOrSetValue(UserID, coins + count);
        return 0;
    }
    return 2;
}

function RemoveCoins(UserID = 0, count = 0) {
    UserID = parseInt(UserID);
    count = parseInt(count);
    if(isNaN(count) || isNaN(UserID)) return 3;
    CheckUserFile();
    if(count >= 0) {
        let coins = GetValue(UserID);
        if(!CheckUserExists(UserID)) ChangeOrSetValue(UserID, 0);
        if(coins >= count) {
            coins = coins - count;
            ChangeOrSetValue(UserID, coins);
            return 0;
        }
        return 1;
    }
    return 2;
}

function GetCoins(UserID = 0) {
    UserID = parseInt(UserID);
    if(isNaN(UserID)) return NaN;
    CheckUserFile();
    let coins = GetValue(UserID);
    if(!CheckUserExists(UserID)) ChangeOrSetValue(UserID, 0);
    return coins;
}

function SetCoins(UserID = 0, count = 0) {
    UserID = parseInt(UserID);
    count = parseInt(count);
    if(isNaN(count) || isNaN(UserID)) return 3;
    CheckUserFile();
    if(count >= 0) {
        ChangeOrSetValue(UserID, count);
        return 0;
    }
    return 2;
}

module.exports = {
    AddCoins: AddCoins,
    GetCoins: GetCoins,
    RemoveCoins: RemoveCoins,
    SetCoins: SetCoins
}
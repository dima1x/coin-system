class CoinSystem {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
}

const coins = require('./coins');
const users = require('./users');

module.exports = {
    // functions
    coins: {
        add: coins.AddCoins,
        get: coins.GetCoins,
        remove: coins.RemoveCoins,
        set: coins.SetCoins
    },
    users: {
        exists: users.UserExits,
        create: users.CreateUser,
        remove: users.RemoveUser,
        removeAll: users.RemoveAllUsers
    }
}
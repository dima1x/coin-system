## About
Coin System is a node.js module for coin system.
## Installation
**Node.js**
```sh-session
npm i coin-system
```
## Example Usage
```js
// Import Coin System.
const CoinSystem = require('coin-system');

// Add coins to the user.
CoinSystem.coins.add(UserID, count);

// Get user coins.
CoinSystem.coins.get(UserID);

// Remove coins from the user.
CoinSystem.coins.remove(UserID, count);

// Set user coins.
CoinSystem.coins.set(UserID, count);

// Check user exists.
CoinSystem.users.exists(UserID);

// Create user.
CoinSystem.users.create(UserID);

// Remove user.
CoinSystem.users.remove(UserID);

// Remove all users.
CoinSystem.users.removeAll();
```
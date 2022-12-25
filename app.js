const os = require('os');
const name = require('./name');
const user = os.userInfo()  
console.log(user, os.uptime());
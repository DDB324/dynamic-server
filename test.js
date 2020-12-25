const fs = require("fs");

//读数据库
const usersString = fs.readFileSync("./db/users.json").toString();
const usersArray = JSON.parse(usersString);

//写数据库
const user3 = { id: 3, name: "hhg", password: "ccc" };
usersArray.push(user3);
const string = JSON.stringify(usersArray);
fs.writeFileSync("./db/users.json", string);
console.log('执行了添加用户的操作')

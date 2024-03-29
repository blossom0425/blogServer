const sqlite3 = require("sqlite3");
const path = require("path");
const GenId = require("../utils/snowFlake");

var db = new sqlite3.Database(path.join(__dirname,"blog.sqlite"));
const genid = new GenId({WorkerId:1})
// promise封装数据库操作
db.async = {};
db.async.all = (sql,params)=>{
    return new Promise((resolve,reject)=>{
        db.all(sql,params,(err,rows)=>{
            resolve({err,rows});
        })
    })
}
db.async.run = (sql,params)=>{
    return new Promise((resolve,reject)=>{
        db.run(sql,params,(err,rows)=>{
            resolve({err,rows});
        })
    })
}
module.exports = {db,genid}
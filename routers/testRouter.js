const express = require("express");
const router = express.Router();
const {db,genid} = require("../db/DbUtils");
router.get("/test",async (req,res)=>{
    // 原方法
    /*db.all("select * from `admin`",[],(err,rows)=>{
        console.log(rows);//rows是查询到的数据
    })*/
    //异步写法
    /*db.async.all("select * from `admin`",[]).then((res)=>{
        console.log(res);
    })*/
    //同步写法
    let output = await db.async.all("select * from `admin`",[]);
    res.send({id:genid.NextId(),output})
})

module.exports = router;
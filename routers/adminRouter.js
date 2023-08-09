const express = require("express");
const router = express.Router();
const {db,genid} = require("../db/DbUtils");
const {v4:uuidv4} = require("uuid"); // note uuid
router.post("/login",async (req,res)=>{
    let {account,password} = req.body;
    console.log(account,"尝试登录");
    let {err,rows} = await db.async.all("select * from `admin` where `account` = ?",[account]);
    if(rows.length>0&&!err){
        if(rows[0].password!==password){
            res.send({
                code:500,
                message:"密码错误"
            })
            return;
        }
        let login_token = uuidv4();
        let update_token_sql = "update `admin` set `token` = ? where `id` = ?";
        db.async.run(update_token_sql,[login_token,rows[0].id]);
        //登录成功生成并传递token
        res.send({
            code:200,
            message:"登录成功",
            id:rows[0].id,
            account:account,
            token:login_token
        })
    }
    else res.send({
        code:500,
        message:"账号不存在"
    })
})
//修改密码
router.post("/changePwd",async(req,res)=>{
    let {account,password} = req.body;
    let {err,rows} = await db.async.all("select * from `admin` where `account` = ?",[account]);
    if(rows.length>0&&!err){
        // console.log(rows);
        let update_token_sql = "update `admin` set `password` = ? where `id` = ?";
        db.async.run(update_token_sql,[password,rows[0].id]);
        //登录成功生成并传递token
        res.send({
            code:200,
            message:"修改成功",
            id:rows[0].id,
            account:account,
        })
    }
    else res.send({
        code:500,
        message:"账号不存在"
    })
})
//注册用户
router.post("/signup",async(req,res)=>{
    let {account,password} = req.body;
    let {err,rows} = await db.async.all("select * from `admin` where `account` = ?",[account]);
    // console.log(err,rows);
    if(rows.length>0&&!err){
       //账号已经存在
        res.send({
            code:500,
            message:"账号已存在"
        })
    }
    else {
        let id = genid.NextId();
        let insert_sql = "insert into `admin` (id,account,password) values (?,?,?)";
        let insertResult = await db.async.run(insert_sql,[id,account,password]);
        // console.log(insertResult);
        if(!insertResult.err){
            res.send({
                code:200,
                message:"注册成功"
            })
        }
        else res.send({code:500,message:"注册失败"})
    }
})
//发送验证码
router.post("/sendVerify",async(req,res)=>{
    res.send({
        code:200,
        message:"发送成功"
    })
})
//手机号登录
router.post("/phone",async(req,res)=>{
    
})
module.exports = router;
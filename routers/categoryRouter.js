const express = require("express");
const router = express.Router();
const {db,genid} = require("../db/DbUtils");

// 添加接口
router.post("/_token/add",async (req,res)=>{
    //前端传
    let {name} = req.body;
    // console.log(name);
    const insert_sql = "insert into `category` (`id`,`name`) values (?,?)"
    const search_sql = "select * from `category` where `name` = ? "
    let search_result = await db.async.all(search_sql,[name]);
    if(search_result.rows&&search_result.rows.length>0){
        res.send({
            code:500,
            message:"当前分类已存在"
        });
        return;
    }
    //id由后端生成 -- 需要查询一下是否已有 没有才能添加
    let {err,rows} = await db.async.run(insert_sql,[genid.NextId(),name]);
    if(!err){
        res.send({
            code:200,
            message:"添加成功"
        })
    }
    else {
        res.send({
            code:500,
            message:"添加错误"
        })
    }
})
// 修改接口
router.post("/_token/update",async (req,res)=>{
    //前端传id和修改后的name
    let {id,name} = req.body;
    const update_sql = "update `category` set `name` = ? where `id` = ?"
    const search_sql = "select * from `category` where `name` = ? "
    // 修改时也要注意不能修改为重复
    let search_result = await db.async.all(search_sql,[name]);
    if(search_result.rows&&search_result.rows.length>0){
        res.send({
            code:500,
            message:"不能修改为已经存在的分类"
        });
        return;
    }
    let {err,rows} = await db.async.all(update_sql,[name,id]);
    if(!err){
        res.send({
            code:200,
            message:"修改成功"
        });
    }   
    else {
        res.send({
            code:500,
            message:"修改失败"
        });
    }
   
})
// 删除 /category/delete?id=xxx
router.delete("/_token/delete",async (req,res)=>{
    //前端传
    let id = req.query.id;
    const delete_sql = "delete from `category` where `id` = ?";
    //id由后端生成 -- 需要查询一下是否已有 没有才能添加
    let {err,rows} = await db.async.run(delete_sql,[id]);
    // console.log(err,rows);
    if(!err){
        res.send({
            code:200,
            message:"删除成功"
        })
    }
    else {
        res.send({
            code:500,
            message:"删除失败"
        })
    }
})
// 列表
router.get("/_token/list", async (req,res)=>{
    const search_sql = "select * from `category`";
    let {err,rows} = await db.async.all(search_sql,[]);
    if(!err){
        for(let i=0;i<rows.length;i++){
            const select_sum_sql = "select count(*) as sum from `blog` where `category_id` = ?"
            let sumResult = await db.async.all(select_sum_sql,rows[i].id);
            rows[i].sum = sumResult.rows[0].sum
        }
        res.send({
            code:200,
            message:"查询成功",
            rows
        })
    }
    else{
        res.send({
            code:500,
            message:"查询失败"
        })
    }
})
module.exports = router;
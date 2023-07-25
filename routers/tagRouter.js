const express = require("express");
const router = express.Router();
const {db,genid} = require("../db/DbUtils");
const fs = require("fs");
const path = require("path");
//添加tag
router.post("/_token/add",async (req,res)=>{
    //前端传
    let {name} = req.body;
    const insert_sql = "insert into `tag` (`id`,`name`) values (?,?)"
    const search_sql = "select * from `tag` where `name` = ? "
    let search_result = await db.async.all(search_sql,[name]);
    if(search_result.rows&&search_result.rows.length>0){
        res.send({
            code:500,
            message:"当前标签已存在"
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
//修改tag
router.post("/_token/update",async (req,res)=>{
    //前端传id和修改后的name
    let {id,name} = req.body;
    const update_sql = "update `tag` set `name` = ? where `id` = ?"
    const search_sql = "select * from `tag` where `name` = ? "
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
//删除tag
router.delete("/_token/delete",async (req,res)=>{
    let id = req.query.id;
    const delete_sql = "delete from `tag` where `id` = ?";
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
//获得list
router.get("/_token/list", async (req,res)=>{
    const search_sql = "select * from `tag`";
    const search_sum_sql = "select count(*) as sum from `blog` where `tag_ids` like '%'||?||'%'";
    let {err,rows} = await db.async.all(search_sql,[]);
    // console.log(search_sum_sql);
    if(!err){
        for(let i=0;i<rows.length;i++)
        {
            const sumResult = await db.async.all(search_sum_sql,[String(rows[i].id)]);
            rows[i].sum = sumResult.rows[0].sum;
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
//获得文章数量+分类数量+导图数量+标签数量
router.get("/_token/getsum",async(req,res)=>{
    const count_article_sql = "select count(*) as sum from `blog`";
    const count_category_sql = "select count(*) as sum from `category`";
    const count_tag_sql = "select count(*) as sum from `tag`";
    let knowledge_sum = null;
    fs.readdir(path.resolve(__dirname, "../public/xmind"), (err, files) => {
        knowledge_sum = files.length;
    })
    const article_result = await db.async.all(count_article_sql,[]);
    const category_result = await db.async.all(count_category_sql,[]);
    const tag_result = await db.async.all(count_tag_sql,[]);
    if(article_result.err||category_result.err||tag_result.err){
        res.send({
            code:500,
            message:"查询失败"
        })
    }
    else{
        res.send({
            code:200,
            message:"查询成功",
            data:{
                article_sum:article_result.rows[0].sum,
                category_sum:category_result.rows[0].sum,
                tag_sum : tag_result.rows[0].sum,
                knowledge_sum
            }
        })
    }
})

module.exports = router;
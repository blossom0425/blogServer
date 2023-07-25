const express = require("express");
const router = express.Router();
const { db, genid } = require("../db/DbUtils");

// 添加博客
router.post("/_token/add", async (req, res) => {
    let { title, type, content, describe, tags } = req.body;
    //blog的id和create_time由后端生成
    let id = genid.NextId();
    let create_time = new Date().getTime();
    tags = JSON.stringify(tags);
    // 遍历文章内容获得第一个img标签 没有就存null
    let index = content.indexOf("src");
    let firstSpace = content.indexOf(" ", index + 4);
    let imgSrc = content.slice(index + 5, firstSpace - 1);
    const insert_sql = "insert into `blog` (`id`,`title`,`category_id`,`content`,`create_time`,`describe`,`tag_ids`,`img_src`) values (?,?,?,?,?,?,?,?)"
    let params = [id, title, type, content, create_time, describe, tags, imgSrc];
    let { err, rows } = await db.async.run(insert_sql, params);
    if (!err) {
        res.send({
            code: 200,
            message: "创建成功"
        })
    }
    else {
        res.send({
            code: 500,
            message: "创建失败"
        })
    }
})
// 修改博客
router.put("/_token/update", async (req, res) => {
    let { id, title, type, content, describe, tags } = req.body;
    tags = JSON.stringify(tags);
    let index = content.indexOf("src");
    let firstSpace = content.indexOf(" ", index + 4);
    let imgSrc = content.slice(index + 5, firstSpace - 1);
    const update_sql = "update `blog` set `title` = ? , `category_id` = ? , `content` = ?,`describe`=?,`tag_ids`=?,`img_src`=?  where `id` = ?"
    let params = [title, type, content, describe, tags, imgSrc,id];
    // 遍历文章内容获得第一个img标签 没有就存null
    let { err, rows } = await db.async.run(update_sql, params);
    if (!err) {
        res.send({
            code: 200,
            message: "修改成功"
        })
    }
    else {
        res.send({
            code: 500,
            message: "修改失败"
        })
    }
})
// 删除博客
router.delete("/_token/delete", async (req, res) => {
    let id = req.query.id;
    const delete_sql = "delete from `blog` where `id` = ?";
    let { err, rows } = await db.async.run(delete_sql, [id]);
    if (!err) {
        res.send({
            code: 200,
            message: "删除成功"
        })
    }
    else {
        res.send({
            code: 500,
            message: "删除失败"
        })
    }
})
// 查看博客 -- 分页、模糊、分类查询
router.get("/_token/search", async (req, res) => {
    /**
     *  keyword 关键字
     *  categoryId 分类编号
     * 
     *  分页：
     *  page:页码
     *  pageSize:分页大小
     */
    let { keyword, categoryId, page, pageSize } = req.query;
    page = !page ? 1 : page;
    pageSize = !pageSize ? 10 : Number(pageSize);
    categoryId = !categoryId ? 0 : categoryId;
    keyword = !keyword ? "" : keyword;
    let whereSqls = [], params = [];
    if (categoryId !== 0) {
        whereSqls.push("`category_id` = ?");
        params.push(categoryId)
    }
    if (keyword !== "") {
        whereSqls.push("(`title` like ? or `content` like ?)");
        params.push(`%${keyword}%`, `%${keyword}%`)
    }
    let search_sql = "select `id`,`category_id`,`title`,`create_time`,substr(`content`,0,80) as `content` from `blog`";
    let search_sum_sql = "select count(*) as sum from `blog`";
    if (whereSqls.length > 0) {
        search_sql += " where ";
        search_sum_sql += "where";
        search_sql += whereSqls.join(" and ")
        search_sum_sql += whereSqls.join(" and ");
    }
    search_sql += " order by `create_time` desc limit ?,?"
    params.push((page - 1) * pageSize, pageSize)
    //select *,count(*) from `blog` where `category_id` = ? and (`title` like ? or `content` like ?) order by `create_time` desc limit ?,?
    let { err, rows } = await db.async.all(search_sql, params);
    let sumResult = await db.async.all(search_sum_sql, []);
    if (!err) {
        res.send({
            code: 200,
            message: "查找成功",
            data: {
                keyword,
                categoryId,
                page,
                pageSize,
                rows,
                //其实直接看rows长度也行
                sum: sumResult.rows[0].sum
            }
        })
    }
    else {
        res.send({
            code: 500,
            message: "查找失败"
        })
    }
})
// 博客按照月份分组
router.get("/_token/timeline", async (req, res) => {
    //暂时不分页
    const search_sql = "select * from `blog` order by `create_time` desc";
    let { err, rows } = await db.async.all(search_sql, []);
    if (rows.length > 0) {
        for (let row of rows)
            row.create_time = new Date(row.create_time);
        res.send({
            code: 200,
            message: "加载成功",
            blogs: rows
        })
    }
    else {
        res.send({
            code: 500,
            message: "暂无数据"
        })
    }
})
//查询具体博客信息
router.get("/_token/detail", async (req, res) => {
    let { id } = req.query;
    let search_sql = "select * from `blog` where `id` = ?";
    let { err, rows } = await db.async.all(search_sql, [id]);
    if (rows.length > 0) {
        res.send({
            code: 200,
            data: rows[0],
            message: "查询成功"
        })
    }
    else {
        res.send({
            code: 500,
            message: "该内容不存在"
        })
    }
})
//首页获得按分类分组的博文信息，每个分类要按照时间顺序的前四篇
router.get("/_token/homeshow", async (req, res) => {
    const get_category_list = "select * from `category` ";
    const categoryResult = await db.async.all(get_category_list, []);
    const categoryList = categoryResult.rows;
    const search_sql = "select `title`,`create_time`,`describe`,`tag_ids`,`id`,`img_src` from `blog` where `category_id` = ? order by `create_time` desc limit 0,3";
    const resultArr = [];

    for (let i = 0; i < categoryList.length; i++) {
        let tempRes = await db.async.all(search_sql, [categoryList[i].id]);

        if (tempRes.rows?.length > 0) {
            let blogs = tempRes.rows;
            for (let blog of blogs) blog.tag_ids = JSON.parse(blog.tag_ids);
            resultArr.push({
                category: categoryList[i].name,
                category_id: categoryList[i].id,
                blogs
            })
        }
        else resultArr.push({ category: categoryList[i].name, category_id: categoryList[i].id, blogs: [] })
    }
    if (resultArr.length > 0)
        res.send({
            code: 200,
            message: "加载成功",
            data: resultArr
        })
    else res.send({
        code: 500,
        message: "服务器数据为空"
    })

})
//获取当前分类下全部博文
router.get("/_token/getmore", async (req, res) => {
    const category_id = req.query.id;
    const search_sql = "select * from `blog` where `category_id` = ? order by `create_time` desc";
    const select_sum_sql = "select count(*) as sum from `blog` where `category_id` = ?"
    const search_tags_sql = "select * from `tag`";
    let { err, rows } = await db.async.all(search_sql, [category_id]);
    let sumResult = await db.async.all(select_sum_sql, [category_id]);
    let tagResult = await db.async.all(search_tags_sql, []);
    const tagOptions = tagResult.rows;
    for (let blog of rows) {
        let tempTag = blog.tag_ids; //[]
        let timeStamp = new Date(blog.create_time);
        blog.create_time = `${timeStamp.getFullYear()}-${timeStamp.getMonth()}- ${timeStamp.getDate()}`
        blog.tag_ids = [];
        for (let tag of tagOptions) {
            if (tempTag.indexOf(tag.id) > -1)
                blog.tag_ids.push({ name: tag.name, id: tag.id });
        }
    }
    if (rows.length > 0) {
        res.send({
            code: 200,
            message: "获取博文成功",
            data: { rows, sum: sumResult.rows[0].sum }
        })
    }
    else {
        res.send({
            code: 201,
            message: "当前分类无内容",
            data: []
        })
    }
})
//获取当前tag下全部博文
router.get("/_token/getmoretag", async (req, res) => {
    const id = String(req.query.id);
    const search_sql = "select * from `blog` where `tag_ids` like '%'||?||'%' order by `create_time` desc";
    const search_sum_sql = "select count(*) as sum from `blog` where `tag_ids` like '%'||?||'%'";
    const search_tags_sql = "select * from `tag`";
    let { err, rows } = await db.async.all(search_sql, [id]);
    const sumResult = await db.async.all(search_sum_sql, [id])
    let tagResult = await db.async.all(search_tags_sql, []);
    const tagOptions = tagResult.rows;
    for (let blog of rows) {
        let tempTag = blog.tag_ids; //[]
        let timeStamp = new Date(blog.create_time);
        blog.create_time = `${timeStamp.getFullYear()}-${timeStamp.getMonth()}- ${timeStamp.getDay()}`
        blog.tag_ids = [];
        for (let tag of tagOptions) {
            if (tempTag.indexOf(tag.id) > -1)
                blog.tag_ids.push({ name: tag.name, id: tag.id });
        }
    }
    if (rows?.length > 0) {
        res.send({
            code: 200,
            message: "查询成功",
            data: { rows, sum: sumResult.rows[0].sum }
        })
    }
    else {
        res.send({
            code: 500,
            data: { rows: [] },
            message: "当前tag无内容"
        })
    }
})
module.exports = router;
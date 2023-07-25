const express = require("express");
const router = express.Router();
const { db } = require("../db/DbUtils");
const fs = require("fs");
const path = require("path");
//获取xmind文件列表 -- 前端生成目录
router.get("/_token/list", async (req, res) => {
    fs.readdir(path.resolve(__dirname, "../public/xmind"), (err, files) => {
        if (err) {
            res.send({
                code: 500,
                message: "查询失败"
            })
        }
        let list = [];
        files.forEach(item => {
            list.push(item.split(".")[0])
        })
        res.send({
            code: 200,
            data: list,
            message: "获取xmind列表成功"
        })
    })
})
// 获取xmind文件
router.get("/_token/file", async (req, res) => {
    let name = req.query.name;
    // console.log("需要找到",name);
    fs.readdir(path.resolve(__dirname, "../public/xmind"), (err, files) => {
        if (err) {
            res.send({
                code: 500,
                message: "获取文件失败"
            })
        }
        for (let i = 0; i < files.length; i++) {
            // console.log(`碰到的第${i}个name:${files[i]}`);
            if (files[i].split(".")[0] === name) {
                // console.log("找到一个",name);
                res.sendFile(path.resolve(__dirname, `../public/xmind/${name}.xmind`), (err) => {
                    if (err) {
                        res.send({
                            code: 500,
                            message: "获取文件失败"
                        })
                    }
                });
                break;
            }
        }
    })
})


module.exports = router;
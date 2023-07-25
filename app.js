const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const {db} = require("./db/DbUtils");
const port = 8080;
// 服务器id: i-2zehk6tbwclrys0qqzdy
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "content-type,token");
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS")
    if (req.method == 'OPTIONS') res.sendStatus(200); //让options请求快速通过
    else next();
})
app.use(express.json()); //支持前后端的json交互
//静态文件目录
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.resolve(__dirname,"dist")));
const update = multer({
    dest: "./public/upload/temp" //上传的临时目录
})
app.use(update.any());
const ADMIN_TOKEN_PATH = "/_token"; //category/_token/add 凡是带有_token的都要验证
app.all("*", async (req, res, next) => {
    if (req.path.indexOf(ADMIN_TOKEN_PATH) !== -1) {
        let token = req.headers.token;
        let search_token_sql = "select * from `admin` where `token` = ?";
        let adminResult = await db.async.all(search_token_sql, [token]);
        if (adminResult.err || !adminResult.rows || !token ) {
            res.send({
                code: 403, //拒绝操作
                message: "未登录"
            })
            return;
        }
        else next();
    }
    else next();
})
//注册路由
app.use("/test", require("./routers/testRouter"));
app.use("/admin", require("./routers/adminRouter"))
app.use("/category", require("./routers/categoryRouter"));
app.use("/blog", require("./routers/blogRouter"));
app.use("/upload", require("./routers/uploadRouter"));
app.use("/xmind",require("./routers/xmindRouter"));
app.use("/tag",require("./routers/tagRouter"));
app.get("/", (req, res) => {
    res.send("hello world")
})
app.listen(port, () => {
    console.log("The server is running...");
})
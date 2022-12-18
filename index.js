const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const path = require("path");
const resolve = (dir) => {
  return path.join(__dirname, dir);
};

app.use("/static", express.static(resolve("/static")));
const http = require("http");
const httpServer = http.createServer(app);

// 处理pdf接口
const handle = require("./api/handle.js");
app.use(handle);

app.all("*", (req, res, next) => {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Accept,Content-type"
  );
  res.header("Access-Control-Allow-Credentials", true);
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  if (req.method.toLowerCase() == "options")
    res.sendStatus(200); //让options尝试请求快速结束
  else next();
});

httpServer.listen(8080, (req, res) => {
  console.log("http服务器启动了");
});

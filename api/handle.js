const app = require("express").Router();
const download = require("download");
const { getUrlName, mkdirsSync } = require("../common/public");
const HTMLParser = require("fast-html-parser");

const fs = require("fs");
const path = require("path");
const resolve = (dir) => {
  return path.join(__dirname, dir);
};
const { spawn, exec } = require("child_process");

// pdf文件夹根目录
const pdfFolder = "../pdf";

app.post("/pdf", async (req, res) => {
  const { url, page } = req.body;
  const { name, ext } = getUrlName(url);
  // 目标文件夹
  let targetFolder = `${pdfFolder}/${name}`;
  // 判断文件夹是否存在
  let isKeep = mkdirsSync(resolve(targetFolder));
  // 文件夹不存在且创建失败
  if (isKeep !== true) {
    return res.send({
      status: 500,
      tip: "创建目标文件夹失败",
      message: isKeep,
      data: null,
    });
  }
  // 判断目标pdf文件是否存在
  let targetPdf = resolve(`${targetFolder}/${name}.${ext}`);
  let existFile = fs.existsSync(targetPdf);
  if (!existFile) {
    try {
      await download(url, resolve(targetFolder));
    } catch (error) {
      return res.send({
        status: 500,
        tip: "目标pdf下载失败",
        message: error,
        data: null,
      });
    }
  }

  let execs = spawn(
    "pdf2htmlEX",
    [
      "--zoom",
      "1.3",
      "--embed",
      "cfijo",
      // "--split-pages",
      // "1",
      // "-f",
      // page,
      // "-l",
      // 6,
      "--embed-css",
      "0",
      "--dest-dir",
      `pdf/${name}/out`,
      "--page-filename",
      "page-%d.html",
      targetPdf,
    ],
    {}
  );
  execs.stdout.on("data", (data) => {
    console.log(data + "");
  });

  execs.stderr.on("data", (data) => {
    console.error(data + "");
  });

  // 执行pdf命令成功
  execs.on("close", (code) => {
    if (code) {
      console.log("转换失败");
    } else {
      // 读取pdf文件夹下的所有文件
      fs.readdir(`pdf/${name}/out`, (err, files) => {
        if (err) return console.log(err);
        // 判断是否存在存放静态资源的文件夹
        let isKeeps = mkdirsSync(resolve(`../static/pdf/${name}`));
        if (isKeeps !== true) {
          return res.send({
            status: 500,
            tip: "创建目标文件夹失败",
            message: isKeeps,
            data: null,
          });
        }
        // 读取html文件内容
        fs.readFile(`pdf/${name}/out/${name}.html`, "utf8", (error, data) => {
          if (error) {
            return res.send({
              status: 500,
              tip: "读取文件失败",
              message: error,
              data: null,
            });
          }
          let html = data;
          // 遍历pdf文件夹下的所有文件，除.html外转移到静态目录
          for (let i = 0; i < files.length; i++) {
            const filename = files[i];
            // 替换html字符串中的引入文件路径为新静态目录路径
            html = html.replace(
              `src="${filename}"`,
              `src="static/pdf/${name}/${filename}"`
            );
            html = html.replace(
              `href="${filename}"`,
              `href="static/pdf/${name}/${filename}"`
            );
            if (filename !== `${name}.html`) {
              try {
                fs.renameSync(
                  resolve(`../pdf/${name}/out/${filename}`),
                  resolve(`../static/pdf/${name}/${filename}`)
                );
              } catch (error) {
                if (error) {
                  return res.send({
                    status: 500,
                    tip: "转移文件失败",
                    message: error,
                    data: null,
                  });
                }
              }
            }
          }
          // html to parser转换
          const root = HTMLParser.parse(html);
          return res.send({
            status: 200,
            tip: "success",
            message: "success",
            data: root,
          });
        });
      });

      // fs.readFile(`pdf/${name}/out/${name}.html`, "utf8", (error, data) => {
      //   if (error) {
      //     console.log("error");
      //   } else {
      //     console.log(data);
      //     var root = HTMLParser.parse(data);
      //     console.log("转换成功");
      //     return res.send({
      //       status: 200,
      //       tip: "success",
      //       message: "success",
      //       data: root,
      //     });
      //   }
      // });
    }
  });
  // pdf2htmlEX -f 3 -l 5 --fit-width 1024 --bg-format jpg targetPdf
});

module.exports = app;

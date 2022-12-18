const fs = require("fs");
const path = require("path");
/**
 *  获取文件的后缀和名称
 * @param  {String} name 文件.后缀
 */
const getFileName = (name) => {
  return {
    // 文件名
    name: name.substring(0, name.lastIndexOf(".")),
    // 后缀
    ext: name.substring(name.lastIndexOf(".") + 1),
  };
};

/**
 *  获取pdf url中的文件名
 * @param  {String} url pdf文件下载地址
 */
const getUrlName = (url) => {
  try {
    let str = url.split("?")[0];
    let arr = str.split("/");
    let result = arr.slice(-1)[0];
    const { name, ext } = getFileName(result);
    return { name, ext };
  } catch (error) {
    console.log(error);
    return {
      ext: "",
      name: "",
    };
  }
};

/**
 *  判断文件夹路径是否存在,不存在则创建
 * @param {String} dirname 文件夹路径(绝对路径)
 */
const mkdirsSync = (dirname) => {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    try {
      fs.mkdirSync(dirname);
      return true;
    } catch (error) {
      return error;
    }
  }
};

module.exports = { getUrlName, getFileName, mkdirsSync };

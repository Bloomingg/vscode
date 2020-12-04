const multer = require('multer')
const mkdirp = require('mkdirp')
const sd = require('silly-datetime')
const path = require('path')

let tools = {
  multer() {
    const storage = multer.diskStorage({
      //配置上传目录
      destination: async (req, file, cb) => {
        //获取当前日期 并格式化 根据上传日期创建文件夹 对文件管理
        let day = sd.format(new Date(), 'YYYYMMDD')
        //创建目录
        let dir = path.join('static/upload', day)
        await mkdirp(dir)
        cb(null, dir)
      },
      //修改上传后的文件名
      filename: (req, file, cb) => {
        //获取后缀名
        const extname = path.extname(file.originalname)
        //根据时间戳生成文件名
        // cb(null, Date.now() + extname)
        //保留原文件名
        cb(null, file.originalname)
      }
    })

    const upload = multer({
      storage: storage
    })

    return upload
  }
}

module.exports = tools
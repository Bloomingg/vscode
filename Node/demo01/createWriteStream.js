const fs = require('fs')
var str = ''

for (let i = 0; i < 100000; i++) {
  str += "我是从数据库获取的数据，需要保存"
}

const writeStream = fs.createWriteStream('./data/input.txt')

writeStream.write(str)

//标记文件末尾  监听写入完成
writeStream.end()

writeStream.on('finish', () => {
  console.log('写入完成');
})
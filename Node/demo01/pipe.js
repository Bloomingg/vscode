const fs = require('fs')

const writeStream = fs.createWriteStream('./data/data/input.txt')

const readStream = fs.createReadStream('./data/input.txt')

readStream.pipe(writeStream)
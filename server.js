const fs = require('fs')
const path = require('path')
// 同步读取
const rootPath = path.resolve('src')

const readFunction = (filePath) => {
  // 检测文件类型
  fs.stat(filePath, function (err, stats) {
    if (err) {
      return console.error(err)
    }

    if (stats.isDirectory()) {
      // 读取目录
      fs.readdir(filePath, function (err, files) {
        if (err) {
          return console.error(err)
        }

        files.forEach(function (file, key) {
          readFunction(path.resolve(filePath, './' + file), key)
        })
      })
    } else {
      fs.readFile(filePath, function (err, data) {
        if (err) {
          return console.error(err)
        }
        // 修改重新写入文件
        const content = data.toString().replace(/((\s*)a(\s+))/g, '$2repalceA$3')
        fs.writeFile(filePath, content, () => {})
      })
    }
  })
}

readFunction(rootPath)

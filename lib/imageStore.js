const fileStore = require('./imageStoreFile')
const fileStoreS3 = require('./imageStoreS3')

function save (name, base64String) {
  const imageData = base64String.split('data:image/png;base64,')[1]
  return fileStoreS3.save(name, imageData)
}

module.exports = {
  save
}

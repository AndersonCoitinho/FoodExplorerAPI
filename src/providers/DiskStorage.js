const fs = require('fs');
const path = require('path');
const uploadConfig = require('../configs/upload');

class DiskStorage {
  async saveFile(file) {
    await fs.promises.rename( //MUDA ARQUIVO DE PASTA
        path.resolve(uploadConfig.TMP_FOLDER, file),
        path.resolve(uploadConfig.UPLOADS_FOLDER, file)
    );

    return file;
  }

  
}

module.exports = DiskStorage
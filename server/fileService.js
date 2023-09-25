import * as uuid from 'uuid';
import * as path from 'path';

class FileService {
  saveFiles(files) {
    try {
      const fileNames = [];

      // Loop through the files and process them
      for (const key in files) {
        if (Object.hasOwnProperty.call(files, key)) {
          const file = files[key];
          if (file) {
            const fileName = uuid.v4() + path.extname(file.name); // Generate a unique file name with the original file extension
            const filePath = path.resolve('static', fileName);
            file.mv(filePath);
            fileNames.push(fileName);
          }
        }
      }

      return fileNames;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new FileService();

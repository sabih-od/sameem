import * as multer from 'multer';
import * as fs from 'fs';
import * as path from 'path';

export const multerConfig = {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadDir = 'uploads/';
      fs.access(uploadDir, (err) => {
        if (err) {
          fs.mkdir(uploadDir, { recursive: true }, (err) => {
            if (err) {
              console.error('Error creating upload directory:', err);
              cb(err, null);
            } else {
              cb(null, uploadDir);
            }
          });
        } else {
          cb(null, uploadDir);
        }
      });
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
};

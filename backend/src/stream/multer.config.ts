import { Injectable } from '@nestjs/common';
import * as multer from 'multer';
import * as fs from 'fs';
import { diskStorage } from 'multer';

@Injectable()
export class UploadService {
  getUploadConfig(): multer.Options {
    const storage = diskStorage({
      destination: (req, file, cb) => {
        const uploadDir = 'uploads/';
        fs.access(uploadDir, (err) => {
          if (err) {
            fs.mkdir(uploadDir, (err) => {
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
    });

    return { storage };
  }
}

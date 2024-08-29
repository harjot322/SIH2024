import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname.replace(' ', '_'));
    }
});

export const upload = multer({ storage: storage ,limits: { fileSize: 50 * 1024 * 1024 } })// 50 MB file size limit})
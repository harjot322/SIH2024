import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Uploads/');
    },
    filename: (req, file, cb) => {
        const sanitizedDate = new Date().toISOString().replace(/[-:.]/g, '_');
        const sanitizedFilename = file.originalname.replace(/[^a-zA-Z0-9]/g, '_');
        cb(null, sanitizedDate + sanitizedFilename);
    }
});

export const upload = multer({ storage: storage ,limits: { fileSize: 50 * 1024 * 1024 } })// 50 MB file size limit})
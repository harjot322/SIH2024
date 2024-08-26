import { Router } from "express";
import { plantCare } from "../Controller/gemini.controller.js";
import Authentication from "../Middleware/Authentication.middleware.js";
import { upload } from "../Middleware/multer.middleware.js";

const router = Router();


router.post('/' ,Authentication,upload.fields([{
    name :'image',
    maxCount : 1
}]),plantCare);


export default router;
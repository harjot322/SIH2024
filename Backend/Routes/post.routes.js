import { Router } from "express";
import { upload } from "../Middleware/multer.middleware.js";
import { createRequest, getPost, getPosts , deletePost } from "../Controller/post.controller.js";
import Authentication from "../Middleware/Authentication.middleware.js";

const router = Router();

router.get('/',  getPosts);

router.get('/:id',Authentication, getPost);

router.post('/create',Authentication , upload.fields([{
    name : 'image',
    maxCount : 1
}])  , createRequest);

router.delete('/:id', Authentication , deletePost);



export default router;
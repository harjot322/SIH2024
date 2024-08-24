import { Router } from "express";
import { getMessages, sendMessage } from "../Controller/message.controller.js";
import Authentication from "../Middleware/Authentication.middleware.js";

const router = Router();

router.post('/send/:id',Authentication ,sendMessage);

router.get('/:id',Authentication,getMessages);


export default router;
import { Router } from "express";
import { getUsers } from "../Controller/user.controller.js";
import Authentication from "../Middleware/Authentication.middleware.js";

const router = Router();

router.get('/',Authentication ,getUsers);


export default router;
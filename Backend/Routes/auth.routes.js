import { Router } from "express";
import { loginRequest, logoutRequest, registerRequest } from "../Controller/auth.controller.js";

const router = Router();


router.post('/login',loginRequest);

router.post('/register',registerRequest);

router.post('/logout', logoutRequest);


export default router;
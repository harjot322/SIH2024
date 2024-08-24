import { Router } from "express";
import { loginRequest, registerRequest } from "../Controller/auth.controller.js";

const router = Router();


router.post('/login',loginRequest);

router.post('/register',registerRequest);

router.post('/logout', loginRequest);


export default router;
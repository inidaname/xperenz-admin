import { Router } from "express";
import { createAdmin } from "../controllers/admin.js";
import { loginAdmin } from "../controllers/auth.js";

const routers = Router()

routers.post("/auth/create", createAdmin)
routers.post("/auth/login", loginAdmin)

export default routers
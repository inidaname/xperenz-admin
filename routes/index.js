import { Router } from "express";
import { createAdmin } from "../controllers/admin.js";
import { loginAdmin } from "../controllers/auth.js";

const routers = Router()

routers.post("/create", createAdmin)
routers.post("/login", loginAdmin)

export default routers
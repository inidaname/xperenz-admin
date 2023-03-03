import "../types/index.js";
import admin from "../models/admin.js"
import { createToken } from "../utils/auth.js";

export const createAdmin = async (req, res) => {
  try {
    const create = await admin.create({...req.body});
    const token = createToken(create.email)

    return res.json({status: 200, message: "admin created", token, data: create})
  } catch (err) {
    res.json({status: err.status || 400, message: err.message})
  }
}
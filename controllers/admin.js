import "../types/index.js";
import admin from "../models/admin.js"
import { createToken } from "../utils/auth.js";

export const createAdmin = async (req, res) => {
  try {
    console.log(req.body)
    const create = await admin.create({...req.body});
    const token = createToken(create._id)

    return res.json({status: 200, message: "admin created", token})
  } catch (err) {
    console.log(err)
    res.json({status: err.status || 400, message: err.message})
  }
}
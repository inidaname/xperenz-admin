import admin from "../models/admin.js"
import "../types/index.js"
import { createToken } from "../utils/auth.js"

/**
 * This controller logs in the Admin and returns a token
 * @function loginAdmin
 * @param {import("express").Request<{}, {}, UserLogin>} req
 * @param {import("express").Response} res
 * @returns {import("express").Response<DataRet | Error>} A promise of DataRet
 */

export const loginAdmin = async (req, res) => {
  try {

    const {email, password} = req.body

    const adminLogin = await admin.findOne({email}).select("+password")
    const comPass = adminLogin && await adminLogin.comparePassword(password)

    if (!comPass) throw {status: 400, message: "Invalid email or password"};

    const token = createToken(adminLogin.email)

    return res.status(200).json({status: 200, message: "Logged in succesfully", token})
  } catch (err) {
    res.status(err.status || 400).json({status: err.status || 400, message: err.message})
  }
}
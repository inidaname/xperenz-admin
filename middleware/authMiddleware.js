import { verifyToken } from "../utils/auth";

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */

export function authMiddleware (req, res, next) {
  try {
    if (req.headers.authorization) {
      const {token} = req
      const verifiedToken = verifyToken(token)
      if(!verifiedToken) {
        throw {status: 401, message: "Token is invalid", error: true}
      }

      next()
    }
  } catch (error) {
    res.status(error.status || 400).json(error)
  }
}
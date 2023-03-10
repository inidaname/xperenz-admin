import jwt from "jsonwebtoken";
import { env } from "process"
import config from "../config/config";
/**
 * For creating JWT token for authentication
 * @function createToken
 * @param {string} email
 * @returns {string}
 */

export const createToken = (id) => {
  if (!email) {
    throw {status: 400, message: "Please provide email for authentication"}
  }

  const token = jwt.sign({id}, env.TOKENSEC, {
    expiresIn: '7d'
  });

  return token
}

export const verifyToken = (token) => {
  const decoded = jwt.verify(token, config.JWTSign)
  console.log(decoded)
  if (decoded) return true
  return false;
}
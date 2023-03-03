import jwt from "jsonwebtoken";

/**
 * For creating JWT token for authentication
 * @function createToken
 * @param {string} email
 * @returns {string}
 */

export const createToken = (email) => {
  if (!email) {
    throw {status: 400, message: "Please provide email for authentication"}
  }

  const token = jwt.sign({email}, process.env.TOKENSEC, {
    expiresIn: '7d'
  });

  return token
}
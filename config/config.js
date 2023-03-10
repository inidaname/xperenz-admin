/* eslint-disable no-undef */
import dotenv from "dotenv";
dotenv.config()

export const PORT = process.env.PORT;
export const NODE_ENV = process.env.NODE_ENV;
export const DATABASE_URL = process.env.DATABASE_URL;
export const JWTSign = process.env.JWTSign;

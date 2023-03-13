import mongoose from "mongoose";
import { DATABASE_URL } from "../config/config.js";
import logger from "./logger.js";

export default function connection() {

  mongoose.connect(DATABASE_URL)
  mongoose.connection.on("error", function(err) {
    logger.error(err)
  })

  mongoose.connection.on("open", function() {
    logger.info("Mongo Connected")
  })
}
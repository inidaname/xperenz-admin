import mongoose from "mongoose";
import { env } from "process"

function connection() {

  mongoose.connect(env.DATABASE_URL)
  mongoose.connection.on("error", function(err) {
    console.log(err)
  })

  mongoose.connection.on("open", function() {
    console.log("Mongo Connected")
  })
}

export default connection()
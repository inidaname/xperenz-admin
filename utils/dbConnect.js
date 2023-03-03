import mongoose from "mongoose";

function connection() {
  mongoose.connect(process.env.DATABASE_URL)
  mongoose.connection.on("error", function(err) {
    console.log(err)
  })

  mongoose.connection.on("open", function() {
    console.log("Mongo Connected")
  })
}

export default connection()
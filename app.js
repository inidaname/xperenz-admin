import express from "express";
import cors from "cors"
import helmet from "helmet";
import routers from "./routes/index.js";
import morgan from "morgan";
import logger from "./utils/logger.js";
import { PORT } from "./config/config.js";

import http from "http"

import dbConnect from "./utils/dbConnect.js";
import { developmentErrors, notFound, productionErrors } from "./middleware/errorHandlers.js";

const app = express()
dbConnect()
app.use(morgan("combined"))
app.use(cors())
app.use(helmet())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/admin/status", (req, res) => {
  res.status(200).json({
    status: 200,
    message: `You are welcome to Xperenz Admin ${new Date()}`
  })
})

app.use("/admin", routers)

// If that above routes didnt work, we 404 them and forward to error handler
app.use(notFound);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(developmentErrors);
}

// production error handler
app.use(productionErrors);

// app.listen( () => {
//   logger.info(`Admin is running on PORT: ${PORT}`)
// })

let server = http.createServer(app)

server.listen(51741, () => {
  logger.info(`Admin is running on PORT: ${server.address().port}`)
})
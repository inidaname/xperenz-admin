import { createLogger, format, transports } from "winston";
import { NODE_ENV, DATABASE_URL } from "../config/config.js";
import "winston-mongodb";


const { combine, printf } = format;

const winstonFormat = printf(
  ({ level, message, timestamp, stack }) => `${level} - ${timestamp} - ${stack || message}`
)

const { timestamp, align } = format

const logger = createLogger({
  level: NODE_ENV === "development" ? "debug" : "info",
  format: combine(
    timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
    format.colorize(),
    winstonFormat,
    align()
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: "logs/server.log",
    }),
    new transports.MongoDB({
      level: "error",
      db: DATABASE_URL,
      options: {
        useUnifiedTopology: true
      },
      collection: "server_logs",
      format: combine(
        timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
        format.json()
      )
    })
  ],
})

export default logger
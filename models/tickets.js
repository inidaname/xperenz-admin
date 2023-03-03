import { Schema, Types, model } from "mongoose";

export const ticketsSchema = new Schema({
  sweepstake: {
    type: Types.ObjectId,
    ref: "sweepstakes"
  },
  participant: {
    type: Types.ObjectId,
    ref: "user"
  }
}, {
  timestamps: true
})

export default model("tickets", ticketsSchema, "Tickets");
import { Schema, Types, model } from "mongoose";

export const sweepstakeSchema = new Schema({
  creator: {
    type: Types.ObjectId,
    required: [true, "Provide the creator's ID"],
    ref: "admin"
  },
  title: {
    type: String,
    required: [true, "Please provide title"]
  },
  startDate: {
    type: Date,
    default: Date.now()
  },
  description: String,
  endDate: Date,
  status: Boolean,
  ticketsQty: {
    type: Number,
    required: [true, "Provide quantity of sweepstake"]
  },
  participants: [
{
    participantId: Types.ObjectId,
    ref: "users"
  }
],
  winners: [
{
    winnersId: Types.ObjectId,
    ref: "user"
  }
],
  admins: [
{
    type: Types.ObjectId,
    ref: "admin"
  }
]
}, {
  timestamps: true
});

export default model("sweepstakes", sweepstakeSchema, "Sweepstakes")
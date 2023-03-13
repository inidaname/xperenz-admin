import mongoose, {Schema, model} from "mongoose";

export const manageAdminSchema = new Schema({
  role: {
    type: String,
    enum: [
      "admin",
      "moderator"
    ]
  },
  status: {
    type: String,
    enum: [
      "active",
      "inactive",
      "deactivated"
    ]
  },
  admin: {
    type: mongoose.Types.ObjectId,
    ref: "admin",
    require: [true, "Please provide the Admin"]
  },
  sweepstake: {
    type: mongoose.Types.ObjectId,
    ref: "sweepstakes",
    required: [true, "Please provide the sweepstake"]
  }
}, {
  timestamps: true
});

export default model("manageAdmin", manageAdminSchema, "ManageAdmin");
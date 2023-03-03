import mongoose, { Schema, Types } from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config()

export const adminSchema = new Schema({
  fullName: {
    type: String,
    required: [ true, "Please provide a full name" ]
  },
  email: {
    type: String,
    required: [ true, "Please provide email" ],
    unique: true
  },
  password: {
    type: String,
    required: [ true, "Please provide a password" ],
    select: false
  },
  role: {
    type: String,
    enum: [
      "admin",
      "moderator"
    ]
  },
  sweepstakes: [ {
    type: Types.ObjectId,
    ref: "sweepstakes"
  } ]
}, { timestamps: true });

adminSchema.pre("save", function (next) {
  let user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // generate a salt
  bcrypt.genSalt(process.env.SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
})


adminSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model("admin", adminSchema, "Admin");

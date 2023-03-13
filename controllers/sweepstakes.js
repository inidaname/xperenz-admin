import admins from "../models/admin.js";
import sweepstakes from "../models/sweepstakes.js";

/**
 * A controller that create sweepstake
 * @function createSweepstake
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res
 */

export const createSweepstake = async (req, res) => {
  try {
    const body = req.body
    const { adminId } = req.params
    const create = await sweepstakes.create({ ...body, creator: adminId })

    if (!create) {
      throw {error: true, status: 400, message: "Error creating sweepstakes"}
    }

    res.status(201).json({error: false, message: "Sweepstake created succesfully", data: create});
  } catch (error) {
    res.status(error.status || 400).json(error)
  }
}

/**
 * Controller to get all sweepstake created by the admin
 * @function getAllSweepStatkes
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */

export const getAllSweepStatkes = async (req, res) => {
  try {
    const { adminId } = req.params
    const sweepstake = await admins.findById(adminId).select("-*, +sweepstakes").populate("sweepstakes", "-__v");

    if (!sweepstake) {
      throw { status: 400, message: "Error fetching admin's sweepstakes", error: true }
    }

    res.status(200).json({ data: sweepstake.sweepstakes, message: "Sweepstake fetched", error: false })
  } catch (error) {
    res.status(error.status || 400).json(error)
  }
}

/**
 * Controller to get all sweepstake created by the admin
 * @function updateSweepstake
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */

export const updateSweepstake = async (req, res) => {
  try {
    const {sweepstakeId} = req.params
  } catch (error) {
    res.status(error.status || 400).json(error)
  }
}
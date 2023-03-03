import sweepstakes from "../models/sweepstakes"
/**
 * Create sweepstake
 * @controller createSweepstake
 * 
 * @param {title, creator, startDate, description, ...} body
 * @param {adminId} queryParams
 */
export const createSweepstake = async (req, res) => {
  try {
    const body = req.body
    const {adminId} = req.params
    const create = await sweepstakes.create({...body, adminId})
  } catch (error) {
    
  }
}
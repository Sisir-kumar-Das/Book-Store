const Rent = require('../models/Rent');

//rent a vehicle
exports.rentVehicle = async (req, res) => {
  try {
    const rentedVehicle = new Rent(req.body);

    return res.status(200).json(rentedVehicle);
  } catch (err) {
    return res.status(500).json({ err });
  }
};

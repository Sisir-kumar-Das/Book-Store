const router = require('express').Router();
const { isSignedIn } = require('../controllers/auth');
const { rentVehicle } = require('../controllers/rent');
const { getUserById } = require('../controllers/user');

router.param('userId', getUserById);
router.param('vehicleId', getUserById);

// rent a vehicle
router.put('/:userId/:vehicleId', isSignedIn, rentVehicle);

module.exports = router;

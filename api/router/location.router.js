var express = require('express');
var router = express.Router();
var locationController = require('../controllers/location.controllers');

router.get('/', locationController.getLocations);
router.get('/all', locationController.getLocations);
router.post('/create', locationController.createLocation);
router.delete('/all', locationController.deleteLocations);

module.exports = router;
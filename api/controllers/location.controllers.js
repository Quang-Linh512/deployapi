const locationSchema = require('../models/location.model');

const locationController = {
    getLocations: async (req, res) => {
        try {
            const locations = await locationSchema.find();
            res.status(200).json(locations);
        } catch (err) {
            res.status(500).json({ msg: err.message });
        }
    },

    createLocation: async (req, res) => {
        try {
            const location = new locationSchema(req.body);
            const savedLocation = await location.save();
            res.status(200).json(savedLocation);
        } catch (err) {
            res.status(500).json({ msg: err.message });
        }
    },

    deleteLocations: async (req, res) => {
        try {
            const removeLocation = await locationSchema.deleteMany({});
            res.status(200).json(removeLocation);
        } catch (err) {
            res.status(500).json({ msg: err.message });
        }
    }

};

module.exports = locationController;
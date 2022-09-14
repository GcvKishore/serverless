const mongoose = require("mongoose");

const registrationsSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    emailID: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
    },
    dailCode: {
        type: String,
    },
});

module.exports = mongoose.model("Registration", registrationsSchema);
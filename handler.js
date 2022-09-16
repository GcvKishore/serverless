'use strict';
const mongoose = require("mongoose");
const Registration = require("./registration");

module.exports.getData = async (event) => {
  const con = await connectDB();
  const find_data = await Registration.find();
  return {
    statusCode: 200,
    body: JSON.stringify(
     find_data
    ),
  };
};

module.exports.postData = async (event) => {
  const con = await connectDB();
  const save_data = await Registration.save();
  const registration = new Registration({
    firstName: body.firstName,
    lastName: body.lastName,
    emailID: body.emailID,
    phoneNumber: body.phoneNumber,
    dailCode: body.dailCode,
});
  return {
    statusCode: 200,
    body: JSON.stringify(
     save_data
    ),
  };
};

const connectDB = () => {
  const dbUrl = "mongodb+srv://gunti:JPJCF7PhIiWI9jKu.xfw8mws.mongodb.net/?retryWrites=true&w=majority";
  mongoose.connect(dbUrl);
  return mongoose.connection;
}
'use strict';
const mongoose = require("mongoose");
const Registration = require("./registration");

const connectDB = () => {
  const dbUrl = "mongodb+srv://gcvkishore:YQ0c1dwxZmGA70IN@cluster0.a1c4u.mongodb.net/?retryWrites=true&w=majority";
  mongoose.connect(dbUrl).then();
  return mongoose.connection;
}

module.exports.getData = async (event) => {
  
  const con = await connectDB();
  const find_data = await Registration.find();
  return {
    statusCode: 200,
    body: JSON.stringify(
     find_data
    ),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PUT, DELETE ",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
      "X-Requested-With": "*"
  },
  };
};

module.exports.postData = async (event) => {
  const con = await connectDB();
  const body = JSON.parse(event.body);
  
  const registration = new Registration({
    firstName: body.firstName,
    lastName: body.lastName,
    emailID: body.emailID,
    phoneNumber: body.phoneNumber,
    dailCode: body.dailCode,
  });
  const save_data = await registration.save();
  return {
    statusCode: 200,
    body: JSON.stringify(
    save_data
    ),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET, PUT, DELETE ",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Origin": "*",
      "X-Requested-With": "*"
  },
  };
};
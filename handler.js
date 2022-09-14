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

const connectDB = () => {
const dbUrl = "mongodb+srv://gcvkishore:iBjvJ4PFpJMeYzOu@p2q4.xfw8mws.mongodb.net/?retryWrites=true&w=majority";
    mongoose.connect(dbUrl);
    return mongoose.connection;
}
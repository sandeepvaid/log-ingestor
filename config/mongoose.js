//require library
const mongoose = require("mongoose");
const Log = require('../models/logModel');

//Connect to database
mongoose.connect("mongodb://0.0.0.0:27017/logs");

// Create indexes
Log.init().then(() => {
  console.log('Indexes created successfully');
}).catch(err => {
  console.error('Error creating indexes:', err);
});
//acquire connection to check if connection is succeessfull
const db = mongoose.connection;

//If error then we handle it
db.on("error", console.error.bind(console, "error connecting to db"));

//IF connection made is successful then we handle it there

db.once("open", function () {
  console.log("Successfull connection is established");
});

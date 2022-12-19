const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://reysan:reysan@reysancluster.rptxhbd.mongodb.net/Task-Manager?retryWrites=true&w=majority"
    );
    console.log(`connected to mongoDB ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;

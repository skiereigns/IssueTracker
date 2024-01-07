const mongoose = require("mongoose");

// Making Connection with MongoDB
const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://iamvk:clusterissecured@cluster0.ncfskcx.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    
    console.log("Database Connected: ", mongoose.connection.name);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

// Exporting the function
module.exports = connectDb;
import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("connected astablished");
  });

  await mongoose.connect(`${process.env.MONGODB_URL}/spotify`);
};

export default connectDB;

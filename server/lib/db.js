import mongoose from "mongoose";

// Function to connect to the mongodb database
export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("database connected");
    });

    await mongoose.connect(`${process.env.MONGODB_URL}/chat-app`);
  } catch (error) {
    console.log(error);
  }
};

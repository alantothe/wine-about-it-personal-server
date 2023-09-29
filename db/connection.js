import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.set("returnOriginal", false);

const connectString =
  "mongodb+srv://alanmalpartida:fresh123@cluster0.p9oa6fo.mongodb.net/Wine?retryWrites=true&w=majority";

mongoose.connect(connectString).catch((err) => {
  console.error("Error connecting to database", err);
});

mongoose.connection.on("connected", () => {
  console.log("Successfully connected to MongoDB");
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB!");
});

mongoose.connection.on("error", (err) => {
  console.log(`MongoDB connection error: ${err}`);
});

export default mongoose.connection;

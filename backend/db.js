import mongoose from "mongoose";

const uri = `mongodb+srv://mrd:bimbam123@cluster0.kw8wrvn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

export default async function runDB() {
    try {
      await mongoose.connect(uri);
      console.log("Successfully connected to MongoDB!");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }
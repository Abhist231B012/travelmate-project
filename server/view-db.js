import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import User from "./models/User.js";
import Trip from "./models/Trip.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, ".env") });

const viewData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("\n✅ Connected to MongoDB!");

        console.log("\n--- 👤 ALL USERS ---");
        const users = await User.find({});
        console.log(users);

        console.log("\n--- ✈️  ALL TRIPS ---");
        const trips = await Trip.find({});
        console.log(trips);

        console.log("\n--------------------");
        process.exit();
    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
};

viewData();

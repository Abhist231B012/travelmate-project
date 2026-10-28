import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import User from './models/User.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env') });

const uri = process.env.MONGO_URI || "mongodb://localhost:27017/travel-around";

mongoose.connect(uri)
    .then(async () => {
        console.log("Connected to DB");
        const count = await User.countDocuments();
        console.log(`Total Users: ${count}`);
        if (count > 0) {
            const users = await User.find({}, 'email role');
            console.log("Existing users:", users);
        }
        process.exit(0);
    })
    .catch((err) => {
        console.error("Error:", err);
        process.exit(1);
    });

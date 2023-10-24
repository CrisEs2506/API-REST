import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

//Conectar a la base de datos
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB connected");
    } catch (error) {
        console.error(error);
    }
};
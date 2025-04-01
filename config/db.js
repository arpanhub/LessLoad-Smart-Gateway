import mongoose from 'mongoose';
import { config } from 'dotenv';
config();

const url = process.env.MONGO_URL;

let Database; // Keep this for backward compatibility

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(url); 
        console.log('Connected to the Database');

        Database = connection.connection.db; 
        return Database; 
    } catch (err) {
        console.error('Error connecting to the database:', err);
        throw err; 
    }
};

export { connectDB, Database };
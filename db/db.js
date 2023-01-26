import mongoose from "mongoose";

const connectDB = async () => {
    const MONGO_URI='mongodb+srv://TechnicalAbhi:8757419868@url-shortner.gj894z2.mongodb.net/?retryWrites=true&w=majority'
    
    try {
        mongoose.set('strictQuery', true);
        const conn = await mongoose.connect(MONGO_URI);
    
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
    };

export default connectDB;




import mongoose from 'mongoose';

export const connectDB = async () => {
    console.log('MONGO_URI:', process.env.MONGO_URI); // Debug print
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};
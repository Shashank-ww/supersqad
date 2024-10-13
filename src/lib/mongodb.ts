import mongoose from 'mongoose';

let isConnected = false; // Track the connection status

export const connectToDatabase = async () => {
  if (isConnected) {
    console.log('Already connected to the database');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI as string, { });

    isConnected = mongoose.connection.readyState === 1; // 1 indicates connected
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Could not connect to the database');
  }
};

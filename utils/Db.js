import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const connect = await mongoose.connect("mongodb://localhost:27017/nextPrac", {
            dbName: 'nextPrac'
        });

        console.log("db connected", connect.connection.name);
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
    }
};

export default connectDb;

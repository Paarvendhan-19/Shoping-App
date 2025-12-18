const mongoose = require("mongoose")



const connectDB = async () => {
    try {
        const connStr = process.env.MONGO_URI || process.env.Vetrivel;
        await mongoose.connect(connStr);
        console.log("MongoDB connected");
    }
    catch (error) {
        console.error(`Error:${error.message}`);
        process.exit(1);
    }
}
module.exports = connectDB;
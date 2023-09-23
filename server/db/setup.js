require("dotenv").config()
const mongoose = require("mongoose");

const connectionURI = process.env.DB_CONNECTION || 'mongodb://localhost:27017/studyApp-db';
 
// Enable command monitoring for debugging
const connectDB = async () => {
    try {
        await mongoose.connect(connectionURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log(`Connected to ${connectionURI} successfully 🚀`)        
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB

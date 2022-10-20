const mongoose = require("mongoose");
require("dotenv").config({path:"./.env"})
const connectDB = async ()=> {
    try {
        let result = await mongoose.connect(process.env.mongoURI)
        console.log("Database Connected....")
    } catch (error) {
        console.log(`can not connect to database ${error}`)
    }
}

module.exports = connectDB;
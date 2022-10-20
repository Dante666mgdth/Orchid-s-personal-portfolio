const express = require('express');
require("dotenv").config({path:"./config/.env"});
const connectDB = require('./config/connectDB')
const app = express();
connectDB();

app.use(express.json())
app.use("/api/contact",require("./routes/contactRoutes"));
app.use("/api/user",require("./routes/Auth"))


const PORT = process.env.PORT || 6000 ;

app.listen(PORT, (err)=>
err? console.log(err) : console.log(`server is running on port ${PORT}`)
)

const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const userRoute = require("./routes/userRoute")
const hospitalRoute = require("./routes/hospitalRoute")
const appointmentRoute = require("./routes/appoinmentRoute")
const adminRoute = require("./routes/adminRoute")
const insuranceRoute = require("./routes/insuranceRoute")

const app = express()
dotenv.config();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use("/api/user",userRoute);
app.use("/api/hospital",hospitalRoute);
app.use("/api/appointment",appointmentRoute)
app.use("/api/admin",adminRoute)

app.use("/api/insurance",insuranceRoute);


mongoose.connect(process.env.URI).
then(()=>{
    console.log("Mongo DB connected")
}).catch((error)=>{
    console.log(error)
})


app.listen(process.env.PORT,()=>{
    console.log(`Successfully connected and app is running at port ${process.env.PORT}`)
})
const mongoose = require("mongoose");

const insuranceCompanySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    information:{
        type:String,
        required:true
    },
    description:{ 
        type:String,
        required:true
    }
});

module.exports = mongoose.model("InsuranceCompany",insuranceCompanySchema);
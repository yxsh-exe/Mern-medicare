const InsuranceCompany = require("../models/insuranceComapnymodel");

const signup = async (req,res) => {
    const {name,email,address,contact,information,description} = req.body;
    try {
        const exists = await InsuranceCompany.findOne({email:email});
        if(exists){
            return res.status(400).json({msg:"Company already exists"})
        }
        else{
            const createdCompany = await InsuranceCompany.create({
                name,
                email,
                address,
                contact,
                information,
                description
            })
            res.status(200).json(createdCompany);
        }
    } catch (error) {   
        res.status(500).json({msg:"Something went wrong"})
    }
}

module.exports = {
    signup
}
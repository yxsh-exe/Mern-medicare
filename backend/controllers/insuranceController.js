const InsuranceCompany = require("../models/insuranceCompanymodel");

const signup = async (req,res) => {
    const {name,email,address,contact,information,description} = req.body;
    try {
            const createdCompany = await InsuranceCompany.create({
                name,
                email,
                address,
                contact,
                information,
                description
            })
            res.status(200).json(createdCompany);
    } catch (error) {   
        res.status(500).json({msg:error})
    }
}

module.exports = {
    signup
}
const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const getAllUsers = async(req, res) => {
    try {
        const users = await User.find({}, { password:0 });
        console.log(users);
        if (!users || users.length === 0){
            return res.status(404).json({ message: "No Users Found" });
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};
// update user logic

const getUserById = async(req, res) => {
    try {
        const id  = req.params.id;  
     const data = await User.findOne({ _id: id }, {password:0});
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

// user update logic

const updateUserById = async(req, res) =>{
    try {
        const id = req.params.id;
        const updatedUserData = req.body;

        const updatedData= await User.updateOne(
            {_id:id}, 
            {
               $set: updatedUserData, 
        }
    );
    return res.status(200).json(updatedData);
    } catch (error) {
        next(error);
    }
}; 
  
//single user delete 

const deleteUserById = async(req, res) => {
    try {
        const id  = req.params.id;
        await User.deleteOne({ _id: id });
        return res.status(200).json({message:"User Deleted Successfully"});
    } catch (error) {
        next(error);
    }
};

//getAllContacts logic
const getAllContacts = async(req, res) => {
    try {
        const contacts = await Contact.find();
        console.log(contacts);
        if (!contacts || contacts.length === 0){
            return res.status(404).json({ message: "No Contacts Found" });
        }
        return res.status(200).json(contacts);

    } catch (error) {
       next(error); 
    }
};

//Contacts  delete 

const deleteContactById = async(req, res) => {
    try {
        const id  = req.params.id;
        await Contact.deleteOne({ _id: id });
        return res.status(200).json({message:"Contact Deleted Successfully"});
    } catch (error) {
        next(error);
    }
};

module.exports = { getAllUsers,
     getAllContacts,
      deleteUserById,
       getUserById,
       updateUserById,
       deleteContactById,
    };
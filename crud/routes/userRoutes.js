const express = require('express');
const router = express.Router();

const user = require('../models/User');

router.post("/add" , async (req , res) => {
    const { name , email } = req.body;
    const newUser = new user({
        name,
        email
    });

    await newUser.save();
    res.json({ message: "User added successfully!" });
})

router.get("/users" , async (req , res) => {
    const users = await user.find();
    res.json(users);
})

router.put("/update/:id" , async (req , res) => {
    const { id } = req.params;
    const { name , email } = req.body;
    await user.findByIdAndUpdate(id , { name , email });
    res.json({ message: "User updated successfully!" });
})

router.delete("/delete/:id" , async (req , res) => {
    const { id } = req.params;
    await user.findByIdAndDelete(id);
    res.json({ message: "User deleted successfully!" });
})

module.exports = router;
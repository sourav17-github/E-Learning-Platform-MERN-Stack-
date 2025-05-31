// In your routes file (e.g., userRoutes.js)

const express = require("express");
const router = express.Router();
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");

// PUT route to update user data
router.put("/admin/users/update/:id", authMiddleware, async (req, res) => {
  const { id } = req.params;
  const { username, email, phone } = req.body;

  try {
    // Find the user by id and update their details
    const updatedUser = await User.findByIdAndUpdate(id, { username, email, phone }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Respond with the updated user details
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;

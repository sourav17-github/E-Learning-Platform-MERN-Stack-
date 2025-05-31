const express = require("express");
const adminController = require('../controllers/admin-controller');
const router = express.Router();
const authMiddleware = require("../middlewares/auth-Middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

router.route('/users')
.get(authMiddleware, adminMiddleware, adminController.getAllUsers);

router.route('/users/:id')
.get(authMiddleware, adminMiddleware, adminController.getUserById);

router.route('/users/update/:id')
.patch(authMiddleware, adminMiddleware, adminController.updateUserById);

router.route('/update/:id')
.patch(authMiddleware, adminMiddleware, adminController.updateUserById);

router.route("/users/delete/:id")
.delete(authMiddleware, adminMiddleware, adminController.deleteUserById);

router.route('/contacts')
.get(authMiddleware, adminController.getAllContacts);

router.route("/contacts/delete/:id")
.delete(authMiddleware, adminMiddleware, adminController.deleteContactById);


module.exports = router;

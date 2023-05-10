import express from "express";

import * as userController from "../controllers/userController";
import * as authController from "../controllers/authController";

// import userController from '../controllers/userController';

const router = express.Router();

router.route("/login").post(authController.logInUser);

router
	.route("/")
	.get(authController.authUser, userController.getAllUsers)
	.post(userController.createUser);
router
	.route("/:id")
	.get(userController.getUser)
	.patch(authController.authUser, userController.updateUser)
	.delete(authController.authUser, userController.deleteUser);

export default router;

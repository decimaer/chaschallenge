import express from "express";

import * as taskController from "../controllers/taskController";
import * as authController from "../controllers/authController";

const router = express.Router();

router
	.route("/")
	.post(
		authController.authUser,
		authController.setPrivilege("self"),
		taskController.createTask
	);

router
	.route("/:id")
	.get()
	.delete(
		authController.authUser,
		authController.setPrivilege("self"),
		taskController.deleteTask
	);

router.route("/top-three").get();

export default router;

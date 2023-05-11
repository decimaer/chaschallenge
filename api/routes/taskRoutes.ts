import express from "express";

import * as taskController from "../controllers/taskController";
import * as authController from "../controllers/authController";

const router = express.Router();

router.route("/");

router
	.route("/:id")
	// id should be id of task and not user, however, this breaks setPrivilege
	.post(
		authController.authUser,
		authController.setPrivilege("self"),
		taskController.createTask
	)
	.get()
	.delete();

router.route("/top-three").get();

export default router;

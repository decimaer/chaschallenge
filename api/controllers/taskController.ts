import { Task } from "../models/taskModel";
import { middlewareType } from "../types/expressTypes";

export const createTask: middlewareType = async (req, res, next) => {
	try {
		const newTask = Task.create({
			user: req.params.id,
			type: req.body.type,
		});

		res.status(201).json({
			status: "success",
			data: newTask,
		});
	} catch (error) {
		res.status(400).json({
			status: "fail",
			message: error,
		});
	}
};

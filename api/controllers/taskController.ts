import { Task } from "../models/taskModel";
import { middlewareType } from "../types/expressTypes";

export const createTask: middlewareType = async (req, res) => {
	try {
		const newTask = await Task.create({
			user: req.body.userId,
			type: req.body.type,
		});

		console.log(newTask);

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

export const deleteTask: middlewareType = async (req, res) => {
	try {
		await Task.findByIdAndDelete(req.params.id);

		res.status(204).json({
			status: "success",
			data: null,
		});
	} catch (error) {
		res.status(400).json({
			status: "fail",
			message: error,
		});
	}
};

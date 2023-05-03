import { middlewareType } from "../types/expressTypes";
import { User } from "../models/userModel";
import jwt from "jsonwebtoken";

const signToken = (id: string) => {
	const token = jwt;
};

export const logInUser: middlewareType = async (req, res, next) => {
	try {
		if (!req.body.email || !req.body.password)
			throw new Error("Wrong email or password!");

		const user = await User.findOne({ email: req.body.email }).select(
			"+password"
		);

		if (
			!user ||
			!(await user!.comparePasswords(req.body.password, user!.password))
		) {
			throw new Error("Wrong email or password!");
		}

		const token = "Bearer token placeholder";

		res.status(201).json({
			status: "success",
			token,
		});
	} catch (error: any) {
		console.log(error);
		res.status(400).json({
			status: "fail",
			message: error.message,
		});
	}
};

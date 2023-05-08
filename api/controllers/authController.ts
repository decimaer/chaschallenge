import { middlewareType } from "../types/expressTypes";
import { User } from "../models/userModel";
import jwt from "jsonwebtoken";

const signToken = (id: string) => {
	return jwt.sign({ id }, `${process.env.JWT_SECRET_KEY}`, {
		expiresIn: process.env.JWT_EXPIRES_IN,
	});
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

		console.log(typeof user._id.toString());

		const token = signToken(user._id.toString());

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

export const authUser: middlewareType = async (req, res, next) => {
	console.log(req.headers.authorization);
	next();
};

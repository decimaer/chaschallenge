import { middlewareType } from "../types/expressTypes";
import User from "../models/userModel";
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
		res.status(401).json({
			status: "fail",
			message: error.message,
		});
	}
};

export const authUser: middlewareType = async (req, res, next) => {
	try {
		console.log(req.headers.authorization);
		const token = req.headers.authorization?.split(" ")[1];

		if (!token) throw new Error("You have not logged in!");

		/* 		interface JwtPayloadASDF extends jwt.JwtPayload {
			id: string;
		} */

		const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET_KEY!); // FIXME type for decodedToken

		const user = await User.findById(decodedToken.id);

		if (!user) throw new Error("This user is not valid.");

		// TODO add check if user has changed password

		// put token and user on req to pass on to setPrivilege
		req.decodedToken = decodedToken;
		req.user = user;
		console.log(req.decodedToken);

		next();
	} catch (error: any) {
		console.log(error);
		res.status(401).json({
			status: "fail",
			message: error.message,
		});
	}
};

export const setPrivilege = (level: "self" | "admin"): middlewareType => {
	return (req, res, next) => {
		try {
			const error = new Error(
				"You do not have permission to perform this action."
			);

			// Only accept level 'self' if requested id corresponds to verified id of user token or user is admin
			if (
				level === "self" &&
				req.params.id !== req.decodedToken?.id &&
				req.user?.role !== "admin"
			) {
				throw error;
			}

			// Only accept level 'admin' if the verified user is admin
			if (level === "admin" && req.user?.role !== "admin") {
				throw error;
			}

			next();
		} catch (error: any) {
			res.status(403).json({
				status: "fail",
				message: error.message,
			});
		}
	};
};

import { middlewareType } from "../types/expressTypes";
import User  from "../models/userModel";
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

		interface JwtPayloadASDF extends jwt.JwtPayload {
			id: string;
		}

		const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET_KEY!); // FIXME type for decodedToken not working

		const user = await User.findById(decodedToken.id);

		if (!user) throw new Error("This user is not valid.");

		// TODO add check if user has changed password

		next();
	} catch (error: any) {
		console.log(error);
		res.status(401).json({
			status: "fail",
			message: error.message,
		});
	}
};

export const setPrivilege = (role: "user" | "admin") => {
	return (req, res, next) => {
		try {
			if (!role)
				throw new Error(
					"You do not have permission to perform this action."
				);

			if (role === "user") {
			}

			if (role === "admin") {
			}
		} catch (error: any) {
			res.status(403).json({
				status: "fail",
				message: error.message,
			});
		}
		next();
	};
};

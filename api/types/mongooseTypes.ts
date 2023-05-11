import { Document } from "mongoose";

export interface UserDocument extends Document {
	// _id: ObjectId | string;
	name: string;
	email: string;
	password: string;
	passwordConfirm: string | undefined;
	agreeTerms: boolean;
	role: string;
	comparePasswords: (
		currentPassword: string,
		originalPassword: string
	) => boolean;
	// post: () => void;
}

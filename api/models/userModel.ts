import mongoose, { ObjectId, Query } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

interface UserDocument extends Document {
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

const userSchema = new mongoose.Schema<UserDocument>(
	{
		name: {
			type: String,
			required: [true, "Name is required."],
		},
		email: {
			type: String,
			required: [true, "Email is required."],
			validate: [validator.isEmail, "Please provide a valid email!"],
		},
		password: {
			type: String,
			required: [true, "Password is required."],
			select: false, //Does not read it when getting the data from the DB
		},
		passwordConfirm: {
			type: {}, //set 'any' type FIXME!
			required: [true, "PasswordConfirm is required."],
			/* validate: {
			validator: function (pass: string): boolean {
				return pass === this.password;
			},
		}, */
		},
		agreeTerms: {
			type: Boolean,
			required: [
				true,
				"Please agree to the terms and conditions to use this service!",
			],
		},
		role: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

//Before "save", hash the password with bcrypt
userSchema.pre("save", async function (next) {
	//TODO: add only run if password has been modified

	this.password = await bcrypt.hash(this.password, 12);

	//After the password it compared and verified, remove the plaintext "confirm password"
	this.passwordConfirm = undefined;
	next();
});

// Funkar ej pga typ  :((((((
/* userSchema.post("find", function (next) {
	this._id = this._id.toString();
	next();
}); */

userSchema.methods.comparePasswords = async function (
	currentPassword: string,
	originalPassword: string
) {
	return await bcrypt.compare(currentPassword, originalPassword);
};

// type User = mongoose.InferSchemaType<typeof userSchema>;

export const User = mongoose.model(/* <UserInterface> */ "User", userSchema);

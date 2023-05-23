import mongoose, { Document } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

interface UserDocument extends Document {
	name: string;
	email: string;
	password: string;
	passwordConfirm?: string;
	agreeTerms: boolean;
	role: string;
	comparePasswords: (candidatePassword: string) => Promise<boolean>;
}

const userSchema = new mongoose.Schema<UserDocument>({
	name: {
		type: String,
		required: [true, "Name is required."],
		unique: true,
	},
	email: {
		type: String,
		required: [true, "Email is required."],
		lowercase: true,
		unique: true,
		validate: [validator.isEmail, "Please provide a valid email!"],
	},
	password: {
		type: String,
		required: [true, "Password is required."],
		minlength: [8, "Password must be at least 8 characters long"],
		match: [
			/^(?=.*[!@#$%^&*])/,
			"Password must contain at least one special character (!@#$%^&*)",
		],
		select: false,
	},
	passwordConfirm: {
		type: String,
		required: [true, "Please confirm your password."],
		validate: {
			validator: function(this: UserDocument, el: string): boolean {
				// only works on CREATE and SAVE
				return el === this.password;
			},
			message: 'Passwords are not the same!'
		}
	},
	agreeTerms: {
		type: Boolean,
		required: [true, "Please agree to the terms and conditions to use this service!"],
		validate: [(v: boolean) => v, "You must agree to the terms and conditions!"],
	},
	role: {
		type: String,
		enum: ["admin", "user"],
		default: "user",
	},
}, {
	timestamps: true,
});

userSchema.pre('save', async function(next) {
	if (!this.isModified('password')) return next();

	this.password = await bcrypt.hash(this.password, 12);
	this.passwordConfirm = undefined;
	next();
});

userSchema.methods.comparePasswords = async function(candidatePassword: string) {
	return await bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model<UserDocument>("User", userSchema);

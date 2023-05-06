import mongoose, { Document } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

interface UserInterface extends Document {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  agreeTerms: boolean;
  role: string;
  select: string;
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      validate: [validator.isEmail, "Please provide a valid email!"],
    },
    password: {
      type: String,
      required: [true, "Password is required."],
      minlength: [8, "Password must be at least 8 characters long"],
      match: [/^(?=.*[!@#$%^&*])/, "Password must contain at least one special character (!@#$%^&*)"],
      select: false, // Does not read it when getting the data from the DB
    },
    passwordConfirm: {
      type: String,
      required: [true, "PasswordConfirm is required."],
      validate: {
        validator: function (this: UserInterface, pass: string): boolean {
          return pass === this.password;
        },
        message: "Passwords do not match.",
      },
      select: false,
    },
    agreeTerms: {
      type: Boolean,
      required: [true, "Please agree to the terms and conditions to use this service!"],
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
  },
  {
    timestamps: true,
  }
);

// Before "save", hash the password with bcrypt
userSchema.pre("save", async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  // Hash the password
  this.password = await bcrypt.hash(this.password, 12);

  // Remove the plaintext "confirm password"
  this.passwordConfirm = '';
  next();
});

const User = mongoose.model<UserInterface>("User", userSchema);

const createUser = async () => {
  const newUser = await User.create({
    name: "James Bond",
    email: "James Bond@007.com",
    password: "password",
    passwordConfirm: "password",
    agreeTerms: true,
    role: "user",
  });
}

createUser();

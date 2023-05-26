import mongoose, { ObjectId, Query } from 'mongoose';
import { UserDocument } from '../types/mongooseTypes';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema<UserDocument>(
   {
      name: {
         type: String,
         required: [true, 'Name is required.'],
         unique: true,
      },
      email: {
         type: String,
         required: [true, 'Email is required.'],
         lowercase: true,
         unique: true,
         validate: [validator.isEmail, 'Please provide a valid email!'],
      },
      password: {
         type: String,
         required: [true, 'Password is required.'],
         minlength: [8, 'Password must be at least 8 characters long'],
         match: [
            /^(?=.*[!@#$%^&*])/,
            'Password must contain at least one special character (!@#$%^&*)',
         ],
         select: false, //Does not read it when getting the data from the DB
      },
      passwordConfirm: {
         type: {}, //set 'any' type FIXME!
         required: [true, 'PasswordConfirm is required.'],

         validate: {
            validator: function (this: UserDocument, pass: string): boolean {
               return pass === this.password;
            },
         },
      },
      agreeTerms: {
         type: Boolean,
         required: [
            true,
            'Please agree to the terms and conditions to use this service!',
         ],
         validate: {
            validator: function (v: boolean): boolean {
               return v === true;
            },
            message: 'You must agree to the terms and conditions!',
         },
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

//Before "save", hash the password with bcrypt
userSchema.pre('save', async function (next) {
   //TODO: add only run if password has been modified
   if (!this.isModified('password')) {
      return next();
   }

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

const User = mongoose.model('User', userSchema);
export default User;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        lowercase: true,
        unique: true,
        validate: [validator_1.default.isEmail, "Please provide a valid email!"],
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minlength: [8, "Password must be at least 8 characters long"],
        match: [/^(?=.*[!@#$%^&*])/,
            "Password must contain at least one special character (!@#$%^&*)"],
        select: false, //Does not read it when getting the data from the DB
    },
    passwordConfirm: {
        type: {},
        required: [true, "PasswordConfirm is required."],
        validate: {
            validator: function (pass) {
                return pass === this.password;
            },
        },
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
        enum: ['admin', 'user'],
        default: 'user',
    },
}, {
    timestamps: true,
});
//Before "save", hash the password with bcrypt
userSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        //TODO: add only run if password has been modified
        if (!this.isModified('password')) {
            return next();
        }
        this.password = yield bcryptjs_1.default.hash(this.password, 12);
        //After the password it compared and verified, remove the plaintext "confirm password"
        this.passwordConfirm = undefined;
        next();
    });
});
// Funkar ej pga typ  :((((((
/* userSchema.post("find", function (next) {
    this._id = this._id.toString();
    next();
}); */
userSchema.methods.comparePasswords = function (currentPassword, originalPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcryptjs_1.default.compare(currentPassword, originalPassword);
    });
};
// type User = mongoose.InferSchemaType<typeof userSchema>;
const User = mongoose_1.default.model('User', userSchema);
exports.default = User;

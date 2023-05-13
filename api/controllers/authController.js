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
exports.authUser = exports.logInUser = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, `${process.env.JWT_SECRET_KEY}`, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};
const logInUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body.email || !req.body.password)
            throw new Error("Wrong email or password!");
        const user = yield userModel_1.default.findOne({ email: req.body.email }).select("+password");
        if (!user ||
            !(yield user.comparePasswords(req.body.password, user.password))) {
            throw new Error("Wrong email or password!");
        }
        console.log(typeof user._id.toString());
        const token = signToken(user._id.toString());
        res.status(201).json({
            status: "success",
            token,
        });
    }
    catch (error) {
        console.log(error);
        res.status(401).json({
            status: "fail",
            message: error.message,
        });
    }
});
exports.logInUser = logInUser;
const authUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        console.log(req.headers.authorization);
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (!token)
            throw new Error("You have not logged in!");
        const decodedToken = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_KEY); // FIXME type for decodedToken not working
        const user = yield userModel_1.default.findById(decodedToken.id);
        if (!user)
            throw new Error("This user is not valid.");
        // TODO add check if user has changed password
        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({
            status: "fail",
            message: error.message,
        });
    }
});
exports.authUser = authUser;

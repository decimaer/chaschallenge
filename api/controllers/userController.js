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
exports.deleteUser = exports.updateUser = exports.getUser = exports.getAllUsers = exports.createUser = void 0;
// Importing necessary dependencies
const userModel_1 = __importDefault(require("../models/userModel"));
// Create a new user
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Use the User model to create a new user from the request body
        const newUser = yield userModel_1.default.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
            agreeTerms: true,
        });
        console.log(newUser); // Log the new user to the console for debugging purposes
        // Respond with a 201 status and the new user's data
        res.status(201).json({
            status: "success",
            data: newUser,
        });
    }
    catch (error) {
        res.status(400).json({
            status: "fail",
            message: error,
        });
    }
});
exports.createUser = createUser;
// Get all users
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Use the User model to find all users in the database
        const users = yield userModel_1.default.find({});
        console.log(users); // Log the users to the console for debugging purposes
        // Respond with a 200 status, the number of users found, and the array of users
        res.status(200).json({
            status: "success",
            length: users.length,
            data: users,
        });
    }
    catch (error) {
        res.status(500).json({
            status: "fail",
            message: error,
        });
    }
});
exports.getAllUsers = getAllUsers;
// Get a specific user by ID
const getUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Use the User model to find a user by their ID
        const user = yield userModel_1.default.findById(req.params.id);
        console.log(user); // Log the user to the console for debugging purposes
        // Respond with a 200 status and the user's data
        res.status(200).json({
            status: "success",
            data: user,
        });
    }
    catch (error) {
        res.status(404).json({
            status: "fail",
            message: error,
        });
    }
});
exports.getUser = getUser;
// Update a specific user by ID
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Use the User model to find and update a user by their ID
        const updatedUser = yield userModel_1.default.findByIdAndUpdate(req.params.id, // The ID of the user to update
        {
            // The fields to update
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
        }, {
            // Options for the update
            runValidators: true,
            new: true, // Return the updated user object
        });
        // Respond with a 200 status and the updated user's data
        res.status(200).json({
            status: "success",
            data: updatedUser,
        });
    }
    catch (error) {
        // If there's an error updating the user, respond with a 500 status and an error message
        res.status(500).json({
            status: "fail",
            message: error,
        });
    }
});
exports.updateUser = updateUser;
// Delete a specific user by ID
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Use the User model to find and delete a user by their ID
        yield userModel_1.default.findByIdAndDelete(req.params.id);
        // Respond with a 204 status (no content) to indicate successful deletion
        res.status(204).json({
            status: "success",
            data: null,
        });
    }
    catch (error) {
        res.status(404).json({
            status: "fail",
            message: error,
        });
    }
});
exports.deleteUser = deleteUser;

// Importing necessary dependencies
import User from '../models/userModel';
import { middlewareType } from '../types/expressTypes';

import * as authController from './authController';

// Create a new user
export const createUser: middlewareType = async (req, res) => {
   try {
      // Use the User model to create a new user from the request body
      const newUser = await User.create({
         name: req.body.name,
         email: req.body.email,
         password: req.body.password,
         passwordConfirm: req.body.passwordConfirm,
         agreeTerms: true,
      });

      console.log(newUser); // Log the new user to the console for debugging purposes

      // Respond with a 201 status and the new user's data
      res.status(201).json(
         await authController.loggedInUserResponse(newUser._id.toString())
      );
   } catch (error) {
      res.status(400).json({
         status: 'fail',
         message: error,
      });
   }
};

// Get all users
export const getAllUsers: middlewareType = async (req, res) => {
   try {
      // Use the User model to find all users in the database
      const users = await User.find({});

      console.log(users); // Log the users to the console for debugging purposes

      // Respond with a 200 status, the number of users found, and the array of users
      res.status(200).json({
         status: 'success',
         length: users.length,
         data: users,
      });
   } catch (error) {
      res.status(500).json({
         status: 'fail',
         message: error,
      });
   }
};

// Get a specific user by ID
export const getUser: middlewareType = async (req, res) => {
   try {
      // Use the User model to find a user by their ID
      const user = await User.findById(req.params.id);

      console.log(user); // Log the user to the console for debugging purposes

      // Respond with a 200 status and the user's data
      res.status(200).json({
         status: 'success',
         data: user,
      });
   } catch (error) {
      res.status(404).json({
         status: 'fail',
         message: error,
      });
   }
};

// Update a specific user by ID
export const updateUser: middlewareType = async (req, res) => {
   try {
      // Use the User model to find and update a user by their ID
      const updatedUser = await User.findByIdAndUpdate(
         req.params.id, // The ID of the user to update
         {
            // The fields to update
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm,
         },
         {
            // Options for the update
            runValidators: true, // Run validation on the updated fields
            new: true, // Return the updated user object
         }
      );
      // Respond with a 200 status and the updated user's data
      res.status(200).json({
         status: 'success',
         data: updatedUser,
      });
   } catch (error) {
      // If there's an error updating the user, respond with a 500 status and an error message
      res.status(500).json({
         status: 'fail',
         message: error,
      });
   }
};

// Delete a specific user by ID
export const deleteUser: middlewareType = async (req, res) => {
   try {
      // Use the User model to find and delete a user by their ID
      await User.findByIdAndDelete(req.params.id);
      // Respond with a 204 status (no content) to indicate successful deletion
      res.status(204).json({
         status: 'success',
         data: null,
      });
   } catch (error) {
      res.status(404).json({
         status: 'fail',
         message: error,
      });
   }
};

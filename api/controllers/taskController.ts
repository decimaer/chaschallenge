import { Task } from '../models/taskModel';
import { middlewareType } from '../types/expressTypes';
import { StatsAggregate } from '../types/mongooseTypes';
import mongoose from 'mongoose';

export const statsByUser = async (id: string) => {
   const stats: StatsAggregate = await Task.aggregate([
      {
         $match: {
            user: new mongoose.Types.ObjectId(id),
         },
      },
      {
         $group: {
            _id: '$type',
            count: { $sum: 1 },
            totalPoints: { $sum: '$points' },
         },
      },
      {
         $group: {
            _id: null,
            numPanta: {
               $sum: {
                  $cond: [{ $eq: ['$_id', 'panta'] }, '$count', 0],
               },
            },
            numRecycle: {
               $sum: {
                  $cond: [{ $eq: ['$_id', 'recycle'] }, '$count', 0],
               },
            },
            numGarbage: {
               $sum: {
                  $cond: [{ $eq: ['$_id', 'garbage'] }, '$count', 0],
               },
            },
            numSecondhand: {
               $sum: {
                  $cond: [{ $eq: ['$_id', 'secondhand'] }, '$count', 0],
               },
            },
            totalPoints: { $sum: '$totalPoints' },
         },
      },
      {
         $project: {
            _id: 0,
            numPanta: 1,
            numRecycle: 1,
            numGarbage: 1,
            numSecondhand: 1,
            totalPoints: '$totalPoints',
         },
      },
   ]);

   // return now if no tasks were found
   if (stats.length === 0) return stats;

   // a new level is reached every 1000 points
   stats[0].level = Math.floor(stats[0].totalPoints / 1000) + 1;

   return stats;
};

export const createTask: middlewareType = async (req, res) => {
   try {
      //Get todays date
      const timestamp = new Date()

      //Add one day
      timestamp.setDate(timestamp.getDate() + 1);

      //Convert to milliseconds
      const msTimestamp = Math.floor((new Date(timestamp).getTime()) / 1000)

      console.log("Normal date: " + timestamp);
      console.log("Seconds to that date: " + msTimestamp);
      

      const newTask = await Task.create({
         user: req.body.userId,
         type: req.body.type,
         timeout: msTimestamp
      });

      console.log(newTask);

      res.status(201).json({
         status: 'success',
         data: newTask,
      });
   } catch (error) {
      res.status(400).json({
         status: 'fail',
         message: error,
      });
   }
};

export const getStatsByUser: middlewareType = async (req, res) => {
   try {
      const stats = await statsByUser(req.params.id);

      res.status(200).json({
         status: 'success',
         data: stats,
      });
   } catch (error) {
      res.status(404).json({
         status: 'fail',
         message: error,
      });
   }
};

export const deleteTask: middlewareType = async (req, res) => {
   try {
      await Task.findByIdAndDelete(req.params.id);

      res.status(204).json({
         status: 'success',
         data: null,
      });
   } catch (error) {
      res.status(400).json({
         status: 'fail',
         message: error,
      });
   }
};

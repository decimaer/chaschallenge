import mongoose from 'mongoose';
import { TaskDocument } from '../types/mongooseTypes';

const taskSchema = new mongoose.Schema<TaskDocument>(
   {
      user: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
         required: [true, 'Please provide a valid user ID.'],
      },

      type: {
         type: String,
         enum: ['panta', 'recycle', 'garbage', 'secondhand'],
         required: [true, 'Please provide a correct type.'],
      },
      points: {
         type: Number,
      },
   },
   {
      timestamps: true,
   }
);

taskSchema.pre('save', function () {
   // should be moved to seperate settings file?
   const points = {
      panta: 50,
      recycle: 100,
      garbage: 200,
      secondhand: 150,
   };

   this.points = points[this.type];
});

export const Task = mongoose.model('Task', taskSchema);

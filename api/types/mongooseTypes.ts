import mongoose, { Document } from 'mongoose';

export interface UserDocument extends Document {
   // _id: ObjectId | string;
   name: string;
   email: string;
   password: string;
   passwordConfirm: string | undefined;
   agreeTerms: boolean;
   role: string;
   timeouts: Object;
   comparePasswords: (
      currentPassword: string,
      originalPassword: string
   ) => boolean;
   // post: () => void;
}

export interface TaskDocument extends Document {
   user: mongoose.Schema.Types.ObjectId;
   type: 'panta' | 'recycle' | 'garbage' | 'secondhand';
   points: number;
}

export type StatsAggregate = Array<{ level: number; totalPoints: number }>;

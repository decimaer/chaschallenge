import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/config.env' });

console.log(__dirname);
console.log(process.env.PORT);

// connect to MongoDB
const mongoURL: any = process.env.DATABASE_URL;
mongoose
   .connect(mongoURL, {
      // connect options
   })
   .then((con) => console.log('DB connection successful'));

import app from './app';

const port = process.env.PORT;
const server = app.listen(port, () =>
   console.log(`Server listening on port ${port}.`)
);

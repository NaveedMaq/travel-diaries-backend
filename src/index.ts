import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import { userRouter } from './routing/user-routes';

const app = express();

// MIDDLEWARES
app.use('/users', userRouter);

async function initServer() {
  const { MONGO_DB_URL, PORT } = process.env;

  if (!MONGO_DB_URL) throw new Error('Database connection url missing');
  await mongoose.connect(MONGO_DB_URL);

  console.log('Successfully connected to database');

  app.listen(PORT, () =>
    console.log(`Http Server started successfully on port ${PORT} 😎`)
  );
}

try {
  initServer();
} catch (error) {
  console.error('Could not start the server 💥', error);
}

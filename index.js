import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();

// MIDDLEWARES
app.get('/', (req, res) => res.json({ message: 'Hello world' }));

async function initServer() {
  const { MONGO_DB_URL, PORT } = process.env;

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

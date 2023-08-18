// package imports
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

// file imports
import connectDB from './config/database.js';

// middleware
const app = express();

// route

// listening server
const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
  }
  app.listen(process.env.PORT, () => {
    console.log(
      `${process.env.NODE_ENV} server on http://localhost:${process.env.PORT}`
    );
  });
};

startServer();

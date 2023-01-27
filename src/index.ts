import dotenv from 'dotenv'
import startServer from "./config/app";
import connectDB from './config/db';

dotenv.config()
startServer()
connectDB()
import mongoose from 'mongoose'
import * as dotenv from "dotenv"
dotenv.config();

const URI = process.env.DATABASE_URI;

mongoose.connect(URI)
    .then(db => console.log("Connected to database"))
    .catch(error => console.error(error));

export {mongoose}
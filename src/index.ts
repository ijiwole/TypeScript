import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cokkieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "dotenv";
config();

import router from './router'
const app = express()

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cokkieParser()); 
app.use(bodyParser.json());
app.use('/', router())


const server = http.createServer(app)

server.listen(8080,()=> {
    console.log('Server running on http://localhost:8080');
})

const MONGO_URL = process.env.MONGO_URI;

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL)
mongoose.connection.on('error', (error: Error) => console.log(error));

//dependencies
import bodyParser from "body-parser";
//add "type": "module" in package.json
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

//initialize the app 
const app = express();

//limit:30mp in case of image large size
app.use(bodyParser.json({limit: '30mp', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mp', extended: true}));
app.use(cors());
//cloud atlas version of mangoodb 

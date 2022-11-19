//dependencies
import bodyParser from "body-parser";
//add "type": "module" in package.json
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from 'dotenv'
dotenv.config()

//initialize the app 
const app = express();
const PORT = process.env.PORT || 5000
const CONNECTION_URL = process.env.CONNECTION_URL


//limit:30mp in case of image large size
app.use(bodyParser.json({limit: '30mp', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mp', extended: true}));
app.use(cors());


mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, ()=> console.log(`successful connected on${PORT}`)))
.catch((err) => console.log(err))


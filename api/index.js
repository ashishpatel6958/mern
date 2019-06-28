import Express from "express";
import BodyParser from "body-parser";
import Mongoose from "mongoose";
import sampleRouter from "./sample/router";
import cors from "cors";

// initialization
const api = Express();

// use cors to prevent cors policy using localhost
api.use(cors());

// connect mongodb database
Mongoose.connect("mongodb://localhost:27017/dottest");

// use bodyparsor json
api.use(BodyParser.json());

api.use(BodyParser.urlencoded({ extended: true }));

// api calls related to dishes
api.use("/sample", sampleRouter);

// listen to port 8000
api.listen(8000, () => {
	console.log("Listening at :8000...");
});

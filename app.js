import express, { json, Router } from "express";
import morgan from "morgan";

import tourRouter from "./routes/tourRoutes.js";
import userRouter from "./routes/userRoutes.js";

export const app = express();

// Enable nested query parameters
// Add this when you are facing issue while querying in mongodb
// Advanced filtering section
app.set("query parser", "extended");

// Middleware which is used to modify the request of the data
// Automatically parses incoming HTTP request bodies containing JSON data and
// makes that data available under the req.body property
app.use(json());
app.use(morgan("dev"));
// To serve the static file. But __dirname is not found with es6 modules.
// app.use(express.static(`${__dirname}/public`))

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

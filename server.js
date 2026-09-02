import { configDotenv } from "dotenv";
import { app } from "./app.js";
import mongoose from "mongoose";

// Loading the config.env data
configDotenv({
  path: "./config.env",
});

const DB = process.env.DATABASE_CONNECTION.replace(
  "<db_password>",
  process.env.DATABASE_PASSWORD,
);

// Database Connection
mongoose
  .connect(DB)
  .then(() => {
    console.log("DB Connection is successful !!");
  })
  .catch((err) => console.log(`Error while connecting to Database: ${err}`));

// Application Server Port
const PORT = process.env.PORT || 3000;

// Application Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import fs from "fs";
import { Tour } from "../models/tourModel.js";
import { exit } from "process";

configDotenv({
  path: "../config.env",
});

const DB = process.env.DATABASE_CONNECTION.replace(
  "<db_password>",
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB)
  .then(() => {
    console.log("DB Connection is successful !!");
  })
  .catch((err) => console.log(`Error while connecting to Database: ${err}`));

const data = JSON.parse(fs.readFileSync("../data/data.json", "utf-8"));

const uploadData = async () => {
  try {
    await Tour.create(data);
    console.log("Data Successfully Created !!");
    process.exit(0);
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log("All data has been deleted successfully !!");
    process.exit(1);
  } catch (err) {
    console.log(err);
  }
};

console.log(process.argv);
if (process.argv[2] === "--import") {
  uploadData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

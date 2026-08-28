import { configDotenv } from "dotenv";
import { app} from "./app.js"
import mongoose, {Mongoose} from "mongoose"

configDotenv({
    path: "./config.env"
})

const DB = process.env.DATABASE_CONNECTION.replace("<db_password>", process.env.DATABASE_PASSWORD)

mongoose.connect(DB).then(() => {
  console.log("DB Connection is successful !!")
}).catch((err) => console.log(`Error while connecting to Database: ${err}`))

const TourSchema = mongoose.Schema({
  name: {
  }
})


const PORT = process.env.PORT || 3000;

// APPLICATION SERVER
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
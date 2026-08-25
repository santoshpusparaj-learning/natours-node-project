import { configDotenv } from "dotenv";
import { app} from "./app.js"

configDotenv({
    path: "./config.env"
})

const PORT = process.env.PORT || 3000;

// APPLICATION SERVER
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
import "dotenv/config";

import express from "express"; //using ES6 module standard not Common js
import db from "./db/db.config.js";

import mainRouter from "./src/api/main.routes.js";
import cors from "cors";
import { errorHandler } from "./src/middleware/error-handler.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json()); //middleware to parse json data from request body

app.use("/api", mainRouter);
// final error handling middleware
app.use(errorHandler);

// app.post("api/chat/conversations", (req, res) => {
//   res.send("post method");
// });

// app.get("api/chat/conversations", (req, res) => {
//   res.send("get method");
// });

async function startServer() {
  try {
    const connection = await db.getConnection();
    connection.release();
    // console.log("db connected");

    // app.listen(3888, (err) => {
    //   if (err) {
    //     throw err;
    //   }
    //   console.log("server is running on port http://localhost:3888");
    // });

    const PORT = process.env.PORT || 3888;

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("error starting server:", error);
  }
}

startServer();
// app.listen(3888, () => {
//   console.log("server is running on port http://localhost:30000");
// });

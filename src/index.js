import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// import dotenv from "dotenv";
// import api from "./src/resources/api";

// dotenv.config();

const app = express();
app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome" });
});
// finally, start the server
// app.use("/api", api);
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  // logger.error(`${error.status || 500} - ${error.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`)
  res.json({
    error: {
      message: error.message,
    },
  });
});
const server = app.listen(process.env.PORT || 5000, () => {
  // logger.info("Listening to server")
  console.log(`Listen on port `);
});

export default server;

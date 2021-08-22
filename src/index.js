import loaders from "./loaders";
import express from "express";
require("dotenv").config();

const app = express();
loaders(app);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Listen on port `);
});

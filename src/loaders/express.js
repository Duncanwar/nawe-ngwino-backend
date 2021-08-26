import cors from "cors";
import admin from "./admin";

export default async (app) => {
  app.use(cors());
  admin();
  return app;
};

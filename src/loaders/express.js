import cors from "cors";
import middleroute from "./middleroute";

export default async (app) => {
  app.use(cors());
  middleroute(app);
  return app;
};

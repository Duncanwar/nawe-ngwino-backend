import expressLoader from "./express";
import fallbackRoute from "./fallbackroute";

export default async (expressApp) => {
  expressLoader(expressApp);
  fallbackRoute(expressApp);
};

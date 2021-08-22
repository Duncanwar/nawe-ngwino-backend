export default (app) => {
  app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome" });
  });
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
};

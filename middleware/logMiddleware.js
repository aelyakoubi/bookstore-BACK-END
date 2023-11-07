import logger from "../utils/log.js";

const log = (req, res, next) => {
  const start = new Date();

  next(); // calling NEXT

  const ms = new Date() - start;
  logger.info(
    `${req.method} ${req.originalUrl}. Status: ${res.statusCode}. Duration: ${ms} ms`
  );
};

export default log;

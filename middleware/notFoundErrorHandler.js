const notFoundErrorHandler = (err, req, res, next) => {
  if (err.name === "NotFoundError") {
    return res.status(404).json({ message: err.message });
  }

  next(err);
};

export default notFoundErrorHandler;

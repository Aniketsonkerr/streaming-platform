const asyncHandler = (requestHandler) => {
  return (req, res, error) => {
    Promise.resolve(requestHandler(req, res, error)).catch((error) =>
      next(error)
    );
  };
};

export { asyncHandler };

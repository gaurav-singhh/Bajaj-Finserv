const validateBfhlRequest = (req, res, next) => {
  const { data } = req.body;

  if (!data) {
    return res
      .status(400)
      .json({ is_success: false, error: "The 'data' field is required." });
  }

  if (!Array.isArray(data)) {
    return res
      .status(400)
      .json({ is_success: false, error: "Input data must be an array." });
  }

  next();
};

module.exports = {
  validateBfhlRequest,
};

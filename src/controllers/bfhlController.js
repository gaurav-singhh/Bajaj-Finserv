const bfhlService = require("../services/bfhlService");
const userConfig = require("../config/userConfig");

exports.handleBfhlRequest = (req, res, next) => {
  try {
    const { data } = req.body;

    const result = bfhlService.processData(data);

    res.status(200).json({
      is_success: true,
      user_id: userConfig.userId,
      email: userConfig.email,
      roll_number: userConfig.rollNumber,
      ...result,
    });
  } catch (error) {
    next(error);
  }
};

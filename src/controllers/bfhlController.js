const bfhlService = require("../services/bfhlService");

exports.handleBfhlRequest = (req, res, next) => {
  try {
    const { data } = req.body;

    const result = bfhlService.processData(data);

    const userId = "gaurav_kumar_singh_29082025";
    const email = "gaurav.22bce7822@vitapstudent.ac.in";
    const rollNumber = "22BCE7822";

    res.status(200).json({
      is_success: true,
      user_id: userId,
      email: email,
      roll_number: rollNumber,
      ...result,
    });
  } catch (error) {
    next(error);
  }
};

const validateUsername = (req, res, next) => {
  const { username } = req.body;

  if (!username || typeof username !== "string" || username.trim() === "") {
    return res.status(400).json({
      success: false,
      message:
        'Invalid request: "username" is required and must be a non-empty string.',
    });
  }

  next();
};

module.exports = validateUsername;

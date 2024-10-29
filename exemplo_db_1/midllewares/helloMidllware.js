const helloMiddleware = (req, res, next) => {
  next();
};
module.exports = helloMiddleware;

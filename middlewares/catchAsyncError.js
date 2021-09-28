export default (callback) => (req, res, next) =>
  Promise.resolve(callback(req, res, next));

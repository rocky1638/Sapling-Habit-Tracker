const mongoose = require('mongoose');

const User = mongoose.model('user');
const LogCategory = mongoose.model('log-category');

module.exports = app => {
  app.get('/api/fetch_practices', (req, res) => {
    User.findById(req.user.id)
      .populate('logs')
      .then(user => {
        res.send(user.logs);
      });
  });

  app.get('/api/fetch_logs', (req, res) => {
    const { id } = req.query;
    LogCategory.findById(id)
      .populate('childrenLogs')
      .then(log => {
        res.send(log);
      });
  });
};

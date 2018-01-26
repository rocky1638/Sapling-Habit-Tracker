const mongoose = require('mongoose');

const User = mongoose.model('user');

module.exports = app => {
  app.get('/api/fetch_practices', (req, res) => {
    User.findById(req.user.id)
      .populate('logs')
      .then(user => {
        res.send(user.logs);
      });
  });
};

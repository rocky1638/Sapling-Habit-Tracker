const mongoose = require('mongoose');

const User = mongoose.model('user');
const LogCategory = mongoose.model('log-category');

module.exports = app => {
  app.post('/api/add_practice', (req, res) => {
    const { category, goal } = req.body;

    const logCategory = new LogCategory({
      category,
      goal,
      childrenLogs: []
    });

    User.findById(req.user.id)
      .then(user => {
        user.logs.push(logCategory);
        user.save();
      })
      .then(() => logCategory.save())
      .then(logCategory => {
        res.send(logCategory);
      });
  });
};

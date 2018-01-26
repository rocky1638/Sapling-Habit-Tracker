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

    let updatedUser = req.user;

    updatedUser.logs.push(logCategory);

    logCategory
      .save()
      .then(() => User.findByIdAndUpdate(req.user._id, updatedUser))
      .then(() => LogCategory.findById(logCategory.id))
      .then(log => {
        res.send(log);
      });
  });
};

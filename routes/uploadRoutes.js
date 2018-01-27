const mongoose = require('mongoose');

const User = mongoose.model('user');
const LogCategory = mongoose.model('log-category');
const Log = mongoose.model('log');

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

  app.post('/api/add_log', (req, res) => {
    const { description, nextPractice, id } = req.body;

    const log = new Log({
      description,
      nextPractice
    });

    LogCategory.findById(id).then(lc => {
      lc.childrenLogs.push(log);
      log
        .save()
        .then(() => LogCategory.findByIdAndUpdate(id, lc))
        .then(lc => {
          res.send(lc);
        });
    });
  });
};

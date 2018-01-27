const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('user');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      if (req.user) {
        res.redirect('/dashboard');
      } else {
        res.redirect('/');
      }
    }
  );

  app.get('/api/current_user', (req, res) => {
    User.findById(req.user.id)
      .populate('logs')
      .populate('lastPracticed')
      .then(user => res.send(user));
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};

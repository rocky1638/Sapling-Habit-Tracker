const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogSchema = new Schema(
  {
    title: String,
    createdAt: Date,
    description: String
  },
  { usePushEach: true }
);

LogSchema.pre('save', function preSave(next) {
  var log = this;

  log.createdAt(Date.now());
  next();
});

mongoose.model('log', LogSchema);

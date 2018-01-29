const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogSchema = new Schema(
  {
    createdAt: Date,
    description: String,
    nextPractice: String,
    time: Number
  },
  { usePushEach: true }
);

// could be a trouble spot
LogSchema.pre('save', function preSave(next) {
  var log = this;

  log.createdAt = Date.now();
  next();
});

mongoose.model('log', LogSchema);

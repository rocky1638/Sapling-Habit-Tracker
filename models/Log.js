const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogSchema = new Schema(
  {
    title: String,
    date: Date,
    description: String
  },
  { usePushEach: true }
);

mongoose.model('log', LogSchema);

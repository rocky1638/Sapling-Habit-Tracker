const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LogCategorySchema = new Schema(
  {
    category: String,
    goal: String,
    childrenLogs: [
      {
        type: Schema.Types.ObjectId,
        ref: 'log'
      }
    ]
  },
  { usePushEach: true }
);

mongoose.model('log-category', LogSchema);

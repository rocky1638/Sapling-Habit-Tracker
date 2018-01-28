const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    googleId: String,
    facebookId: String,
    lastPracticed: [
      {
        type: Schema.Types.ObjectId,
        ref: 'log-category'
      }
    ],
    logs: [
      {
        type: Schema.Types.ObjectId,
        ref: 'log-category'
      }
    ]
  },
  { usePushEach: true }
);

mongoose.model('user', UserSchema);

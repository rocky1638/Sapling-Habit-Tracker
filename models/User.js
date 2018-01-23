const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    googleId: String,
    logs: [
      {
        type: Schema.Types.ObjectId,
        ref: 'log'
      }
    ]
  },
  { usePushEach: true }
);

mongoose.model('user', UserSchema);

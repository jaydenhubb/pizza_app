const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  created_at: Date,
  username: {
    type: String,
    rerquired: true,
  },
  password: {
    type: String,
    required: true,
  },
  user_type: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
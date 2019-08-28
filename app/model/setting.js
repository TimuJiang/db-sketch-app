// eslint-disable-next-line strict
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const schema = new Schema({
    id: {
      type: String,
    },
    config1: {
      type: Object,
    },
    config2: {
      type: Object,
    },
  });
  return mongoose.model('Setting', schema);
};

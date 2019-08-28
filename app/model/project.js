// eslint-disable-next-line strict
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const schema = new Schema({
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    tables: {
      type: Array,
    },
    links: {
      type: Array,
    },
    timestamps: {
      type: Date,
      createdAt: 'created',
      updatedAt: 'updated',
    },
  });
  return mongoose.model('Project', schema);
};

const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const Schema = mongoose.Schema;

const Student = new Schema({
  mssv: {type: String, maxLength: 255},
  name: {type: String, require:true, },
  dateOfBirth: {type: String},
  address: {type: String, maxLength: 255},
  image: {type: String },
},{
  timestamps: true,
});

mongoose.plugin(slug);
Student.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all',
});


module.exports = mongoose.model('Student', Student);

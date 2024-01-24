
const mongoose = require('mongoose');


const photoSchema = new mongoose.Schema(
  {
    photo: String,
    description: String, 
  },
  { timestamps: true }
);

const Photo = mongoose.models.Photo || mongoose.model('Photo', photoSchema);


module.exports = Photo;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sdcDescription', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongodb');
});

const campSchema = new mongoose.Schema({
  id: Number,
  States: String,
  Farms: String,
  Camps: String,
  minimumNights: String,
  acceptsBookings: String,
  checkIn: String,
  checkOut: String,
  onArrival: String,
  costs: Number,
  description: String,
  review: String,
  responses: String,
  recommended: String,
  Parks: String,
  Lodging: String,
  Essentials: String,
  Amentities: String,
  Owners: String,
  photosOfResponsers: String,
  cancellation: String,
  checkmark: Boolean,
})

const Camp = db.model('camps', campSchema);

module.exports = Camp;
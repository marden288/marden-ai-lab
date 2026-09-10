const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    organization: { type: String, required: true },
    date: { type: String, required: true },
    image: { type: String, required: true },
    credentialUrl: { type: String, default: '#' },
  },
  { timestamps: true },
);

module.exports = mongoose.models.Certificate || mongoose.model('Certificate', certificateSchema);

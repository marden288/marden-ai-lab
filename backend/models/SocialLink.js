const mongoose = require('mongoose');

const socialLinkSchema = new mongoose.Schema(
  {
    platform: { type: String, required: true },
    label: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true },
);

module.exports = mongoose.models.SocialLink || mongoose.model('SocialLink', socialLinkSchema);

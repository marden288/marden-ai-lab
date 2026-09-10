const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    items: [{ type: String }],
  },
  { timestamps: true },
);

module.exports = mongoose.models.Skill || mongoose.model('Skill', skillSchema);

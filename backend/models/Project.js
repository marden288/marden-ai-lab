const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, default: '/images/project-placeholder.jpg' },
    technologies: [{ type: String }],
    githubUrl: { type: String, default: '#' },
    liveUrl: { type: String, default: '#' },
    downloadUrl: { type: String, default: '#' },
    category: { type: String, default: 'AI' },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true },
);

module.exports = mongoose.models.Project || mongoose.model('Project', projectSchema);

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const connectDB = require('./config/db');

const Project = require('./models/Project');
const Certificate = require('./models/Certificate');
const Skill = require('./models/Skill');
const Message = require('./models/Message');
const SocialLink = require('./models/SocialLink');
const User = require('./models/User');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'marden-ai-lab-secret';

const memoryStore = {
  projects: [
    {
      id: 'p1',
      title: 'AI Face & Hand Tracking',
      description: 'Realtime computer vision experiment using webcam-based face and hand landmark tracking.',
      image: '/images/project-01.jpg',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
      githubUrl: 'https://github.com/',
      liveUrl: '#',
      downloadUrl: '#',
      category: 'AI',
      featured: true,
    },
    {
      id: 'p2',
      title: 'Hologram / Sci-Fi VFX',
      description: 'Realtime holographic visual effects controlled by hand position and movement.',
      image: '/images/project-02.jpg',
      technologies: ['OpenCV', 'Canvas', 'Hand Tracking', 'VFX'],
      githubUrl: 'https://github.com/',
      liveUrl: '#',
      downloadUrl: '#',
      category: 'Computer Vision',
      featured: true,
    },
    {
      id: 'p3',
      title: 'Maya AI Assistant',
      description: 'A voice-driven desktop AI assistant capable of opening applications, performing searches and automating repetitive tasks.',
      image: '/images/project-03.jpg',
      technologies: ['Python', 'Speech Recognition', 'Automation', 'AI'],
      githubUrl: 'https://github.com/',
      liveUrl: '#',
      downloadUrl: '#',
      category: 'AI',
      featured: false,
    },
  ],
  certificates: [
    {
      id: 'c1',
      title: 'AI & Machine Learning Certificate',
      organization: 'OpenAI Academy',
      date: '2025',
      image: '/images/certificate-01.jpg',
      credentialUrl: '#',
    },
    {
      id: 'c2',
      title: 'Computer Vision Practitioner',
      organization: 'Vision Lab',
      date: '2024',
      image: '/images/certificate-02.jpg',
      credentialUrl: '#',
    },
  ],
  skills: [
    { category: 'Programming', items: ['Python', 'JavaScript', 'C++', 'Java', 'HTML', 'CSS'] },
    { category: 'AI / Computer Vision', items: ['OpenCV', 'MediaPipe', 'Machine Learning', 'Computer Vision', 'AI Automation'] },
    { category: 'Web Development', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'REST APIs', 'MySQL'] },
    { category: 'Hardware', items: ['Arduino', 'ESP8266', 'Sensors', 'Embedded Systems', 'IoT', 'Electronics'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Linux', 'Figma'] },
  ],
  socialLinks: [
    { platform: 'GitHub', label: 'GitHub', url: 'https://github.com/' },
    { platform: 'Facebook', label: 'Facebook', url: 'https://facebook.com/' },
    { platform: 'Instagram', label: 'Instagram', url: 'https://instagram.com/' },
    { platform: 'LinkedIn', label: 'LinkedIn', url: 'https://linkedin.com/' },
    { platform: 'Email', label: 'Email', url: 'mailto:hello@mardenailab.com' },
  ],
};

app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized access' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

const createToken = (user) => jwt.sign({ id: user.id || user._id, username: user.username, role: user.role }, JWT_SECRET, { expiresIn: '8h' });

const normalizeProject = (project) => ({
  id: project._id ? String(project._id) : project.id,
  title: project.title,
  description: project.description,
  image: project.image,
  technologies: project.technologies || [],
  githubUrl: project.githubUrl,
  liveUrl: project.liveUrl,
  downloadUrl: project.downloadUrl,
  category: project.category,
  featured: project.featured,
  createdAt: project.createdAt,
});

const normalizeCertificate = (cert) => ({
  id: cert._id ? String(cert._id) : cert.id,
  title: cert.title,
  organization: cert.organization,
  date: cert.date,
  image: cert.image,
  credentialUrl: cert.credentialUrl,
  createdAt: cert.createdAt,
});

const normalizeSkill = (skill) => ({
  id: skill._id ? String(skill._id) : skill.id,
  category: skill.category,
  items: skill.items || [],
  createdAt: skill.createdAt,
});

const normalizedData = async () => {
  const [projects, certificates, skills, socialLinks] = await Promise.all([
    Project.find({}).lean().catch(() => memoryStore.projects),
    Certificate.find({}).lean().catch(() => memoryStore.certificates),
    Skill.find({}).lean().catch(() => memoryStore.skills),
    SocialLink.find({}).lean().catch(() => memoryStore.socialLinks),
  ]);

  return {
    projects: productsFromSource(projects),
    certificates: certificatesFromSource(certificates),
    skills: skillsFromSource(skills),
    socialLinks: socialLinks.length ? socialLinks.map((item) => ({ ...item, id: item._id ? String(item._id) : item.id })) : memoryStore.socialLinks,
  };
};

function productsFromSource(source) {
  return source.map((item) => normalizeProject(item));
}

function certificatesFromSource(source) {
  return source.map((item) => normalizeCertificate(item));
}

function skillsFromSource(source) {
  return source.map((item) => normalizeSkill(item));
}

app.get('/api/portfolio', async (req, res) => {
  const portfolio = await normalizedData();
  res.json(portfolio);
});

app.get('/api/projects', async (req, res) => {
  const { projects } = await normalizedData();
  res.json(projects);
});

app.get('/api/certificates', async (req, res) => {
  const { certificates } = await normalizedData();
  res.json(certificates);
});

app.get('/api/skills', async (req, res) => {
  const { skills } = await normalizedData();
  res.json(skills);
});

app.get('/api/social-links', async (req, res) => {
  const { socialLinks } = await normalizedData();
  res.json(socialLinks);
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Please complete all form fields.' });
  }

  try {
    const result = await Message.create({ name, email, subject, message });
    return res.status(201).json({ success: true, data: result, message: 'Transmission received successfully.' });
  } catch (error) {
    return res.status(500).json({ message: 'Could not store your message.', error: error.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;

  const adminUser = {
    id: 'admin-1',
    username: process.env.ADMIN_USERNAME || 'admin',
    password: process.env.ADMIN_PASSWORD || 'admin123',
    role: 'admin',
  };

  if (username !== adminUser.username || password !== adminUser.password) {
    return res.status(401).json({ message: 'Invalid admin credentials' });
  }

  const token = createToken(adminUser);
  return res.json({ token, user: { username: adminUser.username, role: adminUser.role } });
});

app.get('/api/auth/me', authMiddleware, (req, res) => {
  res.json({ user: { username: req.user.username, role: req.user.role } });
});

app.get('/api/admin/overview', authMiddleware, async (req, res) => {
  const portfolio = await normalizedData();
  res.json({
    user: { username: req.user.username, role: req.user.role },
    ...portfolio,
    messageCount: 0,
  });
});

app.post('/api/admin/projects', authMiddleware, async (req, res) => {
  const project = req.body;
  try {
    const created = await Project.create(project);
    res.status(201).json(normalizeProject(created));
  } catch (error) {
    memoryStore.projects.push({ id: String(Date.now()), ...project });
    res.status(201).json({ id: String(Date.now()), ...project });
  }
});

app.put('/api/admin/projects/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await Project.findByIdAndUpdate(id, req.body, { new: true });
    res.json(normalizeProject(updated));
  } catch (error) {
    const item = memoryStore.projects.find((entry) => entry.id === id);
    if (!item) return res.status(404).json({ message: 'Project not found.' });
    Object.assign(item, req.body);
    res.json(item);
  }
});

app.delete('/api/admin/projects/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    await Project.findByIdAndDelete(id);
    res.json({ success: true });
  } catch (error) {
    memoryStore.projects = memoryStore.projects.filter((entry) => entry.id !== id);
    res.json({ success: true });
  }
});

app.post('/api/admin/certificates', authMiddleware, async (req, res) => {
  const cert = req.body;
  try {
    const created = await Certificate.create(cert);
    res.status(201).json(normalizeCertificate(created));
  } catch (error) {
    memoryStore.certificates.push({ id: String(Date.now()), ...cert });
    res.status(201).json({ id: String(Date.now()), ...cert });
  }
});

app.put('/api/admin/certificates/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await Certificate.findByIdAndUpdate(id, req.body, { new: true });
    res.json(normalizeCertificate(updated));
  } catch (error) {
    const item = memoryStore.certificates.find((entry) => entry.id === id);
    if (!item) return res.status(404).json({ message: 'Certificate not found.' });
    Object.assign(item, req.body);
    res.json(item);
  }
});

app.delete('/api/admin/certificates/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    await Certificate.findByIdAndDelete(id);
    res.json({ success: true });
  } catch (error) {
    memoryStore.certificates = memoryStore.certificates.filter((entry) => entry.id !== id);
    res.json({ success: true });
  }
});

app.post('/api/admin/skills', authMiddleware, async (req, res) => {
  const skill = req.body;
  try {
    const created = await Skill.create(skill);
    res.status(201).json(normalizeSkill(created));
  } catch (error) {
    memoryStore.skills.push({ id: String(Date.now()), ...skill });
    res.status(201).json({ id: String(Date.now()), ...skill });
  }
});

app.delete('/api/admin/skills/:id', authMiddleware, async (req, res) => {
  const { id } = req.params;
  try {
    await Skill.findByIdAndDelete(id);
    res.json({ success: true });
  } catch (error) {
    memoryStore.skills = memoryStore.skills.filter((entry) => entry.id !== id);
    res.json({ success: true });
  }
});

app.get('/api/admin/messages', authMiddleware, async (req, res) => {
  try {
    const messages = await Message.find({}).sort({ createdAt: -1 }).lean();
    res.json(messages);
  } catch (error) {
    res.json([]);
  }
});

const boot = async () => {
  const isMongoConnected = await connectDB();

  if (isMongoConnected) {
    try {
      const userCount = await User.countDocuments();
      if (userCount === 0) {
        const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'admin123', 10);
        await User.create({ username: process.env.ADMIN_USERNAME || 'admin', password: hashedPassword, role: 'admin' });
      }
    } catch (error) {
      console.warn('Could not seed default admin user:', error.message);
    }
  }

  app.listen(PORT, () => {
    console.log(`Marden AI Lab backend running on http://localhost:${PORT}`);
  });
};

boot();

module.exports = app;

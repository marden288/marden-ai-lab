import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  BrainCircuit,
  ChevronRight,
  Circle,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Globe,
  Layers3,
  Lock,
  Mail,
  Menu,
  MessageSquareText,
  MonitorSmartphone,
  Play,
  Rocket,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import profileImage from './assets/profile/profile.jpg';
import profileVideo from './assets/profile/profile.mp4';
import resumeFile from './assets/profile/Resume (3).pdf';
import liveProjectVideo from './assets/profile/video.mp4';
import projectOne from './assets/projects/naruto.jpg';
import projectHandTracking from './assets/projects/hand trick.png';
import projectCat from './assets/projects/cat.png';
import projectPuzzle from './assets/projects/puzzle.png';
import projectMindStone from './assets/projects/mind stone.png';
import projectWifi from './assets/projects/wifi.png';
import narutoVideo from './assets/profile/naruto.mp4';
import handTricksVideo from './assets/profile/hand tricks.mp4';
import catVideo from './assets/profile/cat.mp4';
import puzzleVideo from './assets/profile/puzzle.mp4';
import mindStoneVideo from './assets/profile/mind stone.mp4';
import wifiVideo from './assets/profile/wifi.mp4';
import certificateUci from './assets/certificates/UCI.jpg';
import certificatePython from './assets/certificates/python.jpg';
import certificateDmw from './assets/certificates/dmw cert.jpg';
import certificateCybersecurity from './assets/certificates/cybersecurity.jpg';
import certificate1020 from './assets/certificates/cert-1020.jpg';
import certificateArtificial from './assets/certificates/Artificial.jpg';
import certificateAi from './assets/certificates/ai.jpg';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const statItems = [
  { value: '05+', label: 'PROJECTS', detail: 'AI / COMPUTER VISION' },
  { value: '10+', label: 'TECHNOLOGIES', detail: 'FULL-STACK • AI • HARDWARE' },
  { value: 'REALTIME', label: 'EXPERIMENTS', detail: 'INTELLIGENT SYSTEMS' },
];

const projectData = [
  {
    id: 1,
    title: 'Hand Tracking AI / Naruto Jutsu',
    description: 'Realtime computer vision experiment using webcam-based face and hand landmark tracking.',
    image: projectOne,
    video: narutoVideo,
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
    category: 'AI',
    featured: true,
    githubUrl: 'https://github.com/marden288/Naruto',
    liveUrl: 'https://naruto-drab-seven.vercel.app/',
    downloadUrl: 'https://naruto-drab-seven.vercel.app/',
  },
  {
    id: 2,
    title: 'Hand-gesture',
    description: 'Realtime holographic visual effects controlled by hand position and movement.',
    image: projectHandTracking,
    video: handTricksVideo,
    technologies: ['OpenCV', 'Canvas', 'Hand Tracking', 'VFX'],
    category: 'Computer Vision',
    featured: true,
    githubUrl: 'https://github.com/marden288/hand-tracking-system',
    liveUrl: 'https://crazy-particles.vercel.app/',
    downloadUrl: 'https://crazy-particles.vercel.app/',
  },
  {
    id: 3,
    title: 'Cat-Gesture',
    description: 'A voice-driven desktop AI assistant capable of opening applications, performing searches and automating repetitive tasks.',
    image: projectCat,
    video: catVideo,
    technologies: ['Python', 'Speech Recognition', 'Automation', 'AI'],
    category: 'AI',
    featured: false,
    githubUrl: 'https://github.com/marden288/cat-gesture',
    liveUrl: 'https://cat-gesture-4i9n.vercel.app/',
    downloadUrl: 'https://cat-gesture-4i9n.vercel.app/',
  },
  {
    id: 4,
    title: 'PuzzleCam App',
    description: 'A realtime interactive particle system controlled using hand gestures.',
    image: projectPuzzle,
    video: puzzleVideo,
    technologies: ['Python', 'MediaPipe', 'Particles', 'Gesture'],
    category: 'Web',
    featured: false,
    githubUrl: 'https://github.com/marden288/puzzlecam-app',
    liveUrl: 'https://puzzlecam-app.vercel.app/',
    downloadUrl: 'https://puzzlecam-app.vercel.app/',
  },
  {
    id: 5,
    title: 'Mind Stone AI System',
    description: 'Interactive vision system combining webcam tracking, UI overlays and realtime visual effects.',
    image: projectMindStone,
    video: mindStoneVideo,
    technologies: ['OpenCV', 'Python', 'AI', 'Realtime'],
    category: 'Computer Vision',
    featured: false,
    githubUrl: 'https://github.com/marden288/mind-stone',
    liveUrl: 'https://mind-stone-pkhb.vercel.app/',
    downloadUrl: 'https://mind-stone-pkhb.vercel.app/',
  },
  {
    id: 6,
    title: 'WIFI-Enabled Arduino Projects',
    description: 'Embedded systems and hardware projects combining sensors, microcontrollers and automation.',
    image: projectWifi,
    video: wifiVideo,
    technologies: ['Arduino', 'IoT', 'Embedded', 'Electronics'],
    category: 'Hardware',
    featured: false,
    githubUrl: 'https://github.com/marden288/wifi',
    liveUrl: 'https://wifi-gamma-seven.vercel.app/',
    downloadUrl: 'https://wifi-gamma-seven.vercel.app/',
  },
];

const skillGroups = [
  {
    title: 'Programming',
    items: ['Python', 'JavaScript', 'C++', 'Java', 'HTML', 'CSS'],
  },
  {
    title: 'AI / Computer Vision',
    items: ['OpenCV', 'MediaPipe', 'Machine Learning', 'Computer Vision', 'AI Automation'],
  },
  {
    title: 'Web Development',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'REST APIs', 'MySQL'],
  },
  {
    title: 'Hardware',
    items: ['Arduino', 'ESP8266', 'Sensors', 'Embedded Systems', 'IoT', 'Electronics'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Linux', 'Figma'],
  },
];

const certificateData = [
  {
    id: 1,
    title: 'UCI Certificate',
    organization: 'University of California, Irvine',
    date: '2025',
    image: certificateUci,
    credentialUrl: '#',
  },
  {
    id: 2,
    title: 'Python Certificate',
    organization: 'Programming Achievement',
    date: '2026',
    image: certificatePython,
    credentialUrl: '#',
  },
  {
    id: 3,
    title: 'DMW Certificate',
    organization: 'Department of Migrant Workers',
    date: '2025',
    image: certificateDmw,
    credentialUrl: '#',
  },
  {
    id: 4,
    title: 'Cybersecurity Certificate',
    organization: 'Cybersecurity Achievement',
    date: '2024',
    image: certificateCybersecurity,
    credentialUrl: '#',
  },
  {
    id: 5,
    title: 'Basic Occupational Safety & Health For S02 Certificate',
    organization: 'Technical Skills Recognition',
    date: '2024',
    image: certificate1020,
    credentialUrl: '#',
  },
  {
    id: 6,
    title: 'Artificial Intelligence Certificate',
    organization: 'AI Learning Achievement',
    date: '2025',
    image: certificateArtificial,
    credentialUrl: '#',
  },
  {
    id: 7,
    title: 'AI Certificate',
    organization: 'Artificial Intelligence Training',
    date: '2026',
    image: certificateAi,
    credentialUrl: '#',
  },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/marden288', icon: Globe },
  { label: 'Facebook', href: 'https://www.facebook.com/mardenbarangan03', icon: Globe },
  { label: 'Instagram', href: 'https://www.instagram.com/engr_marden/', icon: Globe },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/marden-barangan-821a21366/', icon: Globe },
  { label: 'Email', href: 'mailto:mardenbarangan0728@gmail.com', icon: Mail },
];

const filters = ['ALL', 'AI', 'Computer Vision', 'Web', 'Python', 'Arduino', 'Hardware'];

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [search, setSearch] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [profileVideoRevealed, setProfileVideoRevealed] = useState(false);
  const [heroVideoSource, setHeroVideoSource] = useState(liveProjectVideo);
  const cursorRef = useRef(null);
  const cursorTrailRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = cursorTrailRef.current;
    if (!cursor || !trail) return undefined;

    let previousX = window.innerWidth / 2;
    let previousY = window.innerHeight / 2;
    let frameId = 0;

    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;
      const angle = Math.atan2(clientY - previousY, clientX - previousX) * (180 / Math.PI) + 45;
      previousX = clientX;
      previousY = clientY;
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) rotate(${angle}deg)`;
        trail.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  const filteredProjects = useMemo(() => {
    return projectData.filter((project) => {
      const matchFilter = activeFilter === 'ALL' || project.category === activeFilter || project.technologies.includes(activeFilter);
      const matchSearch = `${project.title} ${project.description}`.toLowerCase().includes(search.toLowerCase());
      return matchFilter && matchSearch;
    });
  }, [activeFilter, search]);

  return (
    <div className="portfolio-shell relative min-h-screen overflow-x-hidden bg-[#050812] text-white selection:bg-cyan-500/30">
      <span ref={cursorTrailRef} className="cursor-trail" aria-hidden="true" />
      <span ref={cursorRef} className="cursor-arrow" aria-hidden="true">
        <ArrowRight size={18} />
      </span>
      <div className="pointer-events-none fixed inset-0 opacity-80">
        <div className="grid-bg" />
        <div className="floating-orb orb-one" />
        <div className="floating-orb orb-two" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050812]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <span className="orb-mini" aria-hidden="true" />
            <div>
              <div className="text-lg font-semibold tracking-[0.35em] text-cyan-300/90">MARDEN</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-slate-400">AI LAB</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.22em] text-slate-300 lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-cyan-300">
                {item.label}
              </a>
            ))}
            <Link to="/admin" className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-500/20">
              Admin
            </Link>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 lg:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="border-t border-white/10 bg-[#050812]/95 px-4 py-5 lg:hidden"
            >
              <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.22em] text-slate-200">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="py-2 transition hover:text-cyan-300">
                    {item.label}
                  </a>
                ))}
                <Link to="/admin" onClick={() => setMobileMenuOpen(false)} className="mt-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-3 text-center text-cyan-200">
                  Admin
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="home" className="relative z-10">
        <section className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.32em] text-cyan-200">
                <Sparkles size={14} />
                AI ENGINEERING • COMPUTER VISION • REALTIME
              </div>

              <h1 className="max-w-xl text-5xl font-black leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
                Explore
                <span className="mt-2 block text-gradient">Intelligent</span>
                <span className="mt-2 block text-gradient">Experiments</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                Computer Engineering, AI, Computer Vision, Full-Stack Development and Creative Technology Projects.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(59,130,246,0.7)] transition hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(96,165,250,0.9)]">
                  Explore Projects
                  <ArrowRight size={18} />
                </a>
                <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-400/50 hover:text-white">
                  Enter AI Lab
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {statItems.map((stat) => (
                  <div key={stat.label} className="glass-panel px-4 py-4">
                    <div className="text-2xl font-black tracking-[-0.05em] text-white sm:text-3xl">{stat.value}</div>
                    <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-cyan-200">{stat.label}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-slate-400">{stat.detail}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
              <div className="hud-panel relative mx-auto max-w-[540px] p-3 sm:p-5">
                <div className="scan-lines" />
                <div className="grid gap-3">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-[10px] uppercase tracking-[0.3em] text-cyan-300">
                    <span className="inline-flex items-center gap-2"><Circle className="fill-current text-cyan-400" size={8} /> Live Feed</span>
                    <span className="text-slate-400">PROJECT VIDEO</span>
                  </div>

                  <div className="relative overflow-hidden rounded-[30px] border border-cyan-400/20 bg-[#070d1a] p-3">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.25),transparent_35%),radial-gradient(circle_at_bottom,_rgba(139,92,246,0.18),transparent_35%)]" />
                    <div className="relative aspect-[1.18] overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(135deg,#0d1728,#060d1a_50%,#0f1d2f)]">
                      <video
                        src={heroVideoSource}
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={profileImage}
                        onError={() => setHeroVideoSource(profileVideo)}
                        className="hero-video h-full w-full object-cover"
                        aria-label="Project live feed video"
                      />

                      <div className="absolute inset-0 opacity-80" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                      <div className="absolute left-6 top-6 flex gap-2 text-[9px] uppercase tracking-[0.28em] text-cyan-200">
                        <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2 py-1">HANDS: 2</span>
                        <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2 py-1">LANDMARKS: 21</span>
                      </div>

                      <div className="absolute right-6 top-6 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2 py-1 text-[9px] uppercase tracking-[0.25em] text-emerald-300">
                        AI TRACKING: ACTIVE
                      </div>

                      <div className="absolute bottom-6 left-6 flex flex-col gap-2 text-[9px] uppercase tracking-[0.28em] text-slate-200">
                        <span>AI Status</span>
                        <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.7)]" /> ONLINE</span>
                      </div>

                      <div className="absolute bottom-6 right-6 text-right text-[9px] uppercase tracking-[0.28em] text-slate-200">
                        <div>HANDS: 2</div>
                        <div className="mt-1 text-cyan-200">FPS: 60</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-cyan-200">
                <Cpu size={12} />
                PROJECT SHOWCASE
              </div>
              <h2 className="text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">Experiments from the Lab</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
              Explore my collection of AI, computer vision, software and hardware experiments.
            </p>
          </div>

          <div className="glass-panel mb-8 p-3 sm:p-4">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3">
              <Search size={18} className="text-cyan-300" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search projects — AI, gesture, computer vision..."
                className="w-full border-0 bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
                aria-label="Search projects"
              />
            </div>
          </div>

          <div className="mb-10 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-[10px] font-medium uppercase tracking-[0.26em] transition ${
                  activeFilter === filter
                    ? 'border-cyan-300/60 bg-cyan-500/10 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.2)]'
                    : 'border-white/10 bg-white/5 text-slate-300 hover:border-cyan-300/35 hover:text-cyan-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                className="project-card group overflow-hidden rounded-[28px] border border-white/10 bg-[#09111d]/80 p-2"
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="relative block w-full overflow-hidden rounded-[22px] border border-white/10 bg-slate-900 text-left"
                  aria-label={`View ${project.title}`}
                >
                  <img src={project.image} alt={project.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-950/70 px-2 py-1 text-[9px] uppercase tracking-[0.24em] text-cyan-200">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    {project.featured ? 'Live Feed' : 'Featured'}
                  </div>
                  {project.video && (
                    <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-slate-950/80 px-3 py-2 text-[9px] uppercase tracking-[0.2em] text-cyan-100">
                      <Play size={12} className="fill-current" />
                      Play video
                    </span>
                  )}
                </button>

                <div className="px-1 pb-1 pt-5">
                  <h3 className="text-2xl font-bold tracking-[-0.05em] text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] uppercase tracking-[0.24em] text-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-2">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/35 bg-cyan-500/10 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-500/15">
                      <Globe size={14} />
                      GitHub
                    </a>
                    <button type="button" onClick={() => setSelectedProject(project)} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-slate-100 transition hover:border-cyan-400/40 hover:text-white">
                      View Project
                    </button>
                    <a href={project.downloadUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-slate-100 transition hover:border-cyan-400/40 hover:text-white">
                      <Download size={14} />
                      Files
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-cyan-200">
              <ShieldCheck size={12} />
              TECHNOLOGY STACK
            </div>
            <h2 className="text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">Engineering capabilities across the stack</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="glass-panel p-5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-200">
                    <Layers3 size={18} />
                  </div>
                  <h3 className="text-lg font-semibold uppercase tracking-[0.16em] text-white">{group.title}</h3>
                </div>
                <div className="skill-marquee" aria-label={`${group.title} skills`}>
                  <div className={`skill-marquee-track ${index % 2 === 0 ? 'skill-marquee-left' : 'skill-marquee-right'}`}>
                    {[0, 1].map((copy) => (
                      <div key={copy} className="skill-marquee-set" aria-hidden={copy === 1}>
                        {group.items.map((item) => (
                          <span key={`${copy}-${item}`} className="skill-chip">
                            {item}
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="certificates" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-cyan-200">
              <Database size={12} />
              CERTIFICATIONS
            </div>
            <h2 className="text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">Milestones and technical credentials</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {certificateData.map((certificate) => (
              <motion.article key={certificate.id} whileHover={{ y: -5 }} className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#09111d]/80 p-2">
                <div className="overflow-hidden rounded-[20px] border border-white/10 bg-slate-900">
                  <img src={certificate.image} alt={certificate.title} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="px-1 pb-1 pt-4">
                  <h3 className="text-lg font-bold text-white">{certificate.title}</h3>
                  <div className="mt-2 text-sm text-slate-300">{certificate.organization}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.22em] text-cyan-200">{certificate.date}</div>
                  <button type="button" onClick={() => setSelectedCertificate(certificate)} className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/35 bg-cyan-500/10 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-500/15">
                    View Certificate
                    <ChevronRight size={14} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative mx-auto max-w-md">
              <button
                type="button"
                className={`profile-frame profile-reveal group relative block w-full overflow-hidden rounded-[32px] border border-cyan-400/20 bg-[#081521] p-3 text-left ${profileVideoRevealed ? 'profile-reveal-active' : ''}`}
                onClick={() => setProfileVideoRevealed((revealed) => !revealed)}
                onMouseEnter={() => setProfileVideoRevealed(true)}
                onMouseLeave={() => setProfileVideoRevealed(false)}
                onFocus={() => setProfileVideoRevealed(true)}
                onBlur={() => setProfileVideoRevealed(false)}
                aria-pressed={profileVideoRevealed}
                aria-label="Reveal profile video"
              >
                <div className="profile-reveal-media">
                  <img src={profileImage} alt="Marden AI profile" className="w-full rounded-[24px] object-cover" />
                  <video
                    src={profileVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="profile-reveal-video"
                    aria-label="Animated Marden AI profile video"
                  />
                  <div className="scan-lines scan-lines-vertical" />
                </div>
                <span className="profile-reveal-arrow" aria-hidden="true">
                  <ArrowRight size={18} />
                </span>
                <span className="profile-reveal-label">
                  {profileVideoRevealed ? 'Release to return' : 'Point to reveal'}
                </span>
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-cyan-200">
                <BrainCircuit size={12} />
                ABOUT THE ENGINEER
              </div>
              <h2 className="max-w-lg text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">Building the interface between ideas and technology.</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                I am a Computer Engineering graduate focused on building practical software, AI systems, computer-vision applications and embedded technologies. I enjoy transforming ideas into interactive systems that combine intelligent software with real-world hardware.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm uppercase tracking-[0.22em] text-slate-200">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Computer Engineering</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Software Development</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">AI</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Computer Vision</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={resumeFile}
                  download="Marden-Barangan-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-3 text-xs uppercase tracking-[0.22em] text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-500/15"
                >
                  Download Resume
                </a>
                <a href="https://github.com/marden288" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs uppercase tracking-[0.22em] text-slate-100 transition hover:border-cyan-400/40 hover:text-white">
                  GitHub
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs uppercase tracking-[0.22em] text-slate-100 transition hover:border-cyan-400/40 hover:text-white">
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="control-room rounded-[32px] border border-cyan-400/20 bg-[#09111d]/80 p-6 sm:p-8">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-cyan-200">
                  <MonitorSmartphone size={12} />
                  MARDEN AI LAB
                </div>
                <h2 className="text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">System Command Center</h2>
              </div>
              <a
                href="https://github.com/marden288/Marden..git"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-950 shadow-[0_0_28px_rgba(59,130,246,0.6)] transition hover:-translate-y-0.5"
              >
                <Rocket size={16} />
                Launch AI Lab
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-950/50 p-2 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
              <picture>
                <source
                  media="(prefers-color-scheme: light)"
                  srcSet="https://raw.githubusercontent.com/shaikhtaha258-maker/shaikhtaha258-maker/main/light.svg"
                />
                <img
                  src="https://raw.githubusercontent.com/shaikhtaha258-maker/shaikhtaha258-maker/main/dark.svg"
                  alt="Animated developer system dashboard"
                  className="h-auto w-full rounded-xl"
                />
              </picture>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.28em] text-cyan-200">
                <MessageSquareText size={12} />
                CONTACT
              </div>
              <h2 className="text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">Let's Build Something Intelligent.</h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-slate-300">
                Have an idea, project or system that needs to be built? Let's turn it into reality.
              </p>

              <div className="mt-8 grid gap-3">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm uppercase tracking-[0.18em] text-slate-100 transition hover:border-cyan-400/35 hover:text-cyan-100">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-500/10 text-cyan-200">
                      <Icon size={16} />
                    </span>
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <form className="glass-panel p-5 sm:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-xs uppercase tracking-[0.22em] text-slate-300">
                  Name
                  <input type="text" className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/40 focus:outline-none" placeholder="Your name" />
                </label>
                <label className="block text-xs uppercase tracking-[0.22em] text-slate-300">
                  Email
                  <input type="email" className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/40 focus:outline-none" placeholder="you@example.com" />
                </label>
              </div>

              <label className="mt-4 block text-xs uppercase tracking-[0.22em] text-slate-300">
                Subject
                <input type="text" className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/40 focus:outline-none" placeholder="Project opportunity" />
              </label>

              <label className="mt-4 block text-xs uppercase tracking-[0.22em] text-slate-300">
                Message
                <textarea rows="6" className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/40 focus:outline-none" placeholder="Tell me about the system you want to build..." />
              </label>

              <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.5)] transition hover:-translate-y-0.5">
                Send Transmission
                <Send size={16} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/10 bg-[#050812]/90 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <div className="mb-2 flex items-center justify-center gap-3 md:justify-start">
                <span className="orb-mini" aria-hidden="true" />
                <div>
                  <div className="text-lg font-semibold tracking-[0.35em] text-cyan-300">MARDEN</div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-slate-500">AI LAB</div>
                </div>
              </div>
              <div className="text-sm uppercase tracking-[0.18em] text-slate-300">Engineering Intelligence. Building the Future.</div>
            </div>
            <div className="text-xs uppercase tracking-[0.26em] text-slate-400">© 2026 Marden AI Lab</div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md">
            <motion.div initial={{ opacity: 0, scale: 0.92, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.94 }} className="max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[28px] border border-cyan-400/25 bg-[#07101d] shadow-[0_0_40px_rgba(34,211,238,0.15)]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-200">Project Overview</div>
                <button type="button" onClick={() => setSelectedProject(null)} className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-100">
                  <X size={16} />
                </button>
              </div>

              <div className="grid gap-6 p-5 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <img src={selectedProject.image} alt={selectedProject.title} className="h-64 w-full rounded-[22px] object-cover border border-white/10" />
                  {selectedProject.video && (
                    <div className="mt-4 overflow-hidden rounded-[22px] border border-cyan-400/20 bg-black">
                      <video
                        src={selectedProject.video}
                        controls
                        playsInline
                        preload="metadata"
                        poster={selectedProject.image}
                        className="max-h-[360px] w-full object-contain"
                        aria-label={`${selectedProject.title} project video`}
                      />
                    </div>
                  )}
                  <h3 className="mt-5 text-2xl font-bold tracking-[-0.05em] text-white">{selectedProject.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{selectedProject.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tag) => (
                      <span key={tag} className="rounded-full border border-cyan-400/25 bg-cyan-500/10 px-2.5 py-1.5 text-[9px] uppercase tracking-[0.2em] text-cyan-100">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="rounded-[22px] border border-white/10 bg-slate-950/50 p-4">
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-300">Features</div>
                  <ul className="mt-4 space-y-3 text-sm text-slate-200">
                    <li className="flex gap-2"><ArrowRight size={16} className="mt-0.5 text-cyan-300" />Realtime computer vision feedback</li>
                    <li className="flex gap-2"><ArrowRight size={16} className="mt-0.5 text-cyan-300" />Fast user interface overlays</li>
                    <li className="flex gap-2"><ArrowRight size={16} className="mt-0.5 text-cyan-300" />Interactive AI / hardware integrations</li>
                    <li className="flex gap-2"><ArrowRight size={16} className="mt-0.5 text-cyan-300" />Custom research-grade prototyping</li>
                  </ul>

                  <div className="mt-6 flex flex-col gap-3">
                    <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/35 bg-cyan-500/10 px-4 py-3 text-[10px] uppercase tracking-[0.22em] text-cyan-100">
                      <Globe size={14} />
                      GitHub Link
                    </a>
                    <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-[10px] uppercase tracking-[0.22em] text-slate-100">
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                    <a href={selectedProject.downloadUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-[10px] uppercase tracking-[0.22em] text-slate-100">
                      <Download size={14} />
                      Download Project Files
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md">
            <motion.div initial={{ opacity: 0, scale: 0.92, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.94 }} className="w-full max-w-4xl overflow-hidden rounded-[30px] border border-cyan-400/25 bg-[#07101d] shadow-[0_0_40px_rgba(59,130,246,0.16)]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="text-xs uppercase tracking-[0.24em] text-cyan-200">Certificate Preview</div>
                <button type="button" onClick={() => setSelectedCertificate(null)} className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-100">
                  <X size={16} />
                </button>
              </div>
              <div className="p-4 sm:p-6">
                <img src={selectedCertificate.image} alt={selectedCertificate.title} className="w-full rounded-[22px] border border-white/10" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AdminDashboard() {
  const [token, setToken] = useState(() => localStorage.getItem('marden-admin-token') || '');
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [dashboard, setDashboard] = useState({
    projects: projectData,
    certificates: certificateData,
    skills: skillGroups,
    messages: [
      { id: 1, name: 'Alicia Jones', subject: 'AI dashboard concept', message: 'Interested in an autonomous vision analytics platform.' },
      { id: 2, name: 'Marcus Lee', subject: 'Embedded automation', message: 'Need a real-time sensor monitoring interface for our lab.' },
    ],
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (token) {
      localStorage.setItem('marden-admin-token', token);
    } else {
      localStorage.removeItem('marden-admin-token');
    }
  }, [token]);

  const login = async (event) => {
    event.preventDefault();
    setError('');

    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData),
    });

    const result = await response.json();
    if (!response.ok) {
      setError(result.message || 'Login failed');
      return;
    }

    setToken(result.token);
  };

  const logout = () => {
    setToken('');
    setLoginData({ username: '', password: '' });
  };

  if (!token) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050812] px-4">
        <div className="w-full max-w-md rounded-[32px] border border-cyan-400/20 bg-[#07101d] p-6 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
          <div className="mb-6 flex items-center gap-3">
            <span className="orb-mini" aria-hidden="true" />
            <div>
              <div className="text-lg font-semibold tracking-[0.35em] text-cyan-300">MARDEN</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-slate-400">AI LAB ADMIN</div>
            </div>
          </div>

          <h1 className="text-3xl font-black tracking-[-0.05em] text-white">Secure Access</h1>
          <p className="mt-2 text-sm text-slate-300">Use your administrator credentials to manage the lab.</p>

          <form onSubmit={login} className="mt-6 space-y-4">
            <label className="block text-xs uppercase tracking-[0.22em] text-slate-300">
              Username
              <input
                value={loginData.username}
                onChange={(event) => setLoginData({ ...loginData, username: event.target.value })}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/40 focus:outline-none"
                placeholder="admin"
              />
            </label>

            <label className="block text-xs uppercase tracking-[0.22em] text-slate-300">
              Password
              <input
                type="password"
                value={loginData.password}
                onChange={(event) => setLoginData({ ...loginData, password: event.target.value })}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/40 focus:outline-none"
                placeholder="••••••••"
              />
            </label>

            {error && <div className="rounded-xl border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-sm text-rose-200">{error}</div>}

            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-950 shadow-[0_0_25px_rgba(59,130,246,0.5)]">
              <Lock size={16} />
              Login
            </button>
          </form>

          <div className="mt-5 text-center text-xs uppercase tracking-[0.22em] text-slate-400">
            © 2026 Marden AI Lab
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050812] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="orb-mini" aria-hidden="true" />
            <div>
              <div className="text-lg font-semibold tracking-[0.35em] text-cyan-300">MARDEN</div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-slate-400">AI LAB ADMIN</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-100">
              <ArrowRight size={14} className="rotate-180" />
              Site
            </Link>
            <button type="button" onClick={logout} className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-100">
              Logout
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            { label: 'Projects', value: dashboard.projects.length },
            { label: 'Certificates', value: dashboard.certificates.length },
            { label: 'Skills', value: dashboard.skills.length },
            { label: 'Messages', value: dashboard.messages.length },
          ].map((card) => (
            <div key={card.label} className="glass-panel p-5">
              <div className="text-[10px] uppercase tracking-[0.24em] text-slate-400">{card.label}</div>
              <div className="mt-3 text-3xl font-black tracking-[-0.05em] text-white">{card.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_1fr]">
          <div className="glass-panel p-5">
            <h2 className="text-xl font-bold uppercase tracking-[0.2em] text-white">Add Project</h2>
            <div className="mt-5 space-y-4">
              <input className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/40 focus:outline-none" placeholder="Project title" />
              <textarea className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/40 focus:outline-none" rows="3" placeholder="Project description" />
              <input className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/40 focus:outline-none" placeholder="Category (AI, Hardware, Web, etc.)" />
              <button type="button" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-slate-950">
                Save Project
              </button>
            </div>
          </div>

          <div className="glass-panel p-5">
            <h2 className="text-xl font-bold uppercase tracking-[0.2em] text-white">Add Certificate</h2>
            <div className="mt-5 space-y-4">
              <input className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/40 focus:outline-none" placeholder="Certificate title" />
              <input className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/40 focus:outline-none" placeholder="Organization" />
              <input className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400/40 focus:outline-none" placeholder="Year or date" />
              <button type="button" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/35 bg-cyan-500/10 px-5 py-3 text-xs uppercase tracking-[0.22em] text-cyan-100">
                Save Certificate
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-panel p-5">
            <h2 className="text-xl font-bold uppercase tracking-[0.2em] text-white">Skills & Lab Inventory</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {dashboard.skills.flatMap((group) => group.items).map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-slate-900/60 px-2.5 py-1.5 text-[9px] uppercase tracking-[0.22em] text-slate-200">{item}</span>
              ))}
            </div>
          </div>

          <div className="glass-panel p-5">
            <h2 className="text-xl font-bold uppercase tracking-[0.2em] text-white">Contact Messages</h2>
            <div className="mt-5 space-y-3">
              {dashboard.messages.map((message) => (
                <div key={message.id} className="rounded-2xl border border-white/10 bg-slate-950/40 p-3">
                  <div className="text-sm font-semibold text-white">{message.name}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-cyan-200">{message.subject}</div>
                  <p className="mt-2 text-sm text-slate-300">{message.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

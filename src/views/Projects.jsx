import React, { useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../themeProvider";

import intervioImg from "../assets/projects/intervio.jpg";
import edubridgeImg from "../assets/projects/edubridge.jpg";
import navi360Img from "../assets/projects/navi360.jpg";
import journalaiImg from "../assets/projects/journalai.jpg";
import launchpadImg from "../assets/projects/launchpad.jpg";
import researchaiImg from "../assets/projects/researchai.jpg";
import sentimentImg from "../assets/projects/sentiment.jpg";

const projectData = [
  {
    id: 1,
    emoji: "🎙️",
    title: "IntervIO",
    subtitle: "AI Interview Simulation Platform",
    image: intervioImg,
    description:
      "Automated real-time voice and video interview platform powered by LLMs that conducts dynamic technical assessments and generates structured candidate scoring rubrics.",
    categories: ["genai", "fastapi"],
    tech: ["Python", "FastAPI", "PostgreSQL", "GenAI", "LLMs"],
    github: "https://github.com/shreya661/IntervIO",
    accent: "from-blue-600 to-indigo-700",
    tag: "AI Interview",
    tagBg: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    metric: "Real-time evaluation & feedback",
    problemSolved:
      "Traditional technical and behavioral mock interviews are expensive, hard to schedule, and subjective. IntervIO automates dynamic technical assessments, adapts questions in real-time based on candidate responses, and generates structured scoring rubrics.",
    architecture:
      "FastAPI Async Engine ➔ LLM Prompt Orchestration ➔ Audio/Video Evaluation Module ➔ PostgreSQL Candidate Rubrics",
    keyImpact:
      "Reduced interview evaluation turnaround to seconds with structured grading matrices across communication and technical correctness.",
  },
  {
    id: 2,
    emoji: "🎓",
    title: "EduBridge AI",
    subtitle: "Human-Like Academic Assistant",
    image: edubridgeImg,
    description:
      "Conversational AI tutoring platform designed to make 24/7 academic support natural, empathetic, and instantly accessible using state-of-the-art LLMs.",
    categories: ["genai", "fastapi"],
    tech: ["Python", "FastAPI", "LLMs", "GenAI", "NLP"],
    github: "https://github.com/shreya661/EduBridge-AI-Human-Like-School-Assistant",
    accent: "from-violet-600 to-purple-700",
    tag: "EdTech AI",
    tagBg: "bg-violet-500/10 text-violet-600 border-violet-500/20",
    metric: "Contextual Q&A & tutoring",
    problemSolved:
      "Students often get stuck on academic homework outside classroom hours without patient, step-by-step pedagogical help. EduBridge AI offers 24/7 conversational tutoring that breaks down complex syllabus questions into easily understood explanations.",
    architecture:
      "FastAPI REST Endpoints ➔ LangChain Conversational Memory ➔ Groq Llama-3 Inference ➔ Socratic Prompt Strategy",
    keyImpact:
      "Delivered natural, empathetic multi-turn academic dialogues with low-latency response times for high concurrent user sessions.",
  },
  {
    id: 3,
    emoji: "🧭",
    title: "NAVI 360",
    subtitle: "Full-Stack AI Career Platform",
    image: navi360Img,
    description:
      "Comprehensive career guidance system for students featuring interactive skill roadmaps, AI resume parsing, and personalized career pathways.",
    categories: ["fastapi", "fullstack"],
    tech: ["React", "JavaScript", "FastAPI", "GenAI", "CSS3"],
    github: "https://github.com/shreya661/navi-360",
    accent: "from-emerald-500 to-teal-700",
    tag: "Career Tech",
    tagBg: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    metric: "Dynamic career trajectory maps",
    problemSolved:
      "Graduating engineers struggle to identify market skill gaps and relevant roadmaps. NAVI 360 provides AI resume parsing, automated skill-gap analysis, and interactive milestone roadmaps.",
    architecture:
      "React Responsive Frontend ➔ FastAPI Backend Services ➔ Document Resume Parser ➔ Skill Taxonomy Matcher",
    keyImpact:
      "Created structured milestone roadmaps for tech roles, enabling students to track learning velocity and resume readiness.",
  },
  {
    id: 4,
    emoji: "📔",
    title: "Journal AI",
    subtitle: "Emotion-Aware Reflective Journaling",
    image: journalaiImg,
    description:
      "Mental wellbeing journaling application with emotion detection, sentiment analytics, and tailored mindful reflection recommendations.",
    categories: ["nlp", "fastapi"],
    tech: ["Python", "FastAPI", "React", "PostgreSQL", "NLP"],
    github: "https://github.com/shreya661/Journal_AI",
    accent: "from-rose-500 to-pink-700",
    tag: "Wellness AI",
    tagBg: "bg-rose-500/10 text-rose-600 border-rose-500/20",
    metric: "Sentiment analysis & daily insights",
    problemSolved:
      "Traditional journaling lacks actionable emotional insights, making it difficult for users to recognize chronic stress or wellbeing trends over time. Journal AI analyzes daily entries and offers empathetic mindful prompts.",
    architecture:
      "React Client ➔ FastAPI Microservice ➔ Emotion Classification Pipeline ➔ PostgreSQL Time-Series History",
    keyImpact:
      "Provided real-time sentiment polarity categorization and longitudinal emotional tracking with privacy-first encryption.",
  },
  {
    id: 5,
    emoji: "🚀",
    title: "LaunchPad",
    subtitle: "Intelligent Developer Productivity App",
    image: launchpadImg,
    description:
      "Developer productivity environment providing AI-assisted task decomposition, sprint milestone tracking, and workflow automation.",
    categories: ["fastapi", "genai"],
    tech: ["Python", "FastAPI", "GenAI", "PostgreSQL"],
    github: "https://github.com/shreya661/launchpad",
    accent: "from-orange-500 to-amber-600",
    tag: "DevOps AI",
    tagBg: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    metric: "Automated sprint decomposition",
    problemSolved:
      "Breaking complex software epics into manageable sub-tasks and estimating velocity requires heavy manual effort. LaunchPad uses generative AI to decompose project requirements into actionable sprint tickets.",
    architecture:
      "FastAPI Asynchronous API ➔ LLM Sprint Task Generator ➔ Milestone Velocity Tracker ➔ PostgreSQL Database",
    keyImpact:
      "Accelerated sprint milestone planning by 40% with automated dependency mapping and sub-task estimation.",
  },
  {
    id: 6,
    emoji: "🔬",
    title: "Research AI",
    subtitle: "Academic Paper Synthesis Assistant",
    image: researchaiImg,
    description:
      "Autonomous research synthesizer that digests dense scientific literature, performs vector retrieval with FAISS, and outputs structured takeaways.",
    categories: ["genai", "nlp"],
    tech: ["Python", "LangChain", "LLMs", "FAISS", "Embeddings"],
    github: "https://github.com/shreya661/researchai",
    accent: "from-sky-500 to-cyan-700",
    tag: "Research AI",
    tagBg: "bg-sky-500/10 text-sky-600 border-sky-500/20",
    metric: "FAISS vector retrieval & synthesis",
    problemSolved:
      "Synthesizing hundreds of pages of academic literature to extract methodology, key contributions, and citations is highly time-consuming. Research AI indexes papers semantically and answers contextual research queries.",
    architecture:
      "PDF Ingestion & Chunking ➔ HuggingFace Embedding Pipeline ➔ FAISS Vector Database ➔ LangChain RAG & LLM Synthesis",
    keyImpact:
      "Sub-second vector retrieval over dense scientific papers with accurate source citation and zero hallucinated references.",
  },
  {
    id: 7,
    emoji: "📊",
    title: "Sentiment NLP",
    subtitle: "Social Media Sentiment Engine",
    image: sentimentImg,
    description:
      "High-throughput NLP pipeline that analyzes social media streams, classifies polarity and sentiment distributions, and renders visual analytics.",
    categories: ["nlp"],
    tech: ["Python", "Scikit-Learn", "Pandas", "NLP", "Matplotlib"],
    github: "https://github.com/shreya661/social_media_sentiment_analysis-",
    accent: "from-fuchsia-500 to-purple-600",
    tag: "NLP Analytics",
    tagBg: "bg-fuchsia-500/10 text-fuchsia-600 border-fuchsia-500/20",
    metric: "Real-time polarity classification",
    problemSolved:
      "Unstructured social media feedback contains vital customer sentiment signals that cannot be parsed manually at scale. This pipeline classifies tweets and posts into positive, negative, and neutral distributions.",
    architecture:
      "Text Cleaning & Lemmatization ➔ TF-IDF Vectorization ➔ Scikit-Learn Multiclass Classifier ➔ Distribution Dashboard",
    keyImpact:
      "High-accuracy classification across noisy, slang-heavy user feedback with real-time sentiment distribution charting.",
  },
];

const categories = [
  { id: "all", label: "All Projects (7)", count: 7 },
  { id: "genai", label: "Generative AI & LLMs", count: 4 },
  { id: "fastapi", label: "FastAPI & Backends", count: 5 },
  { id: "nlp", label: "NLP & Analytics", count: 3 },
];

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

// Spotlight Interactive Card Component
const SpotlightCard = ({ project, darkMode, onOpenCaseStudy }) => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setMousePos({ x: -1000, y: -1000 });
      }}
      className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1 ${
        darkMode
          ? "bg-white border-slate-200/90 hover:border-indigo-400"
          : "bg-slate-900/80 border-slate-800 hover:border-indigo-500/50 backdrop-blur-sm"
      }`}
    >
      {/* Dynamic Cursor Spotlight Border Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.22), transparent 70%)`,
        }}
      />

      <div>
        {/* 16:9 Thumbnail Header */}
        <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

          {/* Floating Category Badge */}
          <div className="absolute top-3 left-3 z-20">
            <span
              className={`text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md border ${
                darkMode ? "bg-white/90 text-indigo-700 border-indigo-200" : "bg-black/60 text-indigo-300 border-indigo-500/30"
              }`}
            >
              {project.tag}
            </span>
          </div>

          {/* Metric Pill */}
          <div className="absolute bottom-2.5 left-3 right-3 z-20 flex items-center justify-between">
            <span className="text-[11px] font-medium text-slate-200 backdrop-blur-md bg-black/70 px-2.5 py-1 rounded-lg border border-white/10 flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {project.metric}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xl">{project.emoji}</span>
            <h3 className={`text-lg sm:text-xl font-bold tracking-tight ${darkMode ? "text-slate-900" : "text-white"}`}>
              {project.title}
            </h3>
          </div>
          <p className={`text-xs font-semibold uppercase tracking-wider mb-3 bg-gradient-to-r ${project.accent} bg-clip-text text-transparent`}>
            {project.subtitle}
          </p>

          <p
            className={`text-xs sm:text-sm leading-relaxed mb-4 ${darkMode ? "text-slate-600" : "text-slate-300"}`}
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className={`text-[11px] px-2.5 py-0.5 rounded-full font-medium ${
                  darkMode
                    ? "bg-slate-100 text-slate-700 border border-slate-200/80"
                    : "bg-slate-800 text-slate-300 border border-slate-700/80"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer: Quick Case Study + GitHub */}
      <div className="p-5 sm:p-6 pt-0 space-y-2 z-20">
        <button
          onClick={() => onOpenCaseStudy(project)}
          className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all duration-200 ${
            darkMode
              ? "bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200 shadow-sm"
              : "bg-indigo-600/15 hover:bg-indigo-600/25 text-indigo-300 border-indigo-500/30"
          }`}
        >
          <svg className="w-3.5 h-3.5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Architecture &amp; Deep-Dive</span>
        </button>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all duration-200 active:scale-[0.98] ${
            darkMode
              ? "bg-slate-900 text-white hover:bg-slate-800 border-slate-900 shadow-md shadow-slate-900/10"
              : "bg-slate-800 text-slate-200 hover:bg-slate-700 border-slate-700 shadow-md"
          }`}
        >
          <div className="flex items-center gap-2">
            <GitHubIcon />
            <span>GitHub Repository</span>
          </div>
          <svg className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

// Architecture & Case Study Modal Component
const CaseStudyModal = ({ project, darkMode, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className={`relative w-full max-w-2xl rounded-3xl border shadow-2xl overflow-hidden z-10 my-8 ${
          darkMode ? "bg-white border-slate-200 text-slate-900" : "bg-slate-900 border-slate-800 text-white"
        }`}
      >
        {/* Modal Header */}
        <div className={`p-6 border-b flex items-start justify-between gap-4 ${darkMode ? "border-slate-100 bg-slate-50/50" : "border-slate-800/80 bg-slate-950/40"}`}>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl bg-indigo-500/10 border border-indigo-500/20">
              {project.emoji}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                  {project.tag}
                </span>
              </div>
              <p className={`text-xs font-semibold uppercase tracking-wider bg-gradient-to-r ${project.accent} bg-clip-text text-transparent`}>
                {project.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Case Study"
            className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all ${
              darkMode ? "bg-white hover:bg-slate-100 border-slate-200 text-slate-600" : "bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300"
            }`}
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Problem Statement */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2 flex items-center gap-1.5">
              <span>🎯</span> Problem Statement &amp; Motivation
            </h4>
            <p className={`text-sm leading-relaxed ${darkMode ? "text-slate-600" : "text-slate-300"}`}>
              {project.problemSolved}
            </p>
          </div>

          {/* System Architecture */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2 flex items-center gap-1.5">
              <span>⚙️</span> System Architecture Pipeline
            </h4>
            <div className={`p-4 rounded-2xl border font-mono text-xs leading-relaxed ${
              darkMode ? "bg-slate-50 border-slate-200 text-slate-800" : "bg-slate-950 border-slate-800 text-slate-300"
            }`}>
              {project.architecture}
            </div>
          </div>

          {/* Key Engineering Impact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2 flex items-center gap-1.5">
              <span>📈</span> Engineering Impact &amp; Metrics
            </h4>
            <div className={`p-4 rounded-2xl border flex items-start gap-3 ${
              darkMode ? "bg-emerald-50/60 border-emerald-200/80 text-emerald-900" : "bg-emerald-950/30 border-emerald-800/60 text-emerald-300"
            }`}>
              <span className="text-emerald-500 text-lg mt-0.5">✓</span>
              <p className="text-xs sm:text-sm font-medium leading-relaxed">
                {project.keyImpact}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
              Technologies &amp; Libraries Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className={`text-xs px-3 py-1 rounded-xl font-medium border ${
                    darkMode ? "bg-slate-100 text-slate-800 border-slate-200" : "bg-slate-800 text-slate-200 border-slate-700"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className={`p-6 border-t flex flex-wrap items-center justify-between gap-4 ${
          darkMode ? "border-slate-100 bg-slate-50/50" : "border-slate-800/80 bg-slate-950/40"
        }`}>
          <button
            onClick={onClose}
            className={`px-4 py-2 rounded-xl text-xs font-semibold ${
              darkMode ? "text-slate-600 hover:text-slate-900" : "text-slate-400 hover:text-white"
            }`}
          >
            Close Preview
          </button>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-500/25 transition-all"
          >
            <GitHubIcon />
            <span>Open Repository on GitHub</span>
            <svg className="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectData.filter((p) => {
    if (activeCategory === "all") return true;
    return p.categories.includes(activeCategory);
  });

  return (
    <div
      id="projects"
      className={`relative py-24 transition-colors duration-300 ${
        darkMode ? "bg-white text-slate-900" : "bg-slate-900/40 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 border shadow-sm ${
            darkMode ? "bg-indigo-50 text-indigo-700 border-indigo-200" : "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            FEATURED BUILDS &amp; REPOSITORIES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Production <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">AI &amp; Machine Learning Systems</span>
          </h2>
          <p className={`mt-4 text-sm sm:text-base max-w-2xl mx-auto ${darkMode ? "text-slate-600" : "text-slate-400"}`}>
            7 full-stack AI applications spanning LLM candidate evaluation, autonomous tutoring, emotion intelligence, and vector synthesis.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                    isActive
                      ? "bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/25"
                      : darkMode
                      ? "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200/70"
                      : "bg-slate-800/80 text-slate-300 border-slate-700/80 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Dynamic Filtered Grid with Framer Motion AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <SpotlightCard
                key={project.id}
                project={project}
                darkMode={darkMode}
                onOpenCaseStudy={(proj) => setSelectedProject(proj)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Slide-over Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            darkMode={darkMode}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
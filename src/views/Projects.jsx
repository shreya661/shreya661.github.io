import React, { useContext, useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
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
    tech: ["Python", "FastAPI", "PostgreSQL", "GenAI", "LLMs"],
    github: "https://github.com/shreya661/IntervIO",
    accent: "from-blue-600 to-indigo-700",
    tag: "AI Interview",
    tagBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    metric: "Real-time evaluation & feedback",
  },
  {
    id: 2,
    emoji: "🎓",
    title: "EduBridge AI",
    subtitle: "Human-Like Academic Assistant",
    image: edubridgeImg,
    description:
      "Conversational AI tutoring platform designed to make 24/7 academic support natural, empathetic, and instantly accessible using state-of-the-art LLMs.",
    tech: ["Python", "FastAPI", "LLMs", "GenAI", "NLP"],
    github: "https://github.com/shreya661/EduBridge-AI-Human-Like-School-Assistant",
    accent: "from-violet-600 to-purple-700",
    tag: "EdTech AI",
    tagBg: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
    metric: "Contextual Q&A & tutoring",
  },
  {
    id: 3,
    emoji: "🧭",
    title: "NAVI 360",
    subtitle: "Full-Stack AI Career Platform",
    image: navi360Img,
    description:
      "Comprehensive career guidance system for students featuring interactive skill roadmaps, AI resume parsing, and personalized career pathways.",
    tech: ["React", "JavaScript", "FastAPI", "GenAI", "CSS3"],
    github: "https://github.com/shreya661/navi-360",
    accent: "from-emerald-500 to-teal-700",
    tag: "Career Tech",
    tagBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    metric: "Dynamic career trajectory maps",
  },
  {
    id: 4,
    emoji: "📔",
    title: "Journal AI",
    subtitle: "Emotion-Aware Reflective Journaling",
    image: journalaiImg,
    description:
      "Mental wellbeing journaling application with emotion detection, sentiment analytics, and tailored mindful reflection recommendations.",
    tech: ["Python", "FastAPI", "React", "PostgreSQL", "NLP"],
    github: "https://github.com/shreya661/Journal_AI",
    accent: "from-rose-500 to-pink-700",
    tag: "Wellness AI",
    tagBg: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
    metric: "Sentiment analysis & daily insights",
  },
  {
    id: 5,
    emoji: "🚀",
    title: "LaunchPad",
    subtitle: "Intelligent Developer Productivity App",
    image: launchpadImg,
    description:
      "Developer productivity environment providing AI-assisted task decomposition, sprint milestone tracking, and workflow automation.",
    tech: ["Python", "FastAPI", "GenAI", "PostgreSQL"],
    github: "https://github.com/shreya661/launchpad",
    accent: "from-orange-500 to-amber-600",
    tag: "DevOps AI",
    tagBg: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
    metric: "Automated sprint decomposition",
  },
  {
    id: 6,
    emoji: "🔬",
    title: "Research AI",
    subtitle: "Academic Paper Synthesis Assistant",
    image: researchaiImg,
    description:
      "Autonomous research synthesizer that digests dense scientific literature, performs vector retrieval with FAISS, and outputs structured takeaways.",
    tech: ["Python", "LangChain", "LLMs", "FAISS", "Embeddings"],
    github: "https://github.com/shreya661/researchai",
    accent: "from-sky-500 to-cyan-700",
    tag: "Research AI",
    tagBg: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
    metric: "FAISS vector retrieval & synthesis",
  },
  {
    id: 7,
    emoji: "📊",
    title: "Sentiment NLP",
    subtitle: "Social Media Sentiment Engine",
    image: sentimentImg,
    description:
      "High-throughput NLP pipeline that analyzes social media streams, classifies polarity and sentiment distributions, and renders visual analytics.",
    tech: ["Python", "Scikit-Learn", "Pandas", "NLP", "Matplotlib"],
    github: "https://github.com/shreya661/social_media_sentiment_analysis-",
    accent: "from-fuchsia-500 to-purple-600",
    tag: "NLP Analytics",
    tagBg: "bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 border-fuchsia-500/20",
    metric: "Real-time polarity classification",
  },
];

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ProjectCard = ({ project, darkMode, isGrid, onLinkClick }) => (
  <div
    className={`group ${
      isGrid ? "w-full" : "flex-shrink-0 w-80 sm:w-88"
    } select-none rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl flex flex-col justify-between ${
      darkMode
        ? "bg-white border-slate-200/90 hover:border-indigo-400 shadow-md"
        : "bg-slate-900/80 border-slate-800 hover:border-indigo-500/50 shadow-xl backdrop-blur-sm"
    }`}
  >
    <div>
      {/* 16:9 Mockup Image Container */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
        
        {/* Floating Category Tag */}
        <div className="absolute top-3 left-3">
          <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md border ${project.tagBg}`}>
            {project.tag}
          </span>
        </div>

        {/* Live Metric / Capability pill */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
          <span className="text-[11px] font-medium text-slate-200 backdrop-blur-md bg-black/60 px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            {project.metric}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
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
        <div className="flex flex-wrap gap-1.5 mb-2">
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

    {/* Card Bottom CTA Button */}
    <div className="p-5 sm:p-6 pt-0">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          if (onLinkClick && !onLinkClick()) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
        className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-700/80 dark:border-slate-600/80 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
      >
        <div className="flex items-center gap-2">
          <GitHubIcon />
          <span>Explore Repository</span>
        </div>
        <svg className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </div>
);

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // View Mode: 'grid' (static, no sliding) or 'slider' (manual navigation)
  const [viewMode, setViewMode] = useState("grid");

  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const scrollPosRef = useRef(0);
  const targetScrollRef = useRef(0);
  const velocityRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const rafRef = useRef(null);

  const [isGrabbing, setIsGrabbing] = useState(false);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const getMaxScroll = useCallback(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return 0;
    return Math.max(0, track.scrollWidth - container.clientWidth);
  }, []);

  const animate = useCallback(() => {
    if (viewMode !== "slider") return;
    const track = trackRef.current;
    if (!track) {
      rafRef.current = requestAnimationFrame(animate);
      return;
    }

    const maxScroll = getMaxScroll();

    if (isDraggingRef.current) {
      scrollPosRef.current += (targetScrollRef.current - scrollPosRef.current) * 0.45;
    } else {
      if (Math.abs(velocityRef.current) > 0.05) {
        targetScrollRef.current += velocityRef.current;
        velocityRef.current *= 0.92;
      } else {
        velocityRef.current = 0;
      }

      if (targetScrollRef.current < 0) {
        targetScrollRef.current = 0;
        velocityRef.current = 0;
      } else if (targetScrollRef.current > maxScroll) {
        targetScrollRef.current = maxScroll;
        velocityRef.current = 0;
      }

      scrollPosRef.current += (targetScrollRef.current - scrollPosRef.current) * 0.15;
    }

    const clampedPos = Math.max(0, Math.min(maxScroll, scrollPosRef.current));
    scrollPosRef.current = clampedPos;

    track.style.transform = `translate3d(-${clampedPos}px, 0, 0)`;

    setAtStart(clampedPos <= 10);
    setAtEnd(maxScroll > 0 && clampedPos >= maxScroll - 10);

    if (maxScroll > 0) {
      const idx = Math.min(
        projectData.length - 1,
        Math.max(0, Math.round((clampedPos / maxScroll) * (projectData.length - 1)))
      );
      setActiveIndex(idx);
    }

    rafRef.current = requestAnimationFrame(animate);
  }, [getMaxScroll, viewMode]);

  useEffect(() => {
    if (viewMode === "slider") {
      rafRef.current = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate, viewMode]);

  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    setIsGrabbing(true);
    startXRef.current = e.clientX;
    lastXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    dragStartScrollRef.current = scrollPosRef.current;
    velocityRef.current = 0;

    if (containerRef.current) {
      try {
        containerRef.current.setPointerCapture(e.pointerId);
      } catch {
        // Safe fallback
      }
    }
  };

  const handlePointerMove = (e) => {
    const maxScroll = getMaxScroll();
    if (maxScroll <= 0 || !isDraggingRef.current) return;

    const currentX = e.clientX;
    const deltaX = currentX - lastXRef.current;
    const totalDelta = currentX - startXRef.current;
    const now = performance.now();
    const timeDelta = Math.max(now - lastTimeRef.current, 8);

    if (Math.abs(totalDelta) > 6) {
      hasDraggedRef.current = true;
    }

    const newTarget = dragStartScrollRef.current - totalDelta;
    targetScrollRef.current = Math.max(0, Math.min(maxScroll, newTarget));
    velocityRef.current = -(deltaX / timeDelta) * 16;

    lastXRef.current = currentX;
    lastTimeRef.current = now;
  };

  const handlePointerUp = (e) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsGrabbing(false);

    try {
      if (containerRef.current && containerRef.current.hasPointerCapture(e.pointerId)) {
        containerRef.current.releasePointerCapture(e.pointerId);
      }
    } catch {
      // Safe fallback
    }

    if (velocityRef.current > 20) velocityRef.current = 20;
    if (velocityRef.current < -20) velocityRef.current = -20;
  };

  const handlePointerLeave = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      setIsGrabbing(false);
    }
  };

  const handleWheel = (e) => {
    if (viewMode !== "slider") return;
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) > 1) {
      const maxScroll = getMaxScroll();
      targetScrollRef.current = Math.max(0, Math.min(maxScroll, targetScrollRef.current + delta * 0.4));
    }
  };

  const stepLeft = () => {
    const cardStep = 344;
    targetScrollRef.current = Math.max(0, targetScrollRef.current - cardStep);
  };

  const stepRight = () => {
    const maxScroll = getMaxScroll();
    const cardStep = 344;
    targetScrollRef.current = Math.min(maxScroll, targetScrollRef.current + cardStep);
  };

  const jumpToIndex = (index) => {
    const maxScroll = getMaxScroll();
    if (maxScroll <= 0) return;
    const ratio = index / (projectData.length - 1);
    targetScrollRef.current = ratio * maxScroll;
  };

  const canClickLink = () => !hasDraggedRef.current;

  return (
    <div
      id="projects"
      className={`relative py-20 transition-colors duration-300 ${
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            FEATURED BUILDS &amp; REPOSITORIES
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Production <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">AI &amp; Machine Learning Systems</span>
          </h2>
          <p className={`mt-4 text-sm sm:text-base max-w-2xl mx-auto ${darkMode ? "text-slate-600" : "text-slate-400"}`}>
            7 full-stack AI applications spanning LLM candidate evaluation, autonomous tutoring, emotion intelligence, and vector synthesis.
          </p>

          {/* View Mode Switcher: Grid (Static) vs Slider */}
          <div className="inline-flex items-center gap-1.5 mt-8 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                viewMode === "grid"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" />
              </svg>
              <span>Grid View (All 7 Stationary)</span>
            </button>
            <button
              onClick={() => setViewMode("slider")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                viewMode === "slider"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h12v2H6v-2zm-2-4h16v2H4v-2zm2-8h12v2H6V7zm-2-4h16v2H4V3z" />
              </svg>
              <span>Carousel View (Manual Controls)</span>
            </button>
          </div>
        </motion.div>

        {/* MODE 1: STATIC GRID VIEW (Zero sliding, clean responsive layout) */}
        {viewMode === "grid" && (
          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projectData.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  darkMode={darkMode}
                  isGrid={true}
                  onLinkClick={() => true}
                />
              ))}
            </div>
          </div>
        )}

        {/* MODE 2: CAROUSEL VIEW (Manual only - NO auto slide) */}
        {viewMode === "slider" && (
          <div className="relative group max-w-full px-2 sm:px-6 mt-6">
            {/* Navigation Arrow Left */}
            <button
              onClick={stepLeft}
              disabled={atStart}
              aria-label="Previous Projects"
              className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md border shadow-xl transition-all duration-300 ${
                atStart
                  ? "opacity-20 cursor-not-allowed pointer-events-none"
                  : "opacity-90 hover:opacity-100 hover:scale-105 active:scale-95"
              } ${
                darkMode
                  ? "bg-white/90 border-slate-200 text-slate-800 hover:bg-white"
                  : "bg-slate-900/90 border-slate-700 text-white hover:bg-slate-800"
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Navigation Arrow Right */}
            <button
              onClick={stepRight}
              disabled={atEnd}
              aria-label="Next Projects"
              className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md border shadow-xl transition-all duration-300 ${
                atEnd
                  ? "opacity-20 cursor-not-allowed pointer-events-none"
                  : "opacity-90 hover:opacity-100 hover:scale-105 active:scale-95"
              } ${
                darkMode
                  ? "bg-white/90 border-slate-200 text-slate-800 hover:bg-white"
                  : "bg-slate-900/90 border-slate-700 text-white hover:bg-slate-800"
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Draggable Track (Manual only) */}
            <div
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onPointerLeave={handlePointerLeave}
              onWheel={handleWheel}
              style={{
                overflow: "hidden",
                width: "100%",
                cursor: isGrabbing ? "grabbing" : "grab",
                paddingTop: "16px",
                paddingBottom: "24px",
                touchAction: "pan-y",
                maskImage: "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
              }}
            >
              <div
                ref={trackRef}
                style={{
                  display: "flex",
                  gap: "24px",
                  width: "max-content",
                  willChange: "transform",
                  userSelect: "none",
                  paddingLeft: "24px",
                  paddingRight: "24px",
                }}
              >
                {projectData.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    darkMode={darkMode}
                    isGrid={false}
                    onLinkClick={canClickLink}
                  />
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {projectData.map((project, idx) => (
                <button
                  key={project.id}
                  onClick={() => jumpToIndex(idx)}
                  title={`${project.title} (${idx + 1}/7)`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === idx
                      ? "w-8 bg-indigo-600 dark:bg-indigo-500"
                      : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;

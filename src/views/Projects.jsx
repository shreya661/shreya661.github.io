import React, { useContext, useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../themeProvider";

const projectData = [
  {
    id: 1,
    emoji: "🎙️",
    title: "IntervIO",
    subtitle: "AI Interview Platform",
    description:
      "Automated AI interview simulation with real-time LLM response evaluation and structured candidate feedback.",
    tech: ["Python", "FastAPI", "PostgreSQL", "GenAI"],
    github: "https://github.com/shreya661/IntervIO",
    accent: "from-blue-600 to-indigo-700",
    tag: "AI Interview",
    tagBg: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    emoji: "🎓",
    title: "EduBridge AI",
    subtitle: "AI School Assistant",
    description:
      "Human-like AI tutoring platform making academic support conversational and instantly accessible via LLMs.",
    tech: ["Python", "FastAPI", "LLMs", "GenAI"],
    github: "https://github.com/shreya661/EduBridge-AI-Human-Like-School-Assistant",
    accent: "from-violet-600 to-purple-700",
    tag: "EdTech AI",
    tagBg: "bg-violet-100 text-violet-700",
  },
  {
    id: 3,
    emoji: "🧭",
    title: "NAVI 360",
    subtitle: "AI Career Platform",
    description:
      "Full-stack student career guidance with interactive skill roadmaps, AI resume feedback, and personalized paths.",
    tech: ["React", "JavaScript", "FastAPI", "GenAI"],
    github: "https://github.com/shreya661/navi-360",
    accent: "from-emerald-500 to-teal-700",
    tag: "Career Tech",
    tagBg: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 4,
    emoji: "📔",
    title: "Journal AI",
    subtitle: "Emotion-Aware Journaling",
    description:
      "Full-stack AI journaling app tracking emotional wellbeing, detecting sentiment, and providing daily mindful insights.",
    tech: ["Python", "FastAPI", "React", "PostgreSQL"],
    github: "https://github.com/shreya661/Journal_AI",
    accent: "from-rose-500 to-pink-700",
    tag: "Wellness AI",
    tagBg: "bg-rose-100 text-rose-700",
  },
  {
    id: 5,
    emoji: "🚀",
    title: "LaunchPad",
    subtitle: "AI Productivity App",
    description:
      "AI developer productivity platform with intelligent task decomposition, sprint analytics, and deployment tracking.",
    tech: ["Python", "FastAPI", "GenAI"],
    github: "https://github.com/shreya661/launchpad",
    accent: "from-orange-500 to-amber-600",
    tag: "DevOps AI",
    tagBg: "bg-orange-100 text-orange-700",
  },
  {
    id: 6,
    emoji: "🔬",
    title: "Research AI",
    subtitle: "Academic Paper Synthesis",
    description:
      "AI research assistant that explores, summarizes, and synthesizes academic papers using LangChain and FAISS.",
    tech: ["Python", "LangChain", "LLMs", "FAISS"],
    github: "https://github.com/shreya661/researchai",
    accent: "from-sky-500 to-cyan-700",
    tag: "Research AI",
    tagBg: "bg-sky-100 text-sky-700",
  },
  {
    id: 7,
    emoji: "📊",
    title: "Sentiment NLP",
    subtitle: "Social Media Analytics",
    description:
      "Real-time sentiment classification pipeline for social media with NLP-driven insights and visual dashboards.",
    tech: ["Python", "Scikit-Learn", "Pandas", "NLP"],
    github: "https://github.com/shreya661/social_media_sentiment_analysis-",
    accent: "from-fuchsia-500 to-purple-600",
    tag: "NLP Analytics",
    tagBg: "bg-fuchsia-100 text-fuchsia-700",
  },
];

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ProjectCard = ({ project, darkMode, isGrid, onLinkClick }) => (
  <div
    className={`${
      isGrid ? "w-full" : "flex-shrink-0 w-80"
    } select-none rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl flex flex-col justify-between ${
      darkMode
        ? "bg-white border-gray-200 hover:border-blue-400"
        : "bg-gray-800 border-gray-700 hover:border-gray-500"
    }`}
    style={{
      boxShadow: darkMode
        ? "0 8px 30px rgba(0,0,0,0.08)"
        : "0 8px 30px rgba(0,0,0,0.4)",
    }}
  >
    <div>
      <div className={`h-1.5 w-full bg-gradient-to-r ${project.accent}`} />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl">{project.emoji}</span>
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${
              darkMode ? project.tagBg : "bg-gray-700 text-gray-200"
            }`}
          >
            {project.tag}
          </span>
        </div>
        <h3 className={`text-lg font-bold mb-1 ${darkMode ? "text-gray-900" : "text-white"}`}>
          {project.title}
        </h3>
        <p className={`text-xs font-semibold mb-3 bg-gradient-to-r ${project.accent} bg-clip-text text-transparent`}>
          {project.subtitle}
        </p>
        <p
          className={`text-xs leading-relaxed mb-4 ${darkMode ? "text-gray-600" : "text-gray-300"}`}
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                darkMode
                  ? "bg-gray-100 text-gray-700 border border-gray-200"
                  : "bg-gray-700 text-gray-300 border border-gray-600"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="p-6 pt-0">
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
        className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r ${project.accent} hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200`}
      >
        <GitHubIcon />
        View on GitHub
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

  // Pointer Down (for slider mode)
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
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="pt-16 pb-16 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 px-4"
        >
          <h2 className="text-5xl font-bold">
            <span className="border-b-4 border-blue-500 p-2 inline-block">Projects</span>
          </h2>
          <p className={`mt-5 text-base max-w-xl mx-auto ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
            7 AI-powered applications — built end-to-end with Python, LLMs, FastAPI &amp; more.
          </p>

          {/* View Mode Switcher: Grid (Static) vs Slider */}
          <div className="inline-flex items-center gap-1.5 mt-6 p-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-100/70 dark:bg-gray-800/70 backdrop-blur-sm">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                viewMode === "grid"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" />
              </svg>
              Grid View (All 7)
            </button>
            <button
              onClick={() => setViewMode("slider")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                viewMode === "slider"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19h12v2H6v-2zm-2-4h16v2H4v-2zm2-8h12v2H6V7zm-2-4h16v2H4V3z" />
              </svg>
              Carousel View
            </button>
          </div>
        </motion.div>

        {/* MODE 1: STATIC GRID VIEW (Zero sliding, clean responsive layout) */}
        {viewMode === "grid" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="relative group max-w-full px-2 sm:px-6 mt-4">
            {/* Navigation Arrow Left */}
            <button
              onClick={stepLeft}
              disabled={atStart}
              aria-label="Previous Projects"
              className={`absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md border shadow-xl transition-all duration-300 ${
                atStart
                  ? "opacity-30 cursor-not-allowed pointer-events-none"
                  : "opacity-90 hover:opacity-100 hover:scale-110 active:scale-95"
              } ${
                darkMode
                  ? "bg-white/90 border-gray-200 text-gray-800 hover:bg-white shadow-gray-300/50"
                  : "bg-gray-800/90 border-gray-700 text-white hover:bg-gray-800 shadow-black/50"
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
              className={`absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md border shadow-xl transition-all duration-300 ${
                atEnd
                  ? "opacity-30 cursor-not-allowed pointer-events-none"
                  : "opacity-90 hover:opacity-100 hover:scale-110 active:scale-95"
              } ${
                darkMode
                  ? "bg-white/90 border-gray-200 text-gray-800 hover:bg-white shadow-gray-300/50"
                  : "bg-gray-800/90 border-gray-700 text-white hover:bg-gray-800 shadow-black/50"
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
                maskImage: "linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)",
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
            <div className="flex items-center justify-center gap-2 mt-2 mb-2">
              {projectData.map((project, idx) => (
                <button
                  key={project.id}
                  onClick={() => jumpToIndex(idx)}
                  title={`${project.title} (${idx + 1}/7)`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === idx
                      ? "w-8 bg-blue-600 dark:bg-blue-500"
                      : "w-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
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

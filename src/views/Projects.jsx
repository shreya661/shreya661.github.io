import React, { useContext, useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../themeProvider";

const projectData = [
  {
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

// Triplicate for seamless continuous infinite loop in both directions
const allCards = [...projectData, ...projectData, ...projectData];

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ProjectCard = ({ project, darkMode, onLinkClick }) => (
  <div
    className={`flex-shrink-0 w-80 select-none rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl ${
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

  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const singleSetWidthRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const rafRef = useRef(null);
  const [isGrabbing, setIsGrabbing] = useState(false);

  // Measure exact single set width
  const measureSetWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track || !track.children || track.children.length < projectData.length + 1) return;
    const firstChild = track.children[0];
    const setEndChild = track.children[projectData.length];
    if (firstChild && setEndChild) {
      const width = setEndChild.offsetLeft - firstChild.offsetLeft;
      if (width > 0) {
        singleSetWidthRef.current = width;
      }
    }
  }, []);

  // Continuous animation loop with inertia and seamless wrapping
  const animate = useCallback(() => {
    const track = trackRef.current;
    const singleSet = singleSetWidthRef.current;

    if (track && singleSet > 0) {
      // If user is not dragging, apply inertia friction
      if (!isDraggingRef.current) {
        if (Math.abs(velocityRef.current) > 0.02) {
          offsetRef.current += velocityRef.current;
          velocityRef.current *= 0.94; // smooth friction
        } else {
          velocityRef.current = 0;
        }
      }

      // Seamless infinite continuous loop in both directions
      if (offsetRef.current >= singleSet * 2) {
        offsetRef.current -= singleSet;
      } else if (offsetRef.current < singleSet) {
        offsetRef.current += singleSet;
      }

      track.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    measureSetWidth();
    window.addEventListener("resize", measureSetWidth);

    // Initial offset in the middle set
    setTimeout(() => {
      measureSetWidth();
      if (singleSetWidthRef.current > 0) {
        offsetRef.current = singleSetWidthRef.current;
        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
        }
      }
    }, 100);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", measureSetWidth);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate, measureSetWidth]);

  // Pointer Down (Mouse or Touch)
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    setIsGrabbing(true);
    startXRef.current = e.clientX;
    lastXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;

    if (containerRef.current) {
      containerRef.current.setPointerCapture(e.pointerId);
    }
  };

  // Pointer Move: Both active drag and cursor-driven scrub
  const handlePointerMove = (e) => {
    if (isDraggingRef.current) {
      const currentX = e.clientX;
      const deltaX = currentX - lastXRef.current;
      const now = performance.now();
      const timeDelta = Math.max(now - lastTimeRef.current, 8);

      if (Math.abs(currentX - startXRef.current) > 6) {
        hasDraggedRef.current = true;
      }

      // Move cards directly with cursor
      offsetRef.current -= deltaX;

      // Track velocity for inertia release (px per frame ~16ms)
      velocityRef.current = -(deltaX / timeDelta) * 16;

      lastXRef.current = currentX;
      lastTimeRef.current = now;
    } else {
      // Hover control: moving the cursor horizontally moves the cards
      if (e.movementX && Math.abs(e.movementX) > 0.5) {
        // Pushing cursor left/right smoothly steers the continuous cards
        velocityRef.current = -e.movementX * 0.45;
      }
    }
  };

  // Pointer Up or Leave
  const handlePointerUp = (e) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsGrabbing(false);

    try {
      if (containerRef.current && containerRef.current.hasPointerCapture(e.pointerId)) {
        containerRef.current.releasePointerCapture(e.pointerId);
      }
    } catch {
      // Ignore if pointer capture already released
    }

    // Cap maximum throw velocity for smooth glide
    if (velocityRef.current > 24) velocityRef.current = 24;
    if (velocityRef.current < -24) velocityRef.current = -24;
  };

  // Mouse wheel horizontal scroll support
  const handleWheel = (e) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) > 1) {
      velocityRef.current = delta * 0.25;
    }
  };

  // Chevron step button handlers (step left / right by one card width)
  const stepLeft = () => {
    velocityRef.current = -12;
  };

  const stepRight = () => {
    velocityRef.current = 12;
  };

  const canClickLink = () => !hasDraggedRef.current;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="pt-16 pb-16 relative overflow-hidden">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 px-4"
        >
          <h2 className="text-5xl font-bold">
            <span className="border-b-4 border-blue-500 p-2 inline-block">Projects</span>
          </h2>
          <p className={`mt-5 text-base max-w-xl mx-auto ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
            7 AI-powered applications — built end-to-end with Python, LLMs, FastAPI &amp; more.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative group max-w-full">
          {/* Navigation Arrow Left */}
          <button
            onClick={stepLeft}
            aria-label="Previous Projects"
            className={`absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md border shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 ${
              darkMode
                ? "bg-white/80 border-gray-200 text-gray-800 hover:bg-white shadow-gray-300/50"
                : "bg-gray-800/80 border-gray-700 text-white hover:bg-gray-800 shadow-black/50"
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Navigation Arrow Right */}
          <button
            onClick={stepRight}
            aria-label="Next Projects"
            className={`absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md border shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 ${
              darkMode
                ? "bg-white/80 border-gray-200 text-gray-800 hover:bg-white shadow-gray-300/50"
                : "bg-gray-800/80 border-gray-700 text-white hover:bg-gray-800 shadow-black/50"
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Draggable & Cursor Track Container */}
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onWheel={handleWheel}
            style={{
              overflow: "hidden",
              width: "100%",
              cursor: isGrabbing ? "grabbing" : "grab",
              paddingTop: "20px",
              paddingBottom: "24px",
              touchAction: "pan-y",
              maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
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
              }}
            >
              {allCards.map((project, i) => (
                <ProjectCard
                  key={`${project.title}-${i}`}
                  project={project}
                  darkMode={darkMode}
                  onLinkClick={canClickLink}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Interaction Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`flex items-center justify-center gap-3 text-xs mt-4 ${
            darkMode ? "text-gray-500" : "text-gray-400"
          }`}
        >
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-gray-300/40 dark:border-gray-700/60 bg-gray-100/50 dark:bg-gray-800/50">
            🖱️ <strong>Drag or move cursor</strong> horizontally to slide continuously
          </span>
          <span className="hidden sm:inline-block">•</span>
          <span className="hidden sm:inline-flex items-center gap-1">
            Infinite continuous loop ♾️
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

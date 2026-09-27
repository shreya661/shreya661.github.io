import React, { useContext, useRef, useEffect, useCallback } from "react";
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

// Triplicate for seamless infinite loop in both directions
const allCards = [...projectData, ...projectData, ...projectData];

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ProjectCard = ({ project, darkMode }) => (
  <div
    className={`flex-shrink-0 w-72 rounded-2xl overflow-hidden border transition-colors duration-300 ${
      darkMode
        ? "bg-white border-gray-200 hover:border-blue-300"
        : "bg-gray-800 border-gray-700 hover:border-gray-500"
    }`}
    style={{
      boxShadow: darkMode
        ? "0 4px 20px rgba(0,0,0,0.08)"
        : "0 4px 20px rgba(0,0,0,0.3)",
    }}
  >
    <div className={`h-1 w-full bg-gradient-to-r ${project.accent}`} />
    <div className="p-5">
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl">{project.emoji}</span>
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
            darkMode ? project.tagBg : "bg-gray-700 text-gray-300"
          }`}
        >
          {project.tag}
        </span>
      </div>
      <h3 className={`text-base font-bold mb-0.5 ${darkMode ? "text-gray-900" : "text-white"}`}>
        {project.title}
      </h3>
      <p className={`text-xs font-semibold mb-3 bg-gradient-to-r ${project.accent} bg-clip-text text-transparent`}>
        {project.subtitle}
      </p>
      <p className={`text-xs leading-relaxed mb-4 ${darkMode ? "text-gray-500" : "text-gray-400"}`}
        style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <span key={t} className={`text-xs px-2 py-0.5 rounded-full font-medium ${
            darkMode ? "bg-gray-100 text-gray-600 border border-gray-200" : "bg-gray-700 text-gray-300 border border-gray-600"
          }`}>{t}</span>
        ))}
      </div>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r ${project.accent} hover:shadow-md hover:scale-105 active:scale-100 transition-all duration-200`}
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
  const offsetRef = useRef(0);       // current scroll offset in px
  const speedRef = useRef(0);        // current speed (-ve = right, +ve = left)
  const rafRef = useRef(null);
  const isInsideRef = useRef(false); // whether cursor is over the section

  // Animate loop
  const animate = useCallback(() => {
    const track = trackRef.current;
    if (!track) { rafRef.current = requestAnimationFrame(animate); return; }

    // Easing: gradually approach target speed
    // When cursor is inside and driving, speedRef is set by mousemove
    // When cursor leaves, decelerate to 0
    if (!isInsideRef.current) {
      speedRef.current *= 0.92; // smooth deceleration
    }

    if (Math.abs(speedRef.current) > 0.05) {
      offsetRef.current += speedRef.current;

      // Loop bounds: each set of 7 cards is 1/3 of total track
      const oneSet = track.scrollWidth / 3;
      if (offsetRef.current >= oneSet * 2) offsetRef.current -= oneSet;
      if (offsetRef.current < 0) offsetRef.current += oneSet;

      track.style.transform = `translateX(-${offsetRef.current}px)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Start at middle set for infinite bi-directional scroll
    const track = trackRef.current;
    if (track) {
      const oneSet = track.scrollWidth / 3;
      offsetRef.current = oneSet; // start at middle
      track.style.transform = `translateX(-${offsetRef.current}px)`;
    }
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const width = rect.width;
    // Map 0→width to -1→+1 (center = 0)
    const normalized = (relX / width) * 2 - 1;
    // Dead zone in center ±10%
    const deadZone = 0.1;
    if (Math.abs(normalized) < deadZone) {
      speedRef.current = 0;
    } else {
      // Max speed = 6px/frame, proportional to distance from center
      const adjusted = normalized > 0
        ? (normalized - deadZone) / (1 - deadZone)
        : (normalized + deadZone) / (1 - deadZone);
      speedRef.current = adjusted * 6;
    }
  };

  const handleMouseEnter = () => { isInsideRef.current = true; };
  const handleMouseLeave = () => { isInsideRef.current = false; };

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="pt-16 pb-16">
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

        {/* Cursor-driven slider */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            overflow: "hidden",
            width: "100%",
            cursor: "ew-resize",
            paddingTop: "16px",
            paddingBottom: "16px",
            maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          }}
        >
          <div
            ref={trackRef}
            style={{
              display: "flex",
              gap: "20px",
              width: "max-content",
              willChange: "transform",
            }}
          >
            {allCards.map((project, i) => (
              <ProjectCard key={`${project.title}-${i}`} project={project} darkMode={darkMode} />
            ))}
          </div>
        </div>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className={`text-center text-xs mt-6 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
        >
          ↔ Move your cursor <span className="font-semibold">left</span> or <span className="font-semibold">right</span> over the cards to scroll
        </motion.p>
      </div>
    </div>
  );
};

export default Projects;

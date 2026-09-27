import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../themeProvider";

// eslint-disable-next-line no-unused-vars
const projects = [
  {
    id: 1,
    emoji: "🎙️",
    title: "IntervIO",
    subtitle: "AI Interview Platform",
    description:
      "An intelligent interview simulation platform that conducts automated real-time interviews, evaluates responses using LLMs, and delivers structured candidate feedback reports.",
    tech: ["Python", "FastAPI", "PostgreSQL", "GenAI", "LLMs"],
    github: "https://github.com/shreya661/IntervIO",
    accent: "from-blue-600 to-indigo-700",
    accentLight: "from-blue-50 to-indigo-100",
    border: "border-blue-300",
    tag: "AI Interview",
    size: "large", // spans 2 columns
  },
  {
    id: 2,
    emoji: "🎓",
    title: "EduBridge AI",
    subtitle: "AI School Assistant",
    description:
      "Human-like AI tutoring platform making academic support conversational, natural, and instantly accessible via LLMs and NLP.",
    tech: ["Python", "FastAPI", "LLMs", "GenAI"],
    github: "https://github.com/shreya661/EduBridge-AI-Human-Like-School-Assistant",
    accent: "from-violet-600 to-purple-700",
    accentLight: "from-violet-50 to-purple-100",
    border: "border-violet-300",
    tag: "EdTech AI",
    size: "normal",
  },
  {
    id: 3,
    emoji: "📔",
    title: "Journal AI",
    subtitle: "Emotion-Aware Journaling",
    description:
      "A full-stack AI journaling app that tracks emotional wellbeing, detects sentiment in entries, and provides meaningful daily insights.",
    tech: ["Python", "FastAPI", "React", "PostgreSQL"],
    github: "https://github.com/shreya661/Journal_AI",
    accent: "from-rose-500 to-pink-700",
    accentLight: "from-rose-50 to-pink-100",
    border: "border-rose-300",
    tag: "Wellness AI",
    size: "tall", // spans 2 rows
  },
  {
    id: 4,
    emoji: "🧭",
    title: "NAVI 360",
    subtitle: "AI Career & Student Platform",
    description:
      "Full-stack career guidance platform with interactive skill roadmaps, AI resume feedback, and personalized career path recommendations.",
    tech: ["React", "JavaScript", "FastAPI", "GenAI"],
    github: "https://github.com/shreya661/navi-360",
    accent: "from-emerald-500 to-teal-700",
    accentLight: "from-emerald-50 to-teal-100",
    border: "border-emerald-300",
    tag: "Career Tech",
    size: "normal",
  },
  {
    id: 5,
    emoji: "🚀",
    title: "LaunchPad",
    subtitle: "AI Productivity App",
    description:
      "Developer productivity platform with intelligent task decomposition, automated deployment tracking, and sprint velocity analytics powered by GenAI.",
    tech: ["Python", "FastAPI", "GenAI"],
    github: "https://github.com/shreya661/launchpad",
    accent: "from-orange-500 to-amber-600",
    accentLight: "from-orange-50 to-amber-100",
    border: "border-orange-300",
    tag: "DevOps AI",
    size: "large",
  },
  {
    id: 6,
    emoji: "🔬",
    title: "Research AI",
    subtitle: "Academic Paper Synthesis",
    description:
      "AI research assistant that explores, summarizes, and synthesizes academic papers using LangChain and FAISS semantic vector search.",
    tech: ["Python", "LangChain", "LLMs", "FAISS"],
    github: "https://github.com/shreya661/researchai",
    accent: "from-sky-500 to-cyan-700",
    accentLight: "from-sky-50 to-cyan-100",
    border: "border-sky-300",
    tag: "Research AI",
    size: "normal",
  },
  {
    id: 7,
    emoji: "📊",
    title: "Sentiment NLP",
    subtitle: "Social Media Analytics",
    description:
      "Real-time sentiment classification pipeline for social media posts with interactive visual dashboards and NLP-driven insights.",
    tech: ["Python", "Scikit-Learn", "Pandas", "NLP"],
    github: "https://github.com/shreya661/social_media_sentiment_analysis-",
    accent: "from-fuchsia-500 to-purple-600",
    accentLight: "from-fuchsia-50 to-purple-100",
    border: "border-fuchsia-300",
    tag: "NLP Analytics",
    size: "normal",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

// eslint-disable-next-line no-unused-vars
const BentoCard = ({ project, index, darkMode }) => {
  const isLarge = project.size === "large";
  const isTall = project.size === "tall";

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className={[
        "relative rounded-2xl overflow-hidden border",
        "transition-all duration-300 group cursor-default",
        darkMode ? `bg-white ${project.border}` : `bg-gray-800 border-gray-700`,
        isLarge ? "md:col-span-2" : "",
        isTall ? "md:row-span-2" : "",
      ].join(" ")}
      style={{
        boxShadow: darkMode
          ? "0 4px 24px rgba(0,0,0,0.07)"
          : "0 4px 24px rgba(0,0,0,0.25)",
      }}
    >
      {/* Gradient accent top bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${project.accent}`} />

      {/* Background gradient glow on hover */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${project.accentLight} pointer-events-none`}
        style={{ opacity: darkMode ? undefined : 0 }}
      />

      <div className="relative p-6 flex flex-col h-full">
        {/* Top: emoji + tag */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl">{project.emoji}</span>
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${project.accent} text-white shadow-sm`}
          >
            {project.tag}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`text-xl font-bold mb-1 ${
            darkMode ? "text-gray-900" : "text-white"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`text-sm font-medium mb-3 bg-gradient-to-r ${project.accent} bg-clip-text text-transparent`}
        >
          {project.subtitle}
        </p>

        {/* Description */}
        <p
          className={`text-sm leading-relaxed mb-5 flex-1 ${
            darkMode ? "text-gray-600" : "text-gray-300"
          }`}
        >
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`text-xs px-2.5 py-1 rounded-full font-medium border ${
                darkMode
                  ? "bg-gray-100 text-gray-700 border-gray-200"
                  : "bg-gray-700 text-gray-200 border-gray-600"
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* GitHub button */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${project.accent} shadow-sm hover:shadow-md hover:scale-105 active:scale-100 transition-all duration-200 w-fit`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          View on GitHub
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 pt-16 pb-16">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold">
            <span className="border-b-4 border-blue-500 p-2 inline-block">
              Projects
            </span>
          </h2>
          <p
            className={`mt-5 text-lg max-w-xl mx-auto ${
              darkMode ? "text-gray-500" : "text-gray-400"
            }`}
          >
            7 AI-powered applications built end-to-end — from LLMs and Computer
            Vision to full-stack backends.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto">
          {/* Row 1: IntervIO (large, 2-col) + Journal AI (tall, 1-col, spans 2 rows) */}
          {/* IntervIO */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className={`relative rounded-2xl overflow-hidden border transition-all duration-300 group cursor-default md:col-span-2 ${
              darkMode
                ? "bg-white border-blue-200"
                : "bg-gray-800 border-gray-700"
            }`}
            style={{
              boxShadow: darkMode
                ? "0 4px 24px rgba(0,0,0,0.07)"
                : "0 4px 24px rgba(0,0,0,0.25)",
            }}
          >
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-indigo-700" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-50 to-indigo-100 pointer-events-none" />
            <div className="relative p-7 flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">🎙️</span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
                    Featured · AI Interview
                  </span>
                </div>
                <h3 className={`text-2xl font-bold mb-1 ${darkMode ? "text-gray-900" : "text-white"}`}>
                  IntervIO
                </h3>
                <p className="text-sm font-medium mb-3 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                  AI Interview Platform
                </p>
                <p className={`text-sm leading-relaxed mb-5 ${darkMode ? "text-gray-600" : "text-gray-300"}`}>
                  An intelligent interview simulation platform that conducts automated real-time
                  interviews, evaluates candidate responses with LLMs, and delivers structured
                  performance feedback reports — end-to-end.
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {["Python", "FastAPI", "PostgreSQL", "GenAI", "LLMs"].map((t) => (
                    <span key={t} className={`text-xs px-2.5 py-1 rounded-full font-medium border ${darkMode ? "bg-gray-100 text-gray-700 border-gray-200" : "bg-gray-700 text-gray-200 border-gray-600"}`}>{t}</span>
                  ))}
                </div>
                <a href="https://github.com/shreya661/IntervIO" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-700 shadow-sm hover:shadow-md hover:scale-105 active:scale-100 transition-all duration-200">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  View on GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* Journal AI — tall card (row span 2) */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className={`relative rounded-2xl overflow-hidden border transition-all duration-300 group cursor-default md:row-span-2 ${
              darkMode ? "bg-white border-rose-200" : "bg-gray-800 border-gray-700"
            }`}
            style={{ boxShadow: darkMode ? "0 4px 24px rgba(0,0,0,0.07)" : "0 4px 24px rgba(0,0,0,0.25)" }}
          >
            <div className="h-1.5 w-full bg-gradient-to-r from-rose-500 to-pink-700" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-rose-50 to-pink-100 pointer-events-none" />
            <div className="relative p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">📔</span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-rose-500 to-pink-700 text-white">Wellness AI</span>
              </div>
              <h3 className={`text-xl font-bold mb-1 ${darkMode ? "text-gray-900" : "text-white"}`}>Journal AI</h3>
              <p className="text-sm font-medium mb-4 bg-gradient-to-r from-rose-500 to-pink-700 bg-clip-text text-transparent">Emotion-Aware Journaling</p>
              <p className={`text-sm leading-relaxed mb-5 flex-1 ${darkMode ? "text-gray-600" : "text-gray-300"}`}>
                A full-stack AI journaling app that tracks emotional wellbeing, detects sentiment in personal entries, and provides meaningful, personalized daily insights over time.
              </p>
              {/* Decorative sentiment bar */}
              <div className={`rounded-xl p-4 mb-5 ${darkMode ? "bg-rose-50 border border-rose-100" : "bg-gray-700"}`}>
                <p className={`text-xs font-semibold mb-2 ${darkMode ? "text-rose-600" : "text-rose-400"}`}>Today's Mood</p>
                <div className="flex gap-1.5">
                  {["😊","😐","😌","🎯","✨"].map(e => (
                    <span key={e} className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm text-base">{e}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-5">
                {["Python", "FastAPI", "React", "PostgreSQL"].map((t) => (
                  <span key={t} className={`text-xs px-2.5 py-1 rounded-full font-medium border ${darkMode ? "bg-gray-100 text-gray-700 border-gray-200" : "bg-gray-600 text-gray-200 border-gray-500"}`}>{t}</span>
                ))}
              </div>
              <a href="https://github.com/shreya661/Journal_AI" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-700 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 w-fit">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                View on GitHub
              </a>
            </div>
          </motion.div>

          {/* Row 2: EduBridge + NAVI 360 (fill the 2 cols next to tall Journal AI) */}
          {[
            { emoji:"🎓", title:"EduBridge AI", subtitle:"AI School Assistant", desc:"Human-like AI tutoring platform making academic support conversational, natural, and instantly accessible via advanced LLMs and NLP.", tech:["Python","FastAPI","LLMs","GenAI"], github:"https://github.com/shreya661/EduBridge-AI-Human-Like-School-Assistant", accent:"from-violet-600 to-purple-700", accentLight:"from-violet-50 to-purple-100", border:"border-violet-200", tag:"EdTech AI", idx:2 },
            { emoji:"🧭", title:"NAVI 360", subtitle:"AI Career Platform", desc:"Full-stack student career guidance platform with interactive skill roadmaps, AI resume optimization, and personalized career path recommendations.", tech:["React","JavaScript","FastAPI","GenAI"], github:"https://github.com/shreya661/navi-360", accent:"from-emerald-500 to-teal-700", accentLight:"from-emerald-50 to-teal-100", border:"border-emerald-200", tag:"Career Tech", idx:3 },
          ].map((p) => (
            <motion.div key={p.title} custom={p.idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin:"-60px" }} variants={cardVariants} whileHover={{ y:-6, transition:{duration:0.25} }}
              className={`relative rounded-2xl overflow-hidden border transition-all duration-300 group cursor-default ${darkMode ? `bg-white ${p.border}` : "bg-gray-800 border-gray-700"}`}
              style={{ boxShadow: darkMode ? "0 4px 24px rgba(0,0,0,0.07)" : "0 4px 24px rgba(0,0,0,0.25)" }}>
              <div className={`h-1.5 w-full bg-gradient-to-r ${p.accent}`} />
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${p.accentLight} pointer-events-none`} />
              <div className="relative p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{p.emoji}</span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${p.accent} text-white`}>{p.tag}</span>
                </div>
                <h3 className={`text-xl font-bold mb-1 ${darkMode ? "text-gray-900" : "text-white"}`}>{p.title}</h3>
                <p className={`text-sm font-medium mb-3 bg-gradient-to-r ${p.accent} bg-clip-text text-transparent`}>{p.subtitle}</p>
                <p className={`text-sm leading-relaxed mb-5 flex-1 ${darkMode ? "text-gray-600" : "text-gray-300"}`}>{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => <span key={t} className={`text-xs px-2.5 py-1 rounded-full font-medium border ${darkMode ? "bg-gray-100 text-gray-700 border-gray-200" : "bg-gray-700 text-gray-200 border-gray-600"}`}>{t}</span>)}
                </div>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${p.accent} shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 w-fit`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}

          {/* Row 3: LaunchPad (large 2-col) + Research AI (1-col) */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className={`relative rounded-2xl overflow-hidden border transition-all duration-300 group cursor-default md:col-span-2 ${
              darkMode ? "bg-white border-orange-200" : "bg-gray-800 border-gray-700"
            }`}
            style={{ boxShadow: darkMode ? "0 4px 24px rgba(0,0,0,0.07)" : "0 4px 24px rgba(0,0,0,0.25)" }}
          >
            <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 to-amber-600" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange-50 to-amber-100 pointer-events-none" />
            <div className="relative p-7">
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">🚀</span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 text-white">Featured · DevOps AI</span>
              </div>
              <h3 className={`text-2xl font-bold mb-1 ${darkMode ? "text-gray-900" : "text-white"}`}>LaunchPad</h3>
              <p className="text-sm font-medium mb-3 bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">AI Productivity App</p>
              <p className={`text-sm leading-relaxed mb-5 ${darkMode ? "text-gray-600" : "text-gray-300"}`}>
                An AI-powered developer productivity platform with intelligent task decomposition, automated deployment tracking, and sprint velocity analytics — making team execution faster and smarter.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["Python", "FastAPI", "GenAI"].map((t) => (
                  <span key={t} className={`text-xs px-2.5 py-1 rounded-full font-medium border ${darkMode ? "bg-gray-100 text-gray-700 border-gray-200" : "bg-gray-700 text-gray-200 border-gray-600"}`}>{t}</span>
                ))}
              </div>
              <a href="https://github.com/shreya661/launchpad" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 w-fit">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                View on GitHub
              </a>
            </div>
          </motion.div>

          {/* Research AI */}
          {[
            { emoji:"🔬", title:"Research AI", subtitle:"Academic Paper Synthesis", desc:"AI research assistant that explores, summarizes, and synthesizes academic papers using LangChain and FAISS semantic vector search.", tech:["Python","LangChain","LLMs","FAISS"], github:"https://github.com/shreya661/researchai", accent:"from-sky-500 to-cyan-700", accentLight:"from-sky-50 to-cyan-100", border:"border-sky-200", tag:"Research AI", idx:5 },
            { emoji:"📊", title:"Sentiment NLP", subtitle:"Social Media Analytics", desc:"Real-time sentiment classification pipeline for social media posts with interactive visual dashboards and NLP-driven insights.", tech:["Python","Scikit-Learn","Pandas","NLP"], github:"https://github.com/shreya661/social_media_sentiment_analysis-", accent:"from-fuchsia-500 to-purple-600", accentLight:"from-fuchsia-50 to-purple-100", border:"border-fuchsia-200", tag:"NLP Analytics", idx:6 },
          ].map((p) => (
            <motion.div key={p.title} custom={p.idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin:"-60px" }} variants={cardVariants} whileHover={{ y:-6, transition:{duration:0.25} }}
              className={`relative rounded-2xl overflow-hidden border transition-all duration-300 group cursor-default ${darkMode ? `bg-white ${p.border}` : "bg-gray-800 border-gray-700"}`}
              style={{ boxShadow: darkMode ? "0 4px 24px rgba(0,0,0,0.07)" : "0 4px 24px rgba(0,0,0,0.25)" }}>
              <div className={`h-1.5 w-full bg-gradient-to-r ${p.accent}`} />
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${p.accentLight} pointer-events-none`} />
              <div className="relative p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{p.emoji}</span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${p.accent} text-white`}>{p.tag}</span>
                </div>
                <h3 className={`text-xl font-bold mb-1 ${darkMode ? "text-gray-900" : "text-white"}`}>{p.title}</h3>
                <p className={`text-sm font-medium mb-3 bg-gradient-to-r ${p.accent} bg-clip-text text-transparent`}>{p.subtitle}</p>
                <p className={`text-sm leading-relaxed mb-5 flex-1 ${darkMode ? "text-gray-600" : "text-gray-300"}`}>{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => <span key={t} className={`text-xs px-2.5 py-1 rounded-full font-medium border ${darkMode ? "bg-gray-100 text-gray-700 border-gray-200" : "bg-gray-700 text-gray-200 border-gray-600"}`}>{t}</span>)}
                </div>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${p.accent} shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 w-fit`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

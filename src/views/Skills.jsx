import React, { useContext, useState } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Generative AI & LLM Systems",
    icon: "🧠",
    badge: "Core Specialization",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    skills: [
      { name: "LangChain", icon: "🦜" },
      { name: "OpenAI APIs", icon: "⚡" },
      { name: "Groq API (Llama-3)", icon: "🚀" },
      { name: "FAISS Vector DB", icon: "🔍" },
      { name: "Prompt Engineering", icon: "✍️" },
      { name: "Semantic Search & NLP", icon: "📑" },
    ],
  },
  {
    title: "Machine Learning & Vision",
    icon: "📊",
    badge: "Modeling & Data",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    skills: [
      { name: "PyTorch", icon: "🔥" },
      { name: "OpenCV", icon: "👁️" },
      { name: "Scikit-Learn", icon: "📈" },
      { name: "Pandas", icon: "🐼" },
      { name: "NumPy", icon: "🔢" },
      { name: "Sentiment Analysis", icon: "💬" },
    ],
  },
  {
    title: "Backend & System APIs",
    icon: "⚡",
    badge: "Architecture",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    skills: [
      { name: "Python (Advanced)", icon: "🐍" },
      { name: "FastAPI", icon: "⚡" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "RESTful Architecture", icon: "🔌" },
      { name: "JSON Schema", icon: "📋" },
      { name: "Session Persistence", icon: "💾" },
    ],
  },
  {
    title: "Developer Tools & UI",
    icon: "🛠️",
    badge: "Workflow",
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    skills: [
      { name: "React.js", icon: "⚛️" },
      { name: "JavaScript (ES6+)", icon: "💛" },
      { name: "Git & GitHub", icon: "🐙" },
      { name: "Postman", icon: "🚀" },
      { name: "Streamlit", icon: "👑" },
      { name: "Power BI & Vercel", icon: "📊" },
    ],
  },
];

const Skills = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...skillCategories.map((c) => c.title)];

  const displayedCategories =
    activeCategory === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.title === activeCategory);

  return (
    <div
      id="skills"
      className={`py-20 transition-colors duration-300 ${
        darkMode ? "bg-slate-50 text-gray-900" : "bg-gray-950 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            🛠️ Technical Capabilities
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Skills &amp;{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className={`mt-3 text-base max-w-xl mx-auto ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
            Curated toolkit for building, scaling, and deploying end-to-end intelligent systems.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105"
                    : darkMode
                    ? "bg-white text-gray-700 border border-gray-200 hover:border-gray-300"
                    : "bg-gray-800 text-gray-300 border border-gray-700 hover:border-gray-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 4 Technical Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-6 rounded-3xl border transition-all duration-300 hover:shadow-xl ${
                darkMode
                  ? "bg-white border-gray-200/80 hover:border-blue-300 shadow-sm"
                  : "bg-gray-900 border-gray-800 hover:border-gray-700 shadow-lg shadow-black/40"
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span className="text-2xl p-2 rounded-xl bg-gray-100 dark:bg-gray-800">
                    {cat.icon}
                  </span>
                  <h3 className={`text-lg font-bold ${darkMode ? "text-gray-900" : "text-white"}`}>
                    {cat.title}
                  </h3>
                </div>
                <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${cat.badgeColor}`}>
                  {cat.badge}
                </span>
              </div>

              {/* Skills Tag Pills */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 hover:scale-105 ${
                      darkMode
                        ? "bg-gray-50 border-gray-200 text-gray-800 hover:bg-white hover:border-blue-400 hover:shadow-sm"
                        : "bg-gray-800/80 border-gray-700 text-gray-200 hover:bg-gray-700 hover:border-gray-500 hover:shadow-md"
                    }`}
                  >
                    <span>{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;

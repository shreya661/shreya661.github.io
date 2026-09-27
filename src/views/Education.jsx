import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Education = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering (AI & ML)",
      institution: "TKR College of Engineering and Technology",
      year: "Nov 2022 – Nov 2026",
      location: "Hyderabad, Telangana",
      type: "Undergraduate Degree",
      highlights: [
        "Core specialization in Artificial Intelligence, Deep Learning, and Machine Learning architectures",
        "Extensive practical engineering across Generative AI, Large Language Models, Computer Vision, and NLP",
        "Developed end-to-end full-stack applications: AI Interviewers, Conversational Support Agents, and Vector Search systems",
        "Active contributor to departmental technical seminars and AI coding workshops"
      ],
      badge: "In Progress (Senior Year)"
    },
    {
      degree: "Intermediate — MPC (Mathematics, Physics, Chemistry)",
      institution: "ABV Junior College",
      year: "2020 – 2022",
      location: "Hyderabad, Telangana",
      type: "Higher Secondary",
      highlights: [
        "Focused study in Advanced Mathematics, Calculus, Linear Algebra, and Analytical Sciences",
        "Built a strong mathematical foundation crucial for machine learning optimization and statistics"
      ],
      badge: "Graduated"
    }
  ];

  const certifications = [
    {
      name: "Tata — GenAI Powered Data Analytics",
      issuer: "Tata / Forage",
      date: "Verified Completion",
      category: "Generative AI & Analytics",
      description: "Applied generative AI models to analyze complex datasets, extract business metrics, and construct predictive summaries."
    },
    {
      name: "AI Tools & Workflows Specialist",
      issuer: "Industry Workshop Certification",
      date: "Verified Completion",
      category: "AI Tooling & Automation",
      description: "Hands-on mastery of prompt architecture, AI agentic pipelines, and developer acceleration frameworks."
    }
  ];

  return (
    <div
      id="education"
      className={`relative py-20 transition-colors duration-300 ${
        darkMode ? "bg-white text-slate-900" : "bg-slate-900/40 text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            ACADEMIC FOUNDATION &amp; CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Education &amp; <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Specializations</span>
          </h2>
          <p className={`mt-4 text-sm sm:text-base max-w-2xl mx-auto ${darkMode ? "text-slate-600" : "text-slate-400"}`}>
            Rigorous training in Computer Science, Machine Learning algorithms, and applied Generative AI systems.
          </p>
        </motion.div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`rounded-2xl p-6 sm:p-8 border transition-all duration-300 hover:shadow-2xl flex flex-col justify-between ${
                darkMode
                  ? "bg-slate-50 border-slate-200/90 shadow-lg hover:border-indigo-400/50"
                  : "bg-slate-900/80 border-slate-800 shadow-xl hover:border-indigo-500/40 backdrop-blur-sm"
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                    {edu.badge}
                  </span>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {edu.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight mb-1 text-slate-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                  {edu.institution}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {edu.location}
                </p>

                <ul className="space-y-2.5">
                  {edu.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-[10px] mt-0.5 font-bold">
                        ✓
                      </span>
                      <span className={darkMode ? "text-slate-600" : "text-slate-300"}>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Sub-Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Industry Certifications &amp; Job Simulations
            </h3>
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                  darkMode
                    ? "bg-slate-50 border-slate-200 hover:border-indigo-400/50"
                    : "bg-slate-900/60 border-slate-800 hover:border-indigo-500/40"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      {cert.category}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                      {cert.name}
                    </h4>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
                    {cert.date}
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 font-medium">
                  Issuer: {cert.issuer}
                </p>
                <p className={`text-xs leading-relaxed ${darkMode ? "text-slate-600" : "text-slate-300"}`}>
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
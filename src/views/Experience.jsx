import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Experience = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const experienceData = [
    {
      company: "UpToSkills",
      title: "AIML Team Lead Intern",
      duration: "May 2026 – July 13, 2026",
      status: "Completed",
      location: "Remote",
      tagline: "Led cross-functional AI/ML and analytics intern teams with structured delivery oversight.",
      description:
        "Served as Team Lead coordinating distributed teams across generative AI and data analytics projects. Responsible for end-to-end task delegation, workflow orchestration, attendance verification, code review reviews, and performance coaching.",
      responsibilities: [
        "Oversaw task management, sprint scheduling, attendance tracking, and code submissions across multiple intern squads",
        "Coordinated AI/ML project execution, unblocking technical hurdles in Generative AI, LLM prompting, and model evaluation",
        "Established structured peer communication channels, weekly sprint standups, and quality assurance checkpoints",
        "Conducted structured intern performance assessments and guided hands-on deployment of production-grade AI models"
      ],
      skills: ["Technical Leadership", "Sprint Coordination", "AI/ML Workflows", "Generative AI", "Performance Coaching"]
    },
    {
      company: "UpToSkills",
      title: "AIML Intern",
      duration: "March 2026 – April 2026",
      status: "Completed",
      location: "Remote",
      tagline: "Architected SkillNova — an AI-powered conversational support platform for intern query resolution.",
      description:
        "Engineered SkillNova, an intelligent conversational agent designed to provide real-time technical answers, onboarding guides, and workflow resolution to hundreds of concurrent interns using LLMs and FastAPI.",
      responsibilities: [
        "Architected SkillNova — a specialized AI assistant that decreased repetitive intern support queries significantly",
        "Implemented high-throughput FastAPI endpoints connected with PostgreSQL for persistent conversation history",
        "Crafted optimized prompt strategies and evaluated LLM latency and context retrieval using LangChain and Groq API",
        "Built modular Python pipelines adhering to clean software engineering practices and asynchronous request handling"
      ],
      skills: ["FastAPI", "PostgreSQL", "LangChain", "Groq API", "Prompt Engineering", "Conversational AI"]
    }
  ];

  return (
    <div
      id="experience"
      className={`relative py-20 transition-colors duration-300 ${
        darkMode ? "bg-slate-50 text-slate-900" : "bg-[#0b0f19] text-white"
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
            CAREER &amp; INDUSTRY EXPERIENCE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Professional <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Journey &amp; Leadership</span>
          </h2>
          <p className={`mt-4 text-sm sm:text-base max-w-2xl mx-auto ${darkMode ? "text-slate-600" : "text-slate-400"}`}>
            Hands-on technical leadership, conversational AI system architecture, and real-world delivery across fast-paced AI/ML environments.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-2 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-indigo-500 before:to-violet-500">
          {experienceData.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Pulsing Timeline Node */}
              <div className="absolute -left-[30px] sm:-left-[46px] top-6 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-4 border-indigo-500 shadow-md flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
              </div>

              {/* Experience Card */}
              <div
                className={`rounded-2xl p-6 sm:p-8 border transition-all duration-300 hover:shadow-2xl ${
                  darkMode
                    ? "bg-white border-slate-200/90 shadow-lg hover:border-indigo-400/50"
                    : "bg-slate-900/70 border-slate-800 shadow-xl hover:border-indigo-500/40 backdrop-blur-sm"
                }`}
              >
                {/* Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {job.title}
                      </h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        {job.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      <span>{job.company}</span>
                      <span>•</span>
                      <span className="text-slate-500 dark:text-slate-400 font-normal">{job.location}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80 w-fit">
                    <svg className="w-3.5 h-3.5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{job.duration}</span>
                  </div>
                </div>

                {/* Subtitle / Tagline */}
                <p className={`text-sm leading-relaxed mb-5 font-medium ${darkMode ? "text-slate-700" : "text-slate-300"}`}>
                  {job.tagline}
                </p>

                {/* Responsibilities list */}
                <ul className="space-y-3 mb-6">
                  {job.responsibilities.map((r, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-[10px] mt-0.5 font-bold">
                        ✓
                      </span>
                      <span className={darkMode ? "text-slate-600" : "text-slate-300"}>{r}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mr-1">
                    Key Areas:
                  </span>
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
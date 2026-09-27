import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import ShreyaPatha from "../assets/ShreyaPatha.jpg";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const RESUME_URL = "https://drive.google.com/file/d/1htVbT1gcmGuBXM89QU6J30J050oHMWmK/view?usp=sharing";

  const highlights = [
    {
      icon: "🧠",
      title: "End-to-End AI Engineering",
      desc: "Architecting complete AI applications from data pipelines and LLM orchestration to FastAPI backends and responsive UIs.",
    },
    {
      icon: "👥",
      title: "Technical Leadership & Execution",
      desc: "Served as AIML Team Lead Intern at UpToSkills, coordinating multi-disciplinary intern squads and deploying SkillNova.",
    },
    {
      icon: "⚡",
      title: "Rapid Execution & Versatility",
      desc: "Built 7+ production-grade AI solutions across generative AI, NLP, computer vision, and career tech roadmaps.",
    },
  ];

  return (
    <div
      id="about"
      className={`py-20 transition-colors duration-300 ${
        darkMode ? "bg-white text-gray-900" : "bg-gray-900 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            ✨ Get to know me
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Shreya Patha</span>
          </h2>
          <p className={`mt-3 text-base max-w-xl mx-auto ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
            AI Engineer, Lifelong Learner &amp; Technical Leader based in Hyderabad, India.
          </p>
        </motion.div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photo & Quick Snapshot */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            {/* Glowing Photo Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-300" />
              <div
                className={`relative rounded-3xl overflow-hidden border p-2 shadow-2xl transition-all duration-300 ${
                  darkMode ? "bg-white border-gray-200" : "bg-gray-800 border-gray-700"
                }`}
              >
                <img
                  src={ShreyaPatha}
                  alt="Shreya Patha"
                  className="w-72 sm:w-80 h-96 object-cover rounded-2xl shadow-inner"
                />
              </div>
            </div>

            {/* Quick Details Pill Card */}
            <div
              className={`mt-6 w-full max-w-xs p-4 rounded-2xl border text-xs space-y-2.5 backdrop-blur-md ${
                darkMode
                  ? "bg-gray-50/80 border-gray-200 text-gray-700"
                  : "bg-gray-800/60 border-gray-700 text-gray-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-400">📍 Location</span>
                <span className="font-semibold">Hyderabad, India</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">🎓 Degree</span>
                <span className="font-semibold">B.Tech CSE (AI &amp; ML)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">💼 UpToSkills</span>
                <span className="font-semibold text-blue-500">AIML Team Lead</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">⏱️ Status</span>
                <span className="font-semibold text-emerald-500">Available Immediately</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Turning complex AI research into{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                reliable production tools
              </span>
            </h3>

            <p className={`text-base leading-relaxed mb-6 ${darkMode ? "text-gray-600" : "text-gray-300"}`}>
              I am a <strong>Computer Science &amp; Engineering graduate specializing in Artificial Intelligence &amp; Machine Learning</strong> at TKR College of Engineering and Technology. I have hands-on experience designing end-to-end Generative AI applications, low-latency LLM microservices, and backend APIs.
            </p>

            <p className={`text-base leading-relaxed mb-8 ${darkMode ? "text-gray-600" : "text-gray-300"}`}>
              During my tenure as <strong>AIML Team Lead Intern at UpToSkills</strong> (completed July 13, 2026), I guided intern squads, coordinated project sprints, and architected <strong>SkillNova</strong> — a real-time conversational AI support system utilizing FastAPI, PostgreSQL, and Groq LLM pipelines.
            </p>

            {/* Feature Highlights Grid */}
            <div className="space-y-4 mb-8">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-2xl border transition-all duration-200 hover:shadow-md ${
                    darkMode
                      ? "bg-gray-50/70 border-gray-200 hover:border-blue-300"
                      : "bg-gray-800/50 border-gray-700/60 hover:border-gray-500"
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <span className="text-2xl mt-0.5">{h.icon}</span>
                    <div>
                      <h4 className={`text-sm font-bold ${darkMode ? "text-gray-900" : "text-white"}`}>
                        {h.title}
                      </h4>
                      <p className={`text-xs mt-1 leading-relaxed ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                        {h.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Official Resume
              </a>

              <a
                href="mailto:pathashreya@gmail.com"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold border transition-all duration-200 hover:scale-105 active:scale-95 ${
                  darkMode
                    ? "bg-white border-gray-300 text-gray-800 hover:bg-gray-100"
                    : "bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                }`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Get In Touch
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;

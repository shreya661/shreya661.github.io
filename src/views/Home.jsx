import React, { useContext } from "react";
import Typical from "react-typical";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const RESUME_URL = "https://drive.google.com/file/d/1htVbT1gcmGuBXM89QU6J30J050oHMWmK/view?usp=sharing";
  const GITHUB_URL = "https://github.com/shreya661";
  const LINKEDIN_URL = "https://www.linkedin.com/in/shreya-patha-jw13/";
  const EMAIL = "mailto:pathashreya@gmail.com";

  return (
    <div
      id="home"
      className={`min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-slate-50 text-gray-900" : "bg-gray-950 text-white"
      }`}
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-500/15 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 border shadow-sm backdrop-blur-md"
              style={{
                background: darkMode ? "rgba(239, 246, 255, 0.85)" : "rgba(30, 41, 59, 0.7)",
                borderColor: darkMode ? "#bfdbfe" : "#334155",
                color: darkMode ? "#1d4ed8" : "#93c5fd",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for AI/ML Roles &amp; Internships</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]"
            >
              <span>Hi, I am </span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Shreya Patha
              </span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-500 block mt-2 h-[1.3em]">
                <Typical
                  steps={[
                    "AI / ML Engineer",
                    1800,
                    "Generative AI Developer",
                    1800,
                    "Python & FastAPI Architect",
                    1800,
                    "LLM Solutions Builder",
                    1800,
                  ]}
                  loop={Infinity}
                />
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`mt-6 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                darkMode ? "text-gray-600" : "text-gray-300"
              }`}
            >
              Specializing in building end-to-end intelligent systems — from low-latency FastAPI microservices and LLM pipelines to computer vision and autonomous agents. Former <strong>AIML Team Lead Intern at UpToSkills</strong>.
            </motion.p>

            {/* Buttons Group */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              {/* Primary: View Resume */}
              <a
                id="resume-button-2"
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="12" y1="18" x2="12" y2="12" />
                  <line x1="9" y1="15" x2="15" y2="15" />
                </svg>
                View Resume
              </a>

              {/* Secondary: Projects CTA */}
              <Link
                to="projects"
                offset={-80}
                duration={500}
                smooth={true}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold cursor-pointer border transition-all duration-200 hover:scale-105 active:scale-95 ${
                  darkMode
                    ? "bg-white border-gray-300 text-gray-800 hover:bg-gray-100 shadow-sm"
                    : "bg-gray-800/80 border-gray-700 text-white hover:bg-gray-700 shadow-md"
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
                Explore 7 Projects
              </Link>
            </motion.div>

            {/* Social Links Pill Group */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-3"
            >
              <span className={`text-xs font-medium mr-1 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                Connect:
              </span>

              {/* GitHub */}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-200 hover:scale-110 active:scale-95 ${
                  darkMode
                    ? "bg-white border-gray-200 text-gray-700 hover:text-black hover:border-gray-400 shadow-sm"
                    : "bg-gray-900 border-gray-800 text-gray-300 hover:text-white hover:border-gray-600"
                }`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-200 hover:scale-110 active:scale-95 ${
                  darkMode
                    ? "bg-white border-gray-200 text-gray-700 hover:text-blue-600 hover:border-gray-400 shadow-sm"
                    : "bg-gray-900 border-gray-800 text-gray-300 hover:text-blue-400 hover:border-gray-600"
                }`}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href={EMAIL}
                title="Send Email"
                className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-200 hover:scale-110 active:scale-95 ${
                  darkMode
                    ? "bg-white border-gray-200 text-gray-700 hover:text-indigo-600 hover:border-gray-400 shadow-sm"
                    : "bg-gray-900 border-gray-800 text-gray-300 hover:text-indigo-400 hover:border-gray-600"
                }`}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Sleek High-Tech AI Workspace Terminal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div
              className={`rounded-3xl border shadow-2xl p-6 backdrop-blur-xl relative overflow-hidden transition-colors duration-300 ${
                darkMode
                  ? "bg-white/90 border-gray-200/80 shadow-gray-200/50"
                  : "bg-gray-900/90 border-gray-800 shadow-2xl shadow-black/60"
              }`}
            >
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200/60 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono font-medium text-gray-400">
                  shreya@ai-core: ~
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded font-mono font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  LIVE
                </span>
              </div>

              {/* Code Snippet */}
              <div className="font-mono text-xs space-y-2 mb-6">
                <p className="text-gray-400">
                  <span className="text-purple-500 font-semibold">import</span> {"{"} FastAPI, LangChain, Groq {"}"}{" "}
                  <span className="text-purple-500 font-semibold">from</span> "ai.stack";
                </p>
                <p className="text-gray-400">
                  <span className="text-blue-500 font-semibold">const</span> engineer = {"{"}
                </p>
                <p className="pl-4 text-gray-500 dark:text-gray-400">
                  name: <span className="text-emerald-500">"Shreya Patha"</span>,
                </p>
                <p className="pl-4 text-gray-500 dark:text-gray-400">
                  specialization: <span className="text-emerald-500">"Generative AI &amp; LLMs"</span>,
                </p>
                <p className="pl-4 text-gray-500 dark:text-gray-400">
                  role: <span className="text-amber-500">"AIML Team Lead Intern @ UpToSkills"</span>,
                </p>
                <p className="pl-4 text-gray-500 dark:text-gray-400">
                  status: <span className="text-blue-400">"Ready to Ship Production AI"</span>
                </p>
                <p className="text-gray-400">{"};"}</p>
              </div>

              {/* Key Quick Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div
                  className={`p-3.5 rounded-2xl border ${
                    darkMode ? "bg-blue-50/70 border-blue-100" : "bg-gray-800/60 border-gray-700/60"
                  }`}
                >
                  <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">7+</div>
                  <div className={`text-xs font-semibold mt-0.5 ${darkMode ? "text-gray-700" : "text-gray-300"}`}>
                    AI Applications
                  </div>
                  <div className="text-[11px] text-gray-400">End-to-End Deployed</div>
                </div>

                <div
                  className={`p-3.5 rounded-2xl border ${
                    darkMode ? "bg-indigo-50/70 border-indigo-100" : "bg-gray-800/60 border-gray-700/60"
                  }`}
                >
                  <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">Team Lead</div>
                  <div className={`text-xs font-semibold mt-0.5 ${darkMode ? "text-gray-700" : "text-gray-300"}`}>
                    UpToSkills
                  </div>
                  <div className="text-[11px] text-gray-400">Jul 13, 2026 Completed</div>
                </div>
              </div>

              {/* Floating Status Pill */}
              <div
                className={`mt-4 p-3 rounded-2xl border flex items-center justify-between text-xs ${
                  darkMode ? "bg-gray-50 border-gray-200 text-gray-700" : "bg-gray-800/40 border-gray-700/50 text-gray-300"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                  Primary Stack:
                </span>
                <span className="font-mono font-semibold text-blue-500">
                  Python • FastAPI • LLMs
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
};

export default Home;

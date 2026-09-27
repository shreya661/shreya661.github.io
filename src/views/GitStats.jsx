import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const GitStats = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="gitstats"
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
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            OPEN SOURCE &amp; CODE ACTIVITY
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            GitHub <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Telemetry &amp; Velocity</span>
          </h2>
          <p className={`mt-4 text-sm sm:text-base max-w-2xl mx-auto ${darkMode ? "text-slate-600" : "text-slate-400"}`}>
            Real-time public commit streaks, algorithm repositories, and production code metrics from @shreya661.
          </p>
        </motion.div>

        {/* Calendar Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`rounded-2xl p-6 border mb-8 overflow-hidden ${
            darkMode
              ? "bg-white border-slate-200/90 shadow-lg"
              : "bg-slate-900/70 border-slate-800 shadow-xl backdrop-blur-sm"
          }`}
        >
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                github.com/shreya661 • contribution-heatmap
              </span>
            </div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              Live Feed
            </span>
          </div>

          <div className="overflow-x-auto py-2">
            <img
              className="w-full min-w-[700px] rounded-lg"
              src="https://ghchart.rshah.org/shreya661"
              alt="shreya661-calendar"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* 2-Column: Streak & Overall Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Streak Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`rounded-2xl p-6 border flex flex-col items-center justify-center ${
              darkMode
                ? "bg-white border-slate-200/90 shadow-lg"
                : "bg-slate-900/70 border-slate-800 shadow-xl backdrop-blur-sm"
            }`}
          >
            <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
              Commit Streak &amp; Momentum
            </h4>
            <img
              id="github-streak-stats"
              src="https://streak-stats.demolab.com/?user=shreya661&theme=radical"
              alt="shreya661-streak"
              className="max-w-full rounded-xl"
              loading="lazy"
            />
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`rounded-2xl p-6 border flex flex-col items-center justify-center ${
              darkMode
                ? "bg-white border-slate-200/90 shadow-lg"
                : "bg-slate-900/70 border-slate-800 shadow-xl backdrop-blur-sm"
            }`}
          >
            <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
              Repository Statistics
            </h4>
            <img
              id="github-stats-card"
              src="https://github-readme-stats-eight-theta.vercel.app/api?username=shreya661&show_icons=true&theme=radical"
              onError={(e) => {
                e.target.src =
                  "https://github-readme-stats.vercel.app/api?username=shreya661&show_icons=true&theme=radical";
              }}
              alt="shreya661-stats"
              className="max-w-full rounded-xl"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Top Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`rounded-2xl p-6 border flex flex-col items-center justify-center mb-12 ${
            darkMode
              ? "bg-white border-slate-200/90 shadow-lg"
              : "bg-slate-900/70 border-slate-800 shadow-xl backdrop-blur-sm"
          }`}
        >
          <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
            Most Utilized Languages &amp; Frameworks
          </h4>
          <img
            id="github-top-langs"
            src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=shreya661&layout=compact&theme=radical"
            onError={(e) => {
              e.target.src =
                "https://github-readme-stats.vercel.app/api/top-langs/?username=shreya661&layout=compact&theme=radical";
            }}
            alt="shreya661-top-langs"
            className="max-w-full rounded-xl"
            loading="lazy"
          />
        </motion.div>

        {/* Clean Tactile CTA Button */}
        <div className="flex justify-center">
          <a
            href="https://github.com/shreya661"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white/10 dark:hover:bg-white/20 border border-slate-700/80 dark:border-white/10 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
          >
            <GitHubIcon />
            <span>Explore All 7+ Repositories on GitHub</span>
            <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GitStats;

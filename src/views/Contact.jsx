import React, { useContext, useState } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  function validateForm() {
    const nextErrors = { name: "", email: "", message: "" };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name.trim()) nextErrors.name = "Please enter your name";
    if (!email.trim()) nextErrors.email = "Please enter your email";
    else if (!emailRegex.test(email)) nextErrors.email = "Please enter a valid email address";
    if (!message.trim()) nextErrors.message = "Please include a message";
    setErrors(nextErrors);
    return !nextErrors.name && !nextErrors.email && !nextErrors.message;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("");
    if (!validateForm()) {
      setStatus("error");
      return;
    }
    setSubmitting(true);
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nSender: ${name} <${email}>`);
    window.location.href = `mailto:pathashreya@gmail.com?subject=${subject}&body=${body}`;
    setStatus("success");
    setSubmitting(false);
  }

  const copyEmail = () => {
    navigator.clipboard.writeText("pathashreya@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const socials = [
    {
      name: "GitHub",
      handle: "@shreya661",
      link: "https://github.com/shreya661/",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      color: "hover:text-violet-400 hover:border-violet-500/40"
    },
    {
      name: "LinkedIn",
      handle: "shreya-patha-jw13",
      link: "https://www.linkedin.com/in/shreya-patha-jw13/",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      color: "hover:text-blue-400 hover:border-blue-500/40"
    }
  ];

  return (
    <div
      id="contact"
      className={`relative pt-20 transition-colors duration-300 ${
        darkMode ? "bg-white text-slate-900" : "bg-black text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
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
            INITIATE CONVERSATION
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Let's Engineer <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Something Impactful</span>
          </h2>
          <p className={`mt-4 text-sm sm:text-base max-w-2xl mx-auto ${darkMode ? "text-slate-600" : "text-slate-400"}`}>
            Actively seeking AI/ML engineering roles, Generative AI research positions, and high-impact software opportunities.
          </p>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`lg:col-span-7 rounded-2xl p-6 sm:p-8 border shadow-xl ${
              darkMode
                ? "bg-slate-50 border-slate-200/90 shadow-slate-200/50"
                : "bg-slate-900/70 border-slate-800 backdrop-blur-md"
            }`}
          >
            <h3 className="text-xl font-bold tracking-tight mb-2 text-slate-900 dark:text-white">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
              Have an open role, an exciting AI project, or want to discuss conversational LLM architectures?
            </p>

            {status === "success" && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs sm:text-sm flex items-center gap-2">
                <span className="text-base font-bold">✓</span>
                <span>Opening your email client now. You can also reach out directly to pathashreya@gmail.com</span>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 text-xs sm:text-sm flex items-center gap-2">
                <span className="text-base font-bold">!</span>
                <span>Please complete the highlighted fields before submitting.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-slate-700 dark:text-slate-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className={`w-full px-4 py-3 rounded-xl text-sm transition-all outline-none border ${
                    darkMode
                      ? "bg-white border-slate-300 text-slate-900 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                      : "bg-slate-950/80 border-slate-800 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
                  }`}
                  required
                />
                {errors.name && <p className="mt-1 text-xs text-rose-500 font-medium">{errors.name}</p>}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-slate-700 dark:text-slate-300"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. alex@example.com"
                  className={`w-full px-4 py-3 rounded-xl text-sm transition-all outline-none border ${
                    darkMode
                      ? "bg-white border-slate-300 text-slate-900 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                      : "bg-slate-950/80 border-slate-800 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
                  }`}
                  required
                />
                {errors.email && <p className="mt-1 text-xs text-rose-500 font-medium">{errors.email}</p>}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider mb-1.5 text-slate-700 dark:text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about the role, project vision, or question..."
                  className={`w-full px-4 py-3 rounded-xl text-sm transition-all outline-none border resize-none ${
                    darkMode
                      ? "bg-white border-slate-300 text-slate-900 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                      : "bg-slate-950/80 border-slate-800 text-white placeholder-slate-500 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
                  }`}
                  required
                />
                {errors.message && <p className="mt-1 text-xs text-rose-500 font-medium">{errors.message}</p>}
              </div>

              {/* Action Buttons Row */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href="mailto:pathashreya@gmail.com"
                  className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Prefer email client? pathashreya@gmail.com ↗
                </a>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-md hover:shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-0.5 active:scale-95 transition-all duration-200 disabled:opacity-60"
                >
                  {submitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right: Quick Connect Hub */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Copy Email Card */}
            <div
              className={`p-6 rounded-2xl border transition-all ${
                darkMode ? "bg-slate-50 border-slate-200" : "bg-slate-900/70 border-slate-800"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Direct Inbox
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  Quick Reply
                </span>
              </div>
              <p className="text-base font-bold text-slate-900 dark:text-white mb-3">
                pathashreya@gmail.com
              </p>
              <button
                type="button"
                onClick={copyEmail}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-200/80 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-300/80 dark:border-slate-700 active:scale-95 transition-all"
              >
                {copied ? (
                  <>
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span className="text-emerald-500 font-bold">Email Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    </svg>
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Location & Timezone Card */}
            <div
              className={`p-6 rounded-2xl border ${
                darkMode ? "bg-slate-50 border-slate-200" : "bg-slate-900/70 border-slate-800"
              }`}
            >
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Location &amp; Availability
              </span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Hyderabad, Telangana, India
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                Timezone: Indian Standard Time (IST, UTC+5:30)
              </p>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Immediate AI/ML Roles</span>
              </div>
            </div>

            {/* Social Profiles Grid */}
            <div
              className={`p-6 rounded-2xl border ${
                darkMode ? "bg-slate-50 border-slate-200" : "bg-slate-900/70 border-slate-800"
              }`}
            >
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                Verified Social Profiles
              </span>
              <div className="space-y-2.5">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 hover:bg-white dark:hover:bg-slate-800 transition-all ${s.color}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-slate-700 dark:text-slate-300">{s.icon}</span>
                      <div>
                        <p className="text-xs font-bold text-slate-900 dark:text-white">{s.name}</p>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">{s.handle}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-indigo-500">Visit ↗</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modern Refined Footer */}
      <footer
        className={`w-full py-8 border-t transition-colors ${
          darkMode
            ? "bg-slate-100 border-slate-200 text-slate-600"
            : "bg-[#070b14] border-slate-900 text-slate-400"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 Shreya Patha. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Built with React &amp; Tailwind CSS
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;

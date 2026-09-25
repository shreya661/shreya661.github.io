import React, { useState, useEffect, useRef, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../themeProvider";

const RESUME_URL = "https://drive.google.com/file/d/1WPbJBOMW_tDAAH45yiU1qiiOVS0If6Vo/view?usp=sharing";
const EMAIL = "pathashreya@gmail.com";
const GITHUB_URL = "https://github.com/shreya661";
const LINKEDIN_URL = "https://www.linkedin.com/in/shreya-patha-jw13/";

const getGreeting = () => {
  const h = new Date().getHours();
  return h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
};

const getResponse = (input) => {
  const msg = input.toLowerCase().trim();

  // Greetings
  if (/^(hi|hello|hey|howdy|sup|yo|hii|helo|greet|hola)\b/.test(msg)) {
    return {
      text: `👋 ${getGreeting()}! I'm Shreya's AI Assistant.\n\nI can help you explore her AI/ML projects, technical stack, internship experience, certifications, or facilitate getting in touch. What would you like to know?`,
      chips: ["🌟 Why hire Shreya?", "🚀 Projects", "🛠️ Skills", "💼 Experience", "📄 Resume", "📬 Contact"],
    };
  }

  // Why Hire Shreya / Recruiter Pitch
  if (/why hire|why should|pitch|strength|strengths|hire you|hire shreya|stand out|why choose/.test(msg)) {
    return {
      text: "🌟 Why Shreya is a great addition to your team:\n\n1. 🏆 Proven Leadership: AIML Team Lead Intern at UpToSkills, coordinating workflows and guiding intern teams.\n2. ⚡ Practical AI Builder: Hands-on experience developing end-to-end applications with FastAPI, LangChain, PostgreSQL, PyTorch, and LLMs.\n3. 🎯 Fast Learner & Problem Solver: Built 7+ distinct AI solutions ranging from computer vision to conversational AI agents.\n4. 🤝 Collaborative Mindset: Excellent communication skills, structured code practices, and eager to tackle real-world challenges.",
      chips: ["🎯 Target Roles", "🚀 Projects", "📄 Resume", "📬 Contact"],
      actions: [
        { label: "📄 View Resume", url: RESUME_URL, primary: true },
        { label: "✉️ Email Shreya", url: `mailto:${EMAIL}?subject=Job%20Opportunity%20for%20Shreya` },
      ],
    };
  }

  // Target Roles / Opportunities
  if (/role|roles|opportunity|opportunities|position|positions|looking for|seeking|open to|job|internship|availab/.test(msg)) {
    return {
      text: "🎯 Target Roles & Availability:\n\n• AI/ML Engineer Intern\n• Python & Backend Developer Intern\n• Data Science & Analytics Intern\n• Generative AI Solutions Developer\n\n📍 Location: Hyderabad, India (Available for Remote, Hybrid, or On-site roles)\n⏱️ Timeline: Available for upcoming internship and full-time opportunities!",
      chips: ["🛠️ Skills", "💼 Experience", "📄 Resume", "📬 Contact"],
      actions: [
        { label: "📄 View Resume", url: RESUME_URL, primary: true },
        { label: "📬 Get in Touch", url: `mailto:${EMAIL}?subject=Internship%20Opportunity` },
      ],
    };
  }

  // Specific Project: IntervIO
  if (/intervio|interview/.test(msg)) {
    return {
      text: "🎙️ IntervIO — AI Interview Platform\n\n• What it is: An intelligent interview simulation platform that evaluates candidate technical & behavioral responses in real time using LLMs.\n• Tech Stack: Python, FastAPI, PostgreSQL, GenAI\n• Key Features: Automated question generation, response scoring, structured performance evaluation, and candidate feedback reports.",
      chips: ["EduBridge AI", "NAVI 360", "All Projects", "🛠️ Skills"],
      scroll: "projects",
      actions: [
        { label: "💻 GitHub Repo", url: "https://github.com/shreya661/IntervIO", primary: true },
        { label: "📜 View on Page", isScroll: "projects" },
      ],
    };
  }

  // Specific Project: EduBridge
  if (/edubridge|school|tutor|human-like/.test(msg)) {
    return {
      text: "🎓 EduBridge — AI Human-Like School Assistant\n\n• What it is: An AI tutoring platform designed to make academic support conversational, intuitive, and instantly accessible to students.\n• Tech Stack: Python, FastAPI, GenAI, LLMs\n• Key Features: Natural dialogue flow, personalized academic Q&A, and curriculum concept explanations.",
      chips: ["IntervIO", "NAVI 360", "Journal AI", "All Projects"],
      scroll: "projects",
      actions: [
        { label: "💻 GitHub Repo", url: "https://github.com/shreya661/EduBridge-AI-Human-Like-School-Assistant", primary: true },
      ],
    };
  }

  // Specific Project: NAVI 360
  if (/navi|360|sign language|career platform/.test(msg)) {
    return {
      text: "🧭 NAVI 360 — AI Student & Career Platform\n\n• What it is: Full-stack career guidance and student productivity platform with interactive skill roadmaps and AI resume feedback.\n• Tech Stack: React, JavaScript, FastAPI, GenAI\n• Key Features: Skill gap analysis, personalized career paths, and AI recommendations.",
      chips: ["IntervIO", "LaunchPad", "Research AI", "All Projects"],
      scroll: "projects",
      actions: [
        { label: "💻 GitHub Repo", url: "https://github.com/shreya661/navi-360", primary: true },
      ],
    };
  }

  // Specific Project: Journal AI
  if (/journal|diary|emotion|mental/.test(msg)) {
    return {
      text: "📔 AI Journaling App (Journal AI)\n\n• What it is: Intelligent personal journaling platform that tracks emotional wellness, sentiments, and provides mindful insights over time.\n• Tech Stack: Python, FastAPI, React, PostgreSQL\n• Key Features: Real-time emotion classification, sentiment analytics, and entry history.",
      chips: ["Sentiment NLP", "IntervIO", "All Projects"],
      scroll: "projects",
      actions: [
        { label: "💻 GitHub Repo", url: "https://github.com/shreya661/Journal_AI", primary: true },
      ],
    };
  }

  // Specific Project: LaunchPad
  if (/launchpad|productivity|velocity|sprint/.test(msg)) {
    return {
      text: "🚀 LaunchPad — AI Productivity App\n\n• What it is: Developer productivity platform with automated task decomposition, deployment tracking, and sprint analytics.\n• Tech Stack: Python, FastAPI, GenAI\n• Key Features: Sprint velocity tracking, AI task breakdowns, and progress visualization.",
      chips: ["Research AI", "IntervIO", "All Projects"],
      scroll: "projects",
      actions: [
        { label: "💻 GitHub Repo", url: "https://github.com/shreya661/launchpad", primary: true },
      ],
    };
  }

  // Specific Project: Research AI
  if (/research|arxiv|paper|faiss|synthes/.test(msg)) {
    return {
      text: "🔬 Research AI\n\n• What it is: An AI research assistant that helps researchers explore, summarize, and synthesize academic papers.\n• Tech Stack: Python, LangChain, LLMs, FAISS vector search\n• Key Features: Semantic search over research documents, automated paper summarization, and key insight extraction.",
      chips: ["Sentiment NLP", "EduBridge AI", "All Projects"],
      scroll: "projects",
      actions: [
        { label: "💻 GitHub Repo", url: "https://github.com/shreya661/researchai", primary: true },
      ],
    };
  }

  // Specific Project: Sentiment Analysis
  if (/sentiment|social media|twitter|nlp/.test(msg)) {
    return {
      text: "📊 Social Media Sentiment Analysis\n\n• What it is: An NLP pipeline classifying social media posts into positive, negative, and neutral sentiments with interactive dashboards.\n• Tech Stack: Python, Scikit-Learn, Pandas, NLP\n• Key Features: Text preprocessing, TF-IDF / sentiment modeling, and visual distribution analytics.",
      chips: ["IntervIO", "Journal AI", "All Projects"],
      scroll: "projects",
      actions: [
        { label: "💻 GitHub Repo", url: "https://github.com/shreya661/social_media_sentiment_analysis-", primary: true },
      ],
    };
  }

  // All Projects
  if (/project|build|built|make|creat|portfolio work|app|platform/.test(msg)) {
    return {
      text: "🚀 Shreya has built 7+ AI/ML applications:\n\n1. IntervIO — AI Interview Simulation Platform\n2. EduBridge AI — Conversational School Assistant\n3. NAVI 360 — AI Career Guidance & Student Portal\n4. Journal AI — Sentiment-Aware AI Journaling\n5. LaunchPad — AI Task & Developer Productivity\n6. Research AI — Academic Paper Synthesis with LangChain\n7. Sentiment NLP — Social Media Analytics Engine\n\nClick any project below for a deep dive!",
      chips: ["IntervIO", "EduBridge AI", "NAVI 360", "Journal AI", "Research AI", "Sentiment NLP"],
      scroll: "projects",
    };
  }

  // Experience
  if (/experience|work|job|intern|uptoskills|lead|history|career/.test(msg)) {
    return {
      text: "💼 Professional Experience at UpToSkills:\n\n• AIML Team Lead Intern (May 2026 – Present)\n  - Leading cross-functional AI/ML and analytics intern teams\n  - Overseeing task coordination, scheduling, and project submissions\n  - Providing technical guidance on Generative AI and ML projects\n\n• AIML Intern (March 2026 – April 2026)\n  - Built SkillNova: AI-powered conversational support platform\n  - Implemented LLM APIs, LangChain, Groq API, and prompt engineering\n  - Built FastAPI backend with PostgreSQL session management",
      chips: ["🚀 Projects", "🛠️ Skills", "📄 Resume", "📬 Contact"],
      scroll: "experience",
    };
  }

  // Skills
  if (/skill|tech|stack|language|tool|technolog|libraries|framework|expertise/.test(msg)) {
    return {
      text: "🛠️ Technical Skills & Tools:\n\n• Languages & Frameworks: Python, FastAPI, JavaScript, React\n• AI & Machine Learning: PyTorch, OpenCV, Scikit-Learn, Pandas, NumPy\n• GenAI & LLMs: LangChain, OpenAI APIs, Groq API, FAISS\n• Database & Storage: PostgreSQL\n• Developer Tools: Git, GitHub, VS Code, Postman, Streamlit, Vercel, Power BI",
      chips: ["🚀 Projects", "💼 Experience", "📄 Resume", "📬 Contact"],
      scroll: "skills",
    };
  }

  // Education
  if (/education|study|college|tkr|btech|degree|university|school|intermediate/.test(msg)) {
    return {
      text: "🎓 Academic Background:\n\n• B.Tech in Computer Science & Engineering (AI & ML)\n  TKR College of Engineering and Technology, Hyderabad (Nov 2022 – Nov 2026)\n  Specializing in Artificial Intelligence, Computer Vision & NLP\n\n• Intermediate (MPC: Maths, Physics, Chemistry)\n  ABV Junior College, Hyderabad (2020 – 2022)",
      chips: ["📜 Certifications", "🚀 Projects", "🛠️ Skills", "📄 Resume"],
      scroll: "education",
    };
  }

  // Certifications
  if (/certif|certificate|certification|forage|tata|workshop|course/.test(msg)) {
    return {
      text: "📜 Certifications & Simulations:\n\n1. Tata - GenAI Powered Data Analytics Job Simulation (Tata / Forage)\n   - Completed hands-on tasks in prompt design, business analytics, and GenAI synthesis.\n2. AI Tools Workshop Certification\n   - Practical applications of generative AI tools for developer workflows.",
      chips: ["🎓 Education", "🛠️ Skills", "🚀 Projects", "📄 Resume"],
      scroll: "education",
    };
  }

  // Location / Relocation
  if (/location|relocate|city|where|live|hyderabad|remote/.test(msg)) {
    return {
      text: "📍 Location & Work Preference:\n\n• Based in: Hyderabad, Telangana, India\n• Work Mode: Open to Remote, Hybrid, or On-site positions in Hyderabad and major tech hubs across India.",
      chips: ["🎯 Target Roles", "📄 Resume", "📬 Contact"],
    };
  }

  // Contact / Socials
  if (/contact|reach|email|linkedin|github|connect|touch|message|talk|call|chat/.test(msg)) {
    return {
      text: "📬 Connect with Shreya Patha:\n\n• Email: pathashreya@gmail.com\n• LinkedIn: linkedin.com/in/shreya-patha-jw13\n• GitHub: github.com/shreya661\n\nFeel free to send a message or click below to reach out directly!",
      chips: ["📄 Resume", "🌟 Why hire Shreya?", "🚀 Projects"],
      scroll: "contact",
      actions: [
        { label: "✉️ Send Email", url: `mailto:${EMAIL}?subject=Hello%20Shreya%20-%20From%20Portfolio`, primary: true },
        { label: "💼 LinkedIn", url: LINKEDIN_URL },
        { label: "💻 GitHub", url: GITHUB_URL },
      ],
    };
  }

  // Resume
  if (/resume|cv|pdf|download|document/.test(msg)) {
    return {
      text: "📄 Shreya's Resume:\n\nClick the button below to view or download her up-to-date resume hosted securely on Google Drive:",
      chips: ["🌟 Why hire Shreya?", "🚀 Projects", "🛠️ Skills", "📬 Contact"],
      actions: [
        { label: "📄 Open Resume PDF", url: RESUME_URL, primary: true },
      ],
    };
  }

  // About Shreya
  if (/about|who is|bio|background|profile|introduce/.test(msg)) {
    return {
      text: "🙋‍♀️ About Shreya Patha:\n\nShreya is a B.Tech Computer Science & AI/ML student at TKR College of Engineering, Hyderabad (2022–2026), and AIML Team Lead Intern at UpToSkills.\n\nShe is passionate about building intelligent full-stack AI applications — from LLM orchestration and Computer Vision systems to scalable FastAPI backends.",
      chips: ["🌟 Why hire Shreya?", "🚀 Projects", "🛠️ Skills", "💼 Experience", "📄 Resume"],
      scroll: "about",
    };
  }

  // Gratitude
  if (/thank|thanks|thx|awesome|great|cool|nice|good job|helpful/.test(msg)) {
    return {
      text: "😊 You're very welcome! I'm here if you have any more questions about Shreya's work, projects, or background!",
      chips: ["🚀 Projects", "📄 Resume", "📬 Contact"],
    };
  }

  // Goodbye
  if (/bye|goodbye|see you|cya|later|exit/.test(msg)) {
    return {
      text: "👋 Thank you for visiting Shreya's portfolio! Have a wonderful day, and feel free to reach out anytime via the contact section.",
      chips: ["📬 Contact Shreya", "📄 View Resume"],
    };
  }

  // Default Fallback
  return {
    text: "🤔 I'm not certain about that specific query, but I can provide detailed information on any of these topics:",
    chips: ["🌟 Why hire Shreya?", "🚀 Projects", "🛠️ Skills", "💼 Experience", "🎓 Education", "📄 Resume", "📬 Contact"],
  };
};

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Chatbot = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Initial welcome message
  const initChat = () => {
    setMessages([
      {
        id: 1,
        type: "bot",
        text: `👋 ${getGreeting()}! I'm Shreya's AI Assistant.\n\nAsk me anything about her AI/ML projects, skills, experience at UpToSkills, or why she'd be a great fit for your team!`,
        chips: ["🌟 Why hire Shreya?", "🚀 Projects", "🛠️ Skills", "💼 Experience", "📄 Resume", "📬 Contact"],
      },
    ]);
  };

  useEffect(() => {
    initChat();
  }, []);

  // Auto-scroll inside chat box
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input and clear unread badge when opened
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Escape key to close chat
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const addBotResponse = (response) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { id: Date.now(), type: "bot", ...response }]);
      if (response.scroll) {
        setTimeout(() => scrollToSection(response.scroll), 400);
      }
    }, 700 + Math.random() * 300);
  };

  const handleSend = (text) => {
    const t = text || inputValue;
    if (!t.trim()) return;
    setMessages((prev) => [...prev, { id: Date.now(), type: "user", text: t }]);
    setInputValue("");
    addBotResponse(getResponse(t));
  };

  // Color tokens aligned with repo theme (darkMode=true means light background, darkMode=false means dark background)
  const dm = darkMode;
  const cardBg = dm ? "#ffffff" : "#0f172a";
  const headerBg = "linear-gradient(135deg, #2563eb, #1d4ed8)";
  const botBubble = dm ? "#f1f5f9" : "#1e293b";
  const botText = dm ? "#0f172a" : "#f1f5f9";
  const inputBg = dm ? "#f8fafc" : "#1e293b";
  const inputBorder = dm ? "#e2e8f0" : "#334155";
  const inputText = dm ? "#0f172a" : "#f8fafc";
  const chipBg = dm ? "#eff6ff" : "#1e3a5f";
  const chipBorder = dm ? "#bfdbfe" : "#3b82f6";
  const chipText = dm ? "#1d4ed8" : "#93c5fd";

  return (
    <>
      {/* Floating Launcher Button */}
      <motion.div
        style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 1000 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 1.2 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle AI Assistant"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 30px rgba(37,99,235,0.45)",
            position: "relative",
          }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                style={{ fontSize: "20px", color: "#fff", fontWeight: "bold" }}
              >
                ✕
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                style={{ fontSize: "26px" }}
              >
                💬
              </motion.span>
            )}
          </AnimatePresence>

          {hasUnread && !isOpen && (
            <motion.div
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
              style={{
                position: "absolute",
                top: "2px",
                right: "2px",
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                background: "#ef4444",
                border: "2px solid white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "9px",
                color: "white",
                fontWeight: "bold",
              }}
            >
              1
            </motion.div>
          )}
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 35, scale: 0.92 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            style={{
              position: "fixed",
              bottom: "96px",
              right: "24px",
              width: "min(390px, calc(100vw - 32px))",
              height: "560px",
              maxHeight: "calc(100vh - 120px)",
              borderRadius: "22px",
              boxShadow: "0 25px 60px -15px rgba(0,0,0,0.35), 0 0 1px 1px rgba(0,0,0,0.05)",
              zIndex: 999,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              background: cardBg,
              border: `1px solid ${inputBorder}`,
            }}
          >
            {/* Header */}
            <div
              style={{
                background: headerBg,
                padding: "14px 18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "#fff",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  🤖
                </div>
                <div>
                  <div style={{ color: "#fff", fontWeight: "700", fontSize: "14px", letterSpacing: "0.2px" }}>
                    Shreya's AI Assistant
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "1px" }}>
                    <motion.div
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ repeat: Infinity, duration: 1.8 }}
                      style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4ade80" }}
                    />
                    <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "11px", fontWeight: "500" }}>
                      Online · Ready to help
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <button
                  onClick={initChat}
                  title="Restart chat"
                  style={{
                    background: "rgba(255,255,255,0.18)",
                    border: "none",
                    borderRadius: "8px",
                    color: "#fff",
                    cursor: "pointer",
                    padding: "6px 9px",
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  🔄
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close (Esc)"
                  style={{
                    background: "rgba(255,255,255,0.18)",
                    border: "none",
                    borderRadius: "8px",
                    color: "#fff",
                    cursor: "pointer",
                    padding: "6px 10px",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {messages.map((msg) => (
                <div key={msg.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      display: "flex",
                      justifyContent: msg.type === "user" ? "flex-end" : "flex-start",
                    }}
                  >
                    <div
                      style={{
                        maxWidth: "85%",
                        padding: "10px 14px",
                        borderRadius:
                          msg.type === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                        background: msg.type === "user" ? "#2563eb" : botBubble,
                        color: msg.type === "user" ? "#ffffff" : botText,
                        fontSize: "13px",
                        lineHeight: "1.55",
                        whiteSpace: "pre-wrap",
                        boxShadow:
                          msg.type === "user"
                            ? "0 4px 14px rgba(37,99,235,0.25)"
                            : "0 2px 8px rgba(0,0,0,0.04)",
                      }}
                    >
                      {msg.text}

                      {/* Action Links & Buttons */}
                      {msg.actions && msg.actions.length > 0 && (
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "8px",
                            marginTop: "10px",
                            paddingTop: "8px",
                            borderTop: `1px solid ${dm ? "#e2e8f0" : "#334155"}`,
                          }}
                        >
                          {msg.actions.map((act, idx) =>
                            act.isScroll ? (
                              <button
                                key={idx}
                                onClick={() => scrollToSection(act.isScroll)}
                                style={{
                                  padding: "6px 12px",
                                  borderRadius: "8px",
                                  border: "none",
                                  background: "#2563eb",
                                  color: "#ffffff",
                                  fontSize: "12px",
                                  fontWeight: "600",
                                  cursor: "pointer",
                                }}
                              >
                                {act.label}
                              </button>
                            ) : (
                              <a
                                key={idx}
                                href={act.url}
                                target={act.url.startsWith("mailto:") ? "_self" : "_blank"}
                                rel="noopener noreferrer"
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: "5px",
                                  padding: "6px 12px",
                                  borderRadius: "8px",
                                  background: act.primary ? "#2563eb" : dm ? "#e2e8f0" : "#334155",
                                  color: act.primary ? "#ffffff" : dm ? "#0f172a" : "#f1f5f9",
                                  textDecoration: "none",
                                  fontSize: "12px",
                                  fontWeight: "600",
                                  transition: "opacity 0.2s",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                              >
                                {act.label}
                              </a>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {/* Suggestion Chips */}
                  {msg.type === "bot" && msg.chips && msg.chips.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                        marginTop: "8px",
                        paddingLeft: "4px",
                      }}
                    >
                      {msg.chips.map((chip) => (
                        <button
                          key={chip}
                          onClick={() => handleSend(chip)}
                          style={{
                            padding: "5px 12px",
                            borderRadius: "16px",
                            border: `1px solid ${chipBorder}`,
                            background: chipBg,
                            color: chipText,
                            fontSize: "11.5px",
                            fontWeight: "600",
                            cursor: "pointer",
                            transition: "all 0.15s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#2563eb";
                            e.currentTarget.style.color = "#ffffff";
                            e.currentTarget.style.borderColor = "#2563eb";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = chipBg;
                            e.currentTarget.style.color = chipText;
                            e.currentTarget.style.borderColor = chipBorder;
                          }}
                        >
                          {chip}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}

              {/* Typing Animation */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      padding: "10px 14px",
                      background: botBubble,
                      borderRadius: "18px 18px 18px 4px",
                      width: "fit-content",
                    }}
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
                        style={{
                          width: "7px",
                          height: "7px",
                          borderRadius: "50%",
                          background: dm ? "#64748b" : "#94a3b8",
                        }}
                      />
                    ))}
                    <span
                      style={{
                        marginLeft: "6px",
                        fontSize: "11px",
                        color: dm ? "#64748b" : "#94a3b8",
                      }}
                    >
                      Thinking...
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div
              style={{
                padding: "12px 14px",
                borderTop: `1px solid ${inputBorder}`,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: cardBg,
              }}
            >
              <input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about projects, skills, resume..."
                style={{
                  flex: 1,
                  padding: "10px 14px",
                  borderRadius: "12px",
                  border: `1px solid ${inputBorder}`,
                  background: inputBg,
                  color: inputText,
                  fontSize: "13px",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#2563eb")}
                onBlur={(e) => (e.target.style.borderColor = inputBorder)}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSend()}
                disabled={!inputValue.trim()}
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  background: inputValue.trim()
                    ? "linear-gradient(135deg, #2563eb, #1d4ed8)"
                    : dm
                    ? "#e2e8f0"
                    : "#334155",
                  border: "none",
                  cursor: inputValue.trim() ? "pointer" : "default",
                  fontSize: "16px",
                  color: inputValue.trim() ? "#fff" : dm ? "#94a3b8" : "#64748b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "background 0.2s",
                }}
              >
                ➤
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;

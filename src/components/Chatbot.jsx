import React, { useState, useEffect, useRef, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../themeProvider";

const getResponse = (input) => {
  const msg = input.toLowerCase().trim();
  if (/^(hi|hello|hey|howdy|sup|yo|hii|helo)\b/.test(msg))
    return { text: "👋 Hi there! I'm Shreya's AI Assistant. I can tell you about her skills, projects, experience, and more. What would you like to know?", chips: ["About Shreya", "Skills", "Projects", "Contact"] };
  if (/about|who|introduce|yourself|bio|background/.test(msg))
    return { text: "🙋‍♀️ Shreya Patha is a B.Tech student in CS & AI/ML at TKR College of Engineering, Hyderabad (2022–2026). She's passionate about building AI-powered applications — from Computer Vision and NLP to full-stack AI platforms!", chips: ["Skills", "Projects", "Experience", "Contact"], scroll: "about" };
  if (/skill|tech|stack|language|tool|know|expertise/.test(msg))
    return { text: "🛠️ Shreya's core skills:\n\n• Python, FastAPI, PostgreSQL\n• PyTorch, OpenCV, Scikit-Learn\n• LangChain, OpenAI APIs\n• Pandas, NumPy, Power BI\n• Git, Streamlit, Vercel", chips: ["Projects", "Experience", "Contact"], scroll: "skills" };
  if (/project|build|make|creat|app|platform/.test(msg))
    return { text: "🚀 Key Projects:\n\n• Intervio AI — AI interview coaching\n• EduBridge AI — Student career guidance\n• Navi360 — Sign language recognition\n• Journal AI — AI journaling app\n• Sentiment NLP — Real-time analysis", chips: ["See Projects", "Experience", "Contact"], scroll: "projects" };
  if (/experience|work|job|intern|role/.test(msg))
    return { text: "💼 Experience:\n\n• AI Engineer — Built AI-powered customer support platform with LangChain & FastAPI\n• Data Science Intern — ML models for predictive analytics and automated reporting", chips: ["Projects", "Skills", "Contact"], scroll: "experience" };
  if (/education|study|college|degree/.test(msg))
    return { text: "🎓 B.Tech in CS & Engineering (AI & ML) at TKR College of Engineering, Hyderabad (2022–2026). Also certified in GenAI-powered Data Analytics (Tata/Forage).", chips: ["Skills", "Projects", "Contact"], scroll: "education" };
  if (/contact|reach|email|linkedin|github|connect|hire|touch/.test(msg))
    return { text: "📬 Connect with Shreya:\n\n• GitHub: github.com/shreya661\n• LinkedIn: linkedin.com/in/shreya-patha-jw13\n• Or use the Contact section below!\n\nShe's open to internships & collaborations 🤝", chips: ["About Shreya", "Projects", "Resume"], scroll: "contact" };
  if (/resume|cv|download|pdf/.test(msg))
    return { text: "📄 Click below to view Shreya's resume:", chips: ["About Shreya", "Projects", "Contact"], resumeLink: true };
  if (/hire|available|open|opportunit|freelanc|intern/.test(msg))
    return { text: "✅ Yes! Shreya is actively looking for internships and AI/ML project collaborations. Reach out via the Contact section!", chips: ["Contact", "Resume", "Projects"], scroll: "contact" };
  if (/thank|thanks|thx|great|awesome|nice|cool/.test(msg))
    return { text: "😊 You're welcome! Feel free to ask me anything else about Shreya!", chips: ["About Shreya", "Projects", "Contact"] };
  if (/bye|goodbye|see you|later/.test(msg))
    return { text: "👋 Goodbye! Thanks for visiting Shreya's portfolio!", chips: [] };
  return { text: "🤔 I'm not sure about that, but I can help you with these topics:", chips: ["About Shreya", "Skills", "Projects", "Experience", "Contact", "Resume"] };
};

const getGreeting = () => {
  const h = new Date().getHours();
  return h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
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

  useEffect(() => {
    const t = setTimeout(() => {
      setMessages([{ id: 1, type: "bot", text: `${getGreeting()}! 👋 I'm Shreya's AI Assistant. Ask me about her skills, projects, experience, or how to get in touch!`, chips: ["About Shreya", "Skills", "Projects", "Contact"] }]);
    }, 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) { setHasUnread(false); setTimeout(() => inputRef.current?.focus(), 300); }
  }, [isOpen]);

  const addBotResponse = (response) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { id: Date.now(), type: "bot", ...response }]);
      if (response.scroll) setTimeout(() => scrollToSection(response.scroll), 600);
    }, 900 + Math.random() * 400);
  };

  const handleSend = (text) => {
    const t = text || inputValue;
    if (!t.trim()) return;
    setMessages(prev => [...prev, { id: Date.now(), type: "user", text: t }]);
    setInputValue("");
    addBotResponse(getResponse(t));
  };

  const dm = darkMode;
  const cardBg = dm ? "#f8fafc" : "#1e293b";
  const botBubble = dm ? "#e2e8f0" : "#334155";
  const botText = dm ? "#1e293b" : "#e2e8f0";
  const inputBg = dm ? "#ffffff" : "#0f172a";
  const inputBorder = dm ? "#cbd5e1" : "#334155";
  const inputText = dm ? "#1e293b" : "#e2e8f0";
  const chipBg = dm ? "#dbeafe" : "#1e3a5f";
  const chipText = dm ? "#1d4ed8" : "#93c5fd";

  return (
    <>
      <motion.div style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 1000 }} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 1.5 }}>
        <motion.button onClick={() => setIsOpen(!isOpen)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
          style={{ width: "60px", height: "60px", borderRadius: "50%", background: "linear-gradient(135deg,#3b82f6,#1d4ed8)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 32px rgba(59,130,246,0.5)", position: "relative" }}>
          <AnimatePresence mode="wait">
            {isOpen ? <motion.span key="c" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} style={{ fontSize: "22px", color: "#fff" }}>✕</motion.span>
              : <motion.span key="o" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} style={{ fontSize: "26px" }}>💬</motion.span>}
          </AnimatePresence>
          {hasUnread && !isOpen && (
            <motion.div animate={{ scale: [1, 1.25, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}
              style={{ position: "absolute", top: "2px", right: "2px", width: "16px", height: "16px", borderRadius: "50%", background: "#ef4444", border: "2px solid white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", color: "white", fontWeight: "bold" }}>1</motion.div>
          )}
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 40, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 40, scale: 0.9 }} transition={{ type: "spring", damping: 25 }}
            style={{ position: "fixed", bottom: "96px", right: "24px", width: "340px", height: "490px", borderRadius: "20px", boxShadow: "0 24px 64px rgba(0,0,0,0.4)", zIndex: 999, display: "flex", flexDirection: "column", overflow: "hidden", background: cardBg }}>

            {/* Header */}
            <div style={{ background: "#1d4ed8", padding: "14px 18px", display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>🤖</div>
              <div>
                <div style={{ color: "#fff", fontWeight: "700", fontSize: "14px" }}>Shreya's AI Assistant</div>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4ade80" }} />
                  <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "11px" }}>Online · Replies instantly</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, overflowY: "auto", padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {messages.map((msg) => (
                <div key={msg.id}>
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} style={{ display: "flex", justifyContent: msg.type === "user" ? "flex-end" : "flex-start" }}>
                    <div style={{ maxWidth: "82%", padding: "9px 13px", borderRadius: msg.type === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px", background: msg.type === "user" ? "#3b82f6" : botBubble, color: msg.type === "user" ? "#fff" : botText, fontSize: "13px", lineHeight: "1.5", whiteSpace: "pre-wrap" }}>
                      {msg.text}
                      {msg.resumeLink && (
                        <a href="https://drive.google.com/file/d/1WPbJBOMW_tDAAH45yiU1qiiOVS0If6Vo/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                          style={{ display: "inline-block", marginTop: "8px", padding: "6px 14px", background: "#3b82f6", color: "#fff", borderRadius: "8px", textDecoration: "none", fontSize: "12px", fontWeight: "600" }}>📄 View Resume</a>
                      )}
                    </div>
                  </motion.div>
                  {msg.type === "bot" && msg.chips && msg.chips.length > 0 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "7px" }}>
                      {msg.chips.map(chip => (
                        <button key={chip} onClick={() => handleSend(chip)}
                          style={{ padding: "4px 11px", borderRadius: "20px", border: `1px solid ${chipText}`, background: chipBg, color: chipText, fontSize: "11px", fontWeight: "600", cursor: "pointer" }}
                          onMouseEnter={e => { e.target.style.background="#3b82f6"; e.target.style.color="#fff"; e.target.style.borderColor="#3b82f6"; }}
                          onMouseLeave={e => { e.target.style.background=chipBg; e.target.style.color=chipText; e.target.style.borderColor=chipText; }}
                        >{chip}</button>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              <AnimatePresence>
                {isTyping && (
                  <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    style={{ display: "flex", gap: "5px", padding: "10px 13px", background: botBubble, borderRadius: "16px 16px 16px 4px", width: "fit-content" }}>
                    {[0,1,2].map(i => (
                      <motion.div key={i} animate={{ y: [0,-5,0] }} transition={{ repeat: Infinity, duration: 0.8, delay: i*0.15 }}
                        style={{ width: "7px", height: "7px", borderRadius: "50%", background: dm?"#64748b":"#94a3b8" }} />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div style={{ padding: "10px 14px", borderTop: `1px solid ${inputBorder}`, display: "flex", gap: "8px", background: cardBg }}>
              <input ref={inputRef} value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={e => e.key==="Enter" && handleSend()}
                placeholder="Ask me anything..." style={{ flex: 1, padding: "9px 13px", borderRadius: "12px", border: `1px solid ${inputBorder}`, background: inputBg, color: inputText, fontSize: "13px", outline: "none" }} />
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleSend()}
                style={{ width: "40px", height: "40px", borderRadius: "12px", background: "linear-gradient(135deg,#3b82f6,#1d4ed8)", border: "none", cursor: "pointer", fontSize: "16px", color: "#fff", flexShrink: 0 }}>➤</motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;

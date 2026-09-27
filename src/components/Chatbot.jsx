import React, { useState, useEffect, useRef, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../themeProvider";

const RESUME_URL = "https://drive.google.com/file/d/1htVbT1gcmGuBXM89QU6J30J050oHMWmK/view?usp=sharing";
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
  if (/^(hi|hello|hey|howdy|sup|yo|hii|helo|greet|hola|greetings)\b/.test(msg)) {
    return {
      text: `👋 ${getGreeting()}! I'm Shreya's AI Assistant.\n\nI can answer anything about Shreya Patha — her background as an AI Engineer, leadership at UpToSkills, 7+ AI/ML applications, tech stack, resume, or career availability.\n\nWhat would you like to explore?`,
      chips: ["🙋‍♀️ About Shreya", "🌟 Why hire Shreya?", "🚀 Key Projects", "💼 Experience & Leadership", "🛠️ Tech Stack", "📄 Resume", "📬 Contact"],
    };
  }

  // Comprehensive About Shreya / Who is Shreya / Introduction
  if (/about|who is|who are you|bio|background|profile|introduce|introduction|summary|tell me about (her|shreya|yourself)|overview/.test(msg)) {
    return {
      text: `🙋‍♀️ Meet Shreya Patha — AI Engineer & Full-Stack AI Builder based in Hyderabad, India.\n\n• 🎯 Core Focus: Architecting and deploying end-to-end intelligent systems — combining Large Language Models (LLMs), FastAPI microservices, vector search, and responsive user interfaces.\n• 🏆 Current Role: AIML Team Lead Intern at UpToSkills, where she leads cross-functional intern teams, manages project pipelines, and built SkillNova (a production-grade conversational AI platform).\n• 🎓 Academics: B.Tech in Computer Science & Engineering (Artificial Intelligence & Machine Learning) at TKR College of Engineering & Technology, Hyderabad (2022–2026).\n• 💡 Philosophy: Passionate about bridging theoretical AI research into real-world production tools that solve tangible problems.\n• 🚀 Track Record: 7+ complete applications built across interview intelligence, educational tutoring, career guidance, wellness, and research paper synthesis.`,
      chips: ["🌟 Why hire Shreya?", "🚀 View Projects", "💼 UpToSkills Experience", "🛠️ Tech Stack", "📄 Resume", "📬 Contact"],
      scroll: "about",
      actions: [
        { label: "📄 View Resume", url: RESUME_URL, primary: true },
        { label: "💼 LinkedIn", url: LINKEDIN_URL },
        { label: "💻 GitHub", url: GITHUB_URL },
      ],
    };
  }

  // Why Hire Shreya / Recruiter Pitch / Strengths
  if (/why hire|why should|pitch|strength|strengths|hire you|hire shreya|stand out|why choose|value|differentiator|why you/.test(msg)) {
    return {
      text: `🌟 Why Shreya is an exceptional addition to your engineering team:\n\n1. ⚡ Proven Execution Speed: Shreya doesn't just write scripts — she has built and shipped 7+ full-stack AI applications spanning GenAI, NLP, Computer Vision, and scalable backends.\n2. 👥 Demonstrated Leadership: Promoted to AIML Team Lead Intern at UpToSkills, where she coordinates multi-disciplinary intern squads, sets code standards, conducts reviews, and ensures milestone delivery.\n3. 🧠 Modern AI & Backend Architecture: Proficient with modern LLM pipelines (LangChain, Groq, OpenAI APIs), vector databases (FAISS), FastAPI backends, and PostgreSQL data persistence.\n4. 📈 Rapid Learning Agility: Quickly grasps emerging AI frameworks, evaluates latency/cost trade-offs, and turns ambiguous requirements into functional prototypes.\n5. 🤝 High Ownership & Collaboration: Highly articulate, proactive communicator with a strong team-first mindset and dedication to production quality.`,
      chips: ["🎯 Target Roles", "🚀 View Projects", "💼 UpToSkills Experience", "📄 Resume", "📬 Email Shreya"],
      actions: [
        { label: "📄 View Resume", url: RESUME_URL, primary: true },
        { label: "✉️ Email Shreya", url: `mailto:${EMAIL}?subject=Job%20Opportunity%20for%20Shreya`, primary: true },
        { label: "💼 LinkedIn Profile", url: LINKEDIN_URL },
      ],
    };
  }

  // Disadvantages / Weaknesses / Areas of Improvement & Overcoming Challenges
  if (/disadvantag|weakness|limitation|area.*(improve|growth)|drawback|negative|struggle|challenge.*overcome|how.*overcome|over come|flaw/.test(msg)) {
    return {
      text: `🌱 Constructive Growth Areas & How Shreya Proactively Overcomes Them:\n\n1. 🔍 Early Perfectionism vs. Fast Iteration:\n   • The Challenge: Shreya's strong attention to architectural design and detail can sometimes tempt her to over-polish early-stage prototypes.\n   • How She Overcomes It: She practices an agile MVP-first methodology — shipping a working version rapidly, validating with real user and mentor feedback, and refining iteratively in sprints.\n\n2. 🏢 Massive-Scale Distributed Infrastructure:\n   • The Challenge: While she has strong hands-on mastery of full-stack AI, FastAPI backends, and PostgreSQL, she has less production exposure to large-scale enterprise Kubernetes orchestration or multi-region microservice deployments.\n   • How She Overcomes It: She actively studies system design fundamentals, container orchestration (Docker), and seeks mentorship from senior architects to rapidly scale her production systems engineering.\n\n3. ⚡ Fast-Moving AI Ecosystem:\n   • The Challenge: The Generative AI ecosystem introduces new libraries, models, and research daily, which can easily divert focus.\n   • How She Overcomes It: She maintains a disciplined filter — focusing deeply on foundational principles (evaluation, latency, cost, and reliability) while building focused POCs on GitHub to validate new technologies.\n\n💡 Bottom Line: Shreya pairs deep self-awareness with an active growth mindset, treating every limitation as an exciting challenge to master!`,
      chips: ["🌟 Why hire Shreya?", "🚀 View Projects", "💼 UpToSkills Experience", "📄 Resume", "📬 Contact"],
      actions: [
        { label: "📄 View Resume", url: RESUME_URL, primary: true },
        { label: "✉️ Email Shreya", url: `mailto:${EMAIL}?subject=Discussion%20with%20Shreya`, primary: true },
      ],
    };
  }

  // Handling Pressure, Deadlines & Stress
  if (/pressure|stress|deadline|workload|crunch|tight schedule|handle.*pressure/.test(msg)) {
    return {
      text: `⚡ How Shreya Thrives Under Pressure & Manages Tight Deadlines:\n\n1. 🎯 Ruthless Prioritization: Uses impact vs. effort matrices to identify critical path deliverables first.\n2. ⏱️ Agile Sprints: Breaks complex features into small, testable milestones — a practice she honed as AIML Team Lead Intern at UpToSkills.\n3. 🗣️ Proactive Communication: Keeps team members and stakeholders informed early if scope adjustments or blockers arise.\n4. 🧘 Composure & Focus: Approaches bugs and high-stakes deadlines with systematic debugging and calm root-cause analysis.`,
      chips: ["🌟 Why hire Shreya?", "💼 UpToSkills Experience", "📄 Resume", "📬 Contact"],
    };
  }

  // Future Goals & 3-5 Year Vision
  if (/future|vision|3 years|5 years|goal|goals|aspire|aspiration|career plan|where.*see/.test(msg)) {
    return {
      text: `🚀 Shreya's Career Vision & Long-Term Goals:\n\n• 🎯 Short-Term (1–2 Years): Excel as an AI/ML Engineer in a high-growth team, taking end-to-end ownership of production LLM pipelines, autonomous agents, and backend microservices.\n• 🌟 Long-Term (3–5 Years): Grow into a Lead AI Systems Architect who spearheads innovative, ethical AI architectures that solve large-scale problems for millions of users.\n• 📚 Core Driver: Continually pushing the boundary between cutting-edge AI research and dependable production software.`,
      chips: ["🎯 Target Roles", "🚀 View Projects", "🛠️ Tech Stack", "📄 Resume"],
    };
  }

  // Why AI/ML / Passion
  if (/why ai|why ml|why machine learning|why choose ai|passion|interest in ai/.test(msg)) {
    return {
      text: `💡 Why Shreya Chose AI & Machine Learning:\n\n"What excites me most about AI is the ability to transform complex, unstructured human data — text, code, voice, and vision — into intelligent systems that genuinely simplify people's lives.\n\nFrom building IntervIO to give candidates fair mock interview feedback, to EduBridge making tutoring accessible, I love turning theoretical algorithms into working software that solves real human pain points."`,
      chips: ["🚀 View Projects", "🌟 Why hire Shreya?", "💼 UpToSkills Experience", "📄 Resume"],
    };
  }

  // Experience & Leadership at UpToSkills
  if (/experience|work|job|intern|uptoskills|lead|leadership|history|career|skillnova|mentor|team lead/.test(msg)) {
    return {
      text: `💼 Professional Experience at UpToSkills (Remote):\n\n1. 🌟 AIML Team Lead Intern (May 2026 – Present)\n   • Leading cross-functional AI/ML and analytics intern squads\n   • Coordinating task sprints, milestone delivery schedules, and technical submissions\n   • Mentoring interns on Generative AI concepts, prompt engineering, and LLM API integrations\n   • Overseeing code quality, pull requests, and providing structured technical feedback\n\n2. 🚀 AIML Intern (March 2026 – April 2026)\n   • Architected & deployed SkillNova — an AI conversational platform for real-time intern query resolution\n   • Implemented FastAPI backend with PostgreSQL session management\n   • Integrated high-speed LLM inference using Groq API and LangChain workflows\n   • Optimized prompt design to reduce response latency and improve answer precision`,
      chips: ["🚀 Key Projects", "🛠️ Technical Skills", "🌟 Why hire Shreya?", "📄 Resume", "📬 Contact"],
      scroll: "experience",
      actions: [
        { label: "📄 View Resume", url: RESUME_URL, primary: true },
        { label: "📜 View Experience on Page", isScroll: "experience" },
      ],
    };
  }

  // Target Roles & Hiring Availability
  if (/role|roles|opportunity|opportunities|position|positions|looking for|seeking|open to|job|internship|availab|hire|join|notice period|when can/.test(msg)) {
    return {
      text: `🎯 Target Roles & Availability:\n\n• 💼 Roles Sought:\n  - AI / ML Engineer Intern\n  - Generative AI & LLM Solutions Developer\n  - Python & FastAPI Backend Developer Intern\n  - Data Science & Analytics Intern\n\n• ⏱️ Availability: Immediately available for internships, co-ops, and 2026 graduate full-time positions!\n• 📍 Location: Hyderabad, India (Open to Remote, Hybrid, or On-site across tech hubs like Bangalore, Mumbai, Pune, NCR).\n• 📝 Work Authorization: Authorized to work in India.`,
      chips: ["🌟 Why hire Shreya?", "🛠️ Skills", "📄 Resume", "📬 Get in Touch"],
      actions: [
        { label: "📄 View Resume", url: RESUME_URL, primary: true },
        { label: "📬 Contact Directly", url: `mailto:${EMAIL}?subject=Job%20Opportunity%20for%20Shreya`, primary: true },
      ],
    };
  }

  // Specific Project: IntervIO
  if (/intervio|interview/.test(msg)) {
    return {
      text: `🎙️ IntervIO — AI Interview Simulation Platform\n\n• The Problem: Traditional technical and behavioral mock interviews are expensive and hard to schedule at scale.\n• Shreya's Solution: An intelligent end-to-end interview simulation platform powered by LLMs that conducts automated technical rounds, dynamically adapts questions, evaluates responses in real time, and produces structured candidate scorecards.\n• Tech Stack: Python, FastAPI, PostgreSQL, GenAI, LLMs\n• Highlights: Automated question generation, live response evaluation, grading matrices, and persistent feedback logs.`,
      chips: ["🎓 EduBridge AI", "🧭 NAVI 360", "🚀 All Projects", "🛠️ Skills"],
      scroll: "projects",
      actions: [
        { label: "💻 GitHub Repository", url: "https://github.com/shreya661/IntervIO", primary: true },
        { label: "📜 View Projects on Page", isScroll: "projects" },
      ],
    };
  }

  // Specific Project: EduBridge AI
  if (/edubridge|school|tutor|human-like|education platform/.test(msg)) {
    return {
      text: `🎓 EduBridge AI — Conversational School Assistant\n\n• The Problem: Students often get stuck on academic concepts outside classroom hours without immediate, patient pedagogical help.\n• Shreya's Solution: A conversational tutoring assistant that explains complex subjects in an approachable, human-like dialogue flow tailored to student understanding.\n• Tech Stack: Python, FastAPI, GenAI, LLMs\n• Highlights: Pedagogical prompt engineering, context retention, step-by-step problem breakdown, and curriculum concept simplification.`,
      chips: ["🎙️ IntervIO", "🧭 NAVI 360", "📔 Journal AI", "🚀 All Projects"],
      scroll: "projects",
      actions: [
        { label: "💻 GitHub Repository", url: "https://github.com/shreya661/EduBridge-AI-Human-Like-School-Assistant", primary: true },
        { label: "📜 View Projects on Page", isScroll: "projects" },
      ],
    };
  }

  // Specific Project: NAVI 360
  if (/navi|360|career|roadmap|student platform/.test(msg)) {
    return {
      text: `🧭 NAVI 360 — AI Career Guidance & Student Platform\n\n• The Problem: Students lack structured visibility into engineering career paths, market skill requirements, and resume feedback.\n• Shreya's Solution: A comprehensive career companion featuring interactive skill roadmaps, resume evaluation, and AI-driven skill gap recommendations.\n• Tech Stack: React, JavaScript, FastAPI, GenAI\n• Highlights: Dynamic career roadmaps, personalized milestone checklists, and automated resume suggestions.`,
      chips: ["🎙️ IntervIO", "🚀 LaunchPad", "🔬 Research AI", "🚀 All Projects"],
      scroll: "projects",
      actions: [
        { label: "💻 GitHub Repository", url: "https://github.com/shreya661/navi-360", primary: true },
        { label: "📜 View Projects on Page", isScroll: "projects" },
      ],
    };
  }

  // Specific Project: Journal AI
  if (/journal|diary|emotion|mental|wellness|mood/.test(msg)) {
    return {
      text: `📔 Journal AI — Emotion-Aware Journaling Platform\n\n• The Problem: Traditional journaling lacks actionable emotional insights, making it difficult for users to recognize wellness trends.\n• Shreya's Solution: A full-stack AI journal that performs sentiment and emotional classification on daily entries, providing mindful summaries and wellness tracking over time.\n• Tech Stack: Python, FastAPI, React, PostgreSQL\n• Highlights: Real-time emotion classification, sentiment analytics, entry history dashboard, and privacy-focused design.`,
      chips: ["📊 Sentiment NLP", "🎙️ IntervIO", "🚀 All Projects"],
      scroll: "projects",
      actions: [
        { label: "💻 GitHub Repository", url: "https://github.com/shreya661/Journal_AI", primary: true },
        { label: "📜 View Projects on Page", isScroll: "projects" },
      ],
    };
  }

  // Specific Project: LaunchPad
  if (/launchpad|productivity|velocity|sprint|developer platform/.test(msg)) {
    return {
      text: `🚀 LaunchPad — AI Developer Productivity App\n\n• The Problem: Engineering task planning, sprint decomposition, and velocity estimation require extensive manual overhead.\n• Shreya's Solution: An intelligent developer productivity platform with automated task breakdown, sprint analytics, and progress tracking.\n• Tech Stack: Python, FastAPI, GenAI\n• Highlights: AI-assisted sprint planning, automated sub-task generation, and velocity visualization.`,
      chips: ["🔬 Research AI", "🎙️ IntervIO", "🚀 All Projects"],
      scroll: "projects",
      actions: [
        { label: "💻 GitHub Repository", url: "https://github.com/shreya661/launchpad", primary: true },
        { label: "📜 View Projects on Page", isScroll: "projects" },
      ],
    };
  }

  // Specific Project: Research AI
  if (/research|arxiv|paper|faiss|synthes|academic/.test(msg)) {
    return {
      text: `🔬 Research AI — Academic Paper Synthesis\n\n• The Problem: Reviewing dense academic literature and extracting key methodology insights is time-consuming.\n• Shreya's Solution: An AI research copilot that parses academic PDFs, indexes them with FAISS vector search, and synthesizes key insights using LangChain and LLMs.\n• Tech Stack: Python, LangChain, LLMs, FAISS vector search\n• Highlights: Semantic search across research papers, automated abstract & methodology extraction, and structured Q&A.`,
      chips: ["📊 Sentiment NLP", "🎓 EduBridge AI", "🚀 All Projects"],
      scroll: "projects",
      actions: [
        { label: "💻 GitHub Repository", url: "https://github.com/shreya661/researchai", primary: true },
        { label: "📜 View Projects on Page", isScroll: "projects" },
      ],
    };
  }

  // Specific Project: Sentiment Analysis
  if (/sentiment|social media|twitter|nlp|classification/.test(msg)) {
    return {
      text: `📊 Sentiment NLP — Social Media Analytics Pipeline\n\n• The Problem: Unstructured social feedback contains critical public sentiment signals that cannot be analyzed manually.\n• Shreya's Solution: An NLP pipeline classifying social media posts into positive, negative, and neutral categories with interactive distribution analytics.\n• Tech Stack: Python, Scikit-Learn, Pandas, NLP\n• Highlights: Text preprocessing (cleaning, tokenization, stopword removal), TF-IDF vectorization, ML classification, and dashboard analytics.`,
      chips: ["🎙️ IntervIO", "📔 Journal AI", "🚀 All Projects"],
      scroll: "projects",
      actions: [
        { label: "💻 GitHub Repository", url: "https://github.com/shreya661/social_media_sentiment_analysis-", primary: true },
        { label: "📜 View Projects on Page", isScroll: "projects" },
      ],
    };
  }

  // All Projects Overview
  if (/project|build|built|make|creat|portfolio work|app|platform|what did she build/.test(msg)) {
    return {
      text: `🚀 Shreya has built 7+ full-stack AI/ML applications:\n\n1. 🎙️ IntervIO — Real-time AI interview simulation & candidate evaluation platform\n2. 🎓 EduBridge AI — Conversational AI school assistant & tutoring platform\n3. 🧭 NAVI 360 — AI career guidance, student roadmaps & resume advice\n4. 📔 Journal AI — Emotion-aware journaling app with sentiment tracking\n5. 🚀 LaunchPad — AI task decomposition & developer sprint productivity\n6. 🔬 Research AI — Academic paper synthesis with LangChain & FAISS vector search\n7. 📊 Sentiment NLP — Social media sentiment classification & analytics engine\n\nSelect any project below to view full architecture & GitHub link:`,
      chips: ["IntervIO", "EduBridge AI", "NAVI 360", "Journal AI", "LaunchPad", "Research AI", "Sentiment NLP"],
      scroll: "projects",
      actions: [
        { label: "📜 Scroll to Projects", isScroll: "projects" },
        { label: "💻 Shreya's GitHub", url: GITHUB_URL },
      ],
    };
  }

  // Skills & Technical Expertise
  if (/skill|tech|stack|language|tool|technolog|libraries|framework|expertise|python|fastapi|machine learning|deep learning|genai|llm|backend|database/.test(msg)) {
    return {
      text: `🛠️ Shreya's Technical Arsenal:\n\n• 🐍 Programming Languages: Python (Proficient), JavaScript (ES6+), SQL, HTML5/CSS3\n• 🧠 Generative AI & LLMs: LangChain, OpenAI APIs, Groq API, FAISS (Vector DB), Prompt Engineering, Semantic Search\n• 📊 Machine Learning & Vision: PyTorch, OpenCV, Scikit-Learn, Pandas, NumPy\n• ⚡ Backend & APIs: FastAPI, RESTful API Design, PostgreSQL, JSON Schema\n• 🎨 Frontend & Modern UI: React.js, Framer Motion, Vanilla CSS, Responsive Layouts\n• 🔧 Developer Tools: Git, GitHub, VS Code, Postman, Streamlit, Vercel, Power BI`,
      chips: ["🚀 Key Projects", "💼 UpToSkills Experience", "🌟 Why hire Shreya?", "📄 Resume"],
      scroll: "skills",
      actions: [
        { label: "📜 View Skills on Page", isScroll: "skills" },
        { label: "📄 View Resume", url: RESUME_URL, primary: true },
      ],
    };
  }

  // Education
  if (/education|study|college|tkr|btech|degree|university|school|intermediate|gpa|academics/.test(msg)) {
    return {
      text: `🎓 Academic Background:\n\n• 🎓 Bachelor of Technology (B.Tech)\n  Major: Computer Science & Engineering (Artificial Intelligence & Machine Learning)\n  Institution: TKR College of Engineering and Technology, Hyderabad\n  Duration: Nov 2022 – Nov 2026\n  Core Coursework: Data Structures, Algorithms, Machine Learning, Deep Learning, NLP, Computer Vision, Database Systems, Operating Systems.\n\n• 🏫 Intermediate (12th Grade)\n  Stream: MPC (Mathematics, Physics, Chemistry)\n  Institution: ABV Junior College, Hyderabad (2020 – 2022)`,
      chips: ["📜 Certifications", "💼 Experience", "🛠️ Skills", "📄 Resume"],
      scroll: "education",
    };
  }

  // Certifications
  if (/certif|certificate|certification|forage|tata|workshop|course|credential/.test(msg)) {
    return {
      text: `📜 Professional Certifications & Job Simulations:\n\n1. 🏆 Tata - GenAI Powered Data Analytics Job Simulation (Tata / Forage)\n   • Completed hands-on simulation covering prompt engineering for business intelligence, GenAI-driven data synthesis, and executive reporting.\n\n2. 💡 AI Tools & Generative AI Workshop Certification\n   • Applied practical generative AI developer tools and workflows for productivity, rapid prototyping, and software engineering.`,
      chips: ["🎓 Education", "🛠️ Skills", "🚀 Projects", "📄 Resume"],
      scroll: "education",
    };
  }

  // Location / Relocation
  if (/location|relocate|city|where|live|hyderabad|remote|onsite|hybrid|bangalore/.test(msg)) {
    return {
      text: `📍 Location & Relocation:\n\n• Current Location: Hyderabad, Telangana, India\n• Work Mode Preferences:\n  - ✅ Remote (Fully equipped home development setup)\n  - ✅ Hybrid / On-site in Hyderabad\n  - ✅ Open to relocation to major tech hubs including Bangalore, Mumbai, Pune, NCR for suitable full-time/internship opportunities!`,
      chips: ["🎯 Target Roles", "📄 Resume", "📬 Contact Shreya"],
    };
  }

  // Contact / Socials
  if (/contact|reach|email|linkedin|github|connect|touch|message|talk|call|chat|phone/.test(msg)) {
    return {
      text: `📬 Let's Connect with Shreya Patha!\n\n• ✉️ Email: pathashreya@gmail.com\n• 💼 LinkedIn: linkedin.com/in/shreya-patha-jw13\n• 💻 GitHub: github.com/shreya661\n\nShreya is very responsive to inquiries regarding internships, projects, or technical collaboration. Click below to reach out:`,
      chips: ["📄 View Resume", "🌟 Why hire Shreya?", "🚀 Projects"],
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
      text: `📄 Shreya's Official Resume:\n\nHer resume includes comprehensive details of her AIML Team Lead role at UpToSkills, all 7 deployed AI projects, technical toolkit, and academic background.\n\nClick the button below to view or download the PDF:`,
      chips: ["🌟 Why hire Shreya?", "🚀 Projects", "💼 Experience", "📬 Contact"],
      actions: [
        { label: "📄 Open Resume PDF", url: RESUME_URL, primary: true },
        { label: "✉️ Email Shreya", url: `mailto:${EMAIL}?subject=Opportunity%20Discussion` },
      ],
    };
  }

  // Work Ethic & Collaboration Style
  if (/work ethic|working style|culture|personality|soft skill|collaboration|teamwork|how do you work/.test(msg)) {
    return {
      text: `🤝 Shreya's Work Ethic & Collaborative Style:\n\n• 🚀 High Ownership: Takes end-to-end responsibility for features — from requirement scoping to architecture, implementation, and testing.\n• 🗣️ Transparent Communication: Regularly shares async updates, documents decisions, and proactively flags bottlenecks.\n• 💡 Mentorship & Team Spirit: As Team Lead at UpToSkills, she thrives in helping peers overcome blockers and celebrating collective milestones.\n• 📚 Relentless Curiosity: Continuously experimenting with state-of-the-art AI advancements and integrating them into usable software.`,
      chips: ["🌟 Why hire Shreya?", "💼 UpToSkills Experience", "📄 Resume", "📬 Contact"],
    };
  }

  // Achievements
  if (/achievement|accomplishment|highlight|success|proud/.test(msg)) {
    return {
      text: `🏆 Key Career Highlights & Milestones:\n\n1. 🌟 Leadership Promotion: Appointed AIML Team Lead Intern at UpToSkills after demonstrating strong technical acumen and communication.\n2. 🤖 Production AI Delivery: Architected & launched SkillNova, an intern support assistant utilizing FastAPI and low-latency Groq LLM pipelines.\n3. 🚀 High Project Velocity: Successfully built and open-sourced 7+ distinct AI applications across GenAI, Computer Vision, and NLP.\n4. 🎓 Academic Excellence: Specializing in AI/ML at TKR College of Engineering with practical hands-on project implementations.`,
      chips: ["🌟 Why hire Shreya?", "🚀 View Projects", "📄 Resume", "📬 Contact"],
    };
  }

  // Compensation / Stipend
  if (/salary|stipend|compensation|pay|rate/.test(msg)) {
    return {
      text: `💼 Compensation & Stipend:\n\nShreya is open to competitive industry standards for AI/ML and software engineering intern/graduate roles. Her top priority is joining an ambitious engineering team where she can build impactful AI systems and grow rapidly.`,
      chips: ["🎯 Target Roles", "📄 Resume", "📬 Contact"],
      actions: [
        { label: "✉️ Discuss Opportunity", url: `mailto:${EMAIL}?subject=Opportunity%20Discussion`, primary: true },
      ],
    };
  }

  // Gratitude
  if (/thank|thanks|thx|awesome|great|cool|nice|good job|helpful|super/.test(msg)) {
    return {
      text: `😊 You're very welcome! I'm glad I could provide helpful insights. Feel free to ask anything else about Shreya's work, or reach out to her directly!`,
      chips: ["🚀 View Projects", "📄 View Resume", "📬 Contact Shreya"],
    };
  }

  // Goodbye
  if (/bye|goodbye|see you|cya|later|exit|close/.test(msg)) {
    return {
      text: `👋 Thank you for visiting Shreya's portfolio! Have a wonderful day, and don't hesitate to reach out via email or LinkedIn anytime.`,
      chips: ["📬 Contact Shreya", "📄 View Resume"],
    };
  }

  // Intelligent Fallback
  return {
    text: `🤔 I want to make sure I give you the best answer about Shreya. Here are the main areas I can tell you about:\n\n• 🙋‍♀️ About Shreya & her background in AI\n• 🌟 Why Shreya is a great hire for engineering teams\n• 🚀 Deep dive into any of her 7+ AI/ML projects\n• 💼 Her AIML Team Lead experience at UpToSkills\n• 🛠️ Her technical stack (Python, FastAPI, LLMs, React, PostgreSQL)\n• 📄 Resume & direct contact channels`,
    chips: ["🙋‍♀️ About Shreya", "🌟 Why hire Shreya?", "🚀 Projects", "💼 Experience", "🛠️ Skills", "📄 Resume", "📬 Contact"],
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

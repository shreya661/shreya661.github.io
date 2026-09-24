import React from "react";
import { motion } from "framer-motion";

const cardClass = "max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-4 hover:shadow-2xl transition-shadow duration-300";
const btnGithub = "project-github-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors duration-300";
const btnLive = "project-deployed-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 transition-colors duration-300";

const tagColors = [
  "bg-blue-100 text-blue-800",
  "bg-green-100 text-green-800",
  "bg-purple-100 text-purple-800",
  "bg-yellow-100 text-yellow-800",
  "bg-pink-100 text-pink-800",
  "bg-indigo-100 text-indigo-800",
];

const Tag = ({ label, colorIdx = 0 }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tagColors[colorIdx % tagColors.length]}`}>
    {label}
  </span>
);

const ProjectCard = ({ title, description, githubUrl, liveUrl, liveLabel, tags, imgSrc, imgAlt }) => (
  <motion.div
    initial={"hidden"}
    whileInView={"visible"}
    whileHover={{ y: -10, transition: { duration: 0.3 } }}
    variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
    className={cardClass}
  >
    <a href={githubUrl}>
      <img
        style={{ height: "220px", width: "100%", objectFit: "cover" }}
        className="rounded-t-lg w-full hover:opacity-90 transition-opacity duration-300"
        src={imgSrc}
        alt={imgAlt}
      />
    </a>
    <div className="p-5">
      <a href={githubUrl}>
        <h5 className="project-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 transition-colors duration-300">
          {title}
        </h5>
      </a>
      <p className="project-description mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      <div className="project-tech-stack mb-4 flex flex-wrap gap-2">
        {tags.map((t, i) => <Tag key={i} label={t} colorIdx={i} />)}
      </div>
      <div className="flex gap-3">
        <a style={{ paddingLeft: "20px", paddingRight: "20px" }} href={githubUrl} className={btnGithub}>GitHub</a>
        {liveUrl && (
          <a style={{ paddingLeft: "20px", paddingRight: "20px" }} href={liveUrl} className={btnLive}>
            {liveLabel || "Live"}
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

// ─── All 7 Projects ──────────────────────────────────────────────────────────

export const Card = () => (
  <ProjectCard
    title="IntervIO — AI Interview Platform"
    description="An AI-powered interview platform that conducts real-time automated interviews, evaluates responses, and provides structured feedback to candidates using LLMs."
    githubUrl="https://github.com/shreya661/IntervIO"
    tags={["Python", "LLMs", "FastAPI", "PostgreSQL", "GenAI"]}
    imgSrc="https://opengraph.githubassets.com/1/shreya661/IntervIO"
    imgAlt="IntervIO AI Interview Platform"
  />
);

export const Card2 = () => (
  <ProjectCard
    title="EduBridge — AI Human-Like School Assistant"
    description="An AI-powered school assistant designed to make student support more natural, accessible, and conversational using LLMs and NLP."
    githubUrl="https://github.com/shreya661/EduBridge-AI-Human-Like-School-Assistant"
    tags={["Python", "GenAI", "LLMs", "NLP", "AI Assistant"]}
    imgSrc="https://opengraph.githubassets.com/1/shreya661/EduBridge-AI-Human-Like-School-Assistant"
    imgAlt="EduBridge AI School Assistant"
  />
);

export const Card3 = () => (
  <ProjectCard
    title="NAVI 360 — AI Student & Career Platform"
    description="A full-stack student-focused AI platform combining learning support, career guidance, smart assistance, and useful academic workflows."
    githubUrl="https://github.com/shreya661/navi-360"
    tags={["JavaScript", "GenAI", "Full Stack", "FastAPI", "AI Workflows"]}
    imgSrc="https://opengraph.githubassets.com/1/shreya661/navi-360"
    imgAlt="NAVI 360 AI Student Platform"
  />
);

export const Card4 = () => (
  <ProjectCard
    title="AI Journaling App"
    description="A full-stack journaling application that uses AI to analyze journal entries, detect sentiment, and provide meaningful personalized feedback."
    githubUrl="https://github.com/shreya661/Journal_AI"
    tags={["Python", "FastAPI", "React", "SQLAlchemy", "Groq API"]}
    imgSrc="https://opengraph.githubassets.com/1/shreya661/Journal_AI"
    imgAlt="AI Journaling App"
  />
);

export const Card5 = () => (
  <ProjectCard
    title="LaunchPad — AI Productivity App"
    description="An AI-powered productivity and launch platform helping users organize, manage, and accelerate their projects with intelligent assistance."
    githubUrl="https://github.com/shreya661/launchpad"
    tags={["Python", "GenAI", "FastAPI", "AI Workflows"]}
    imgSrc="https://opengraph.githubassets.com/1/shreya661/launchpad"
    imgAlt="LaunchPad AI Productivity App"
  />
);

export const Card6 = () => (
  <ProjectCard
    title="Research AI"
    description="An AI research assistant that helps users explore, summarize, and synthesize academic papers and documents using RAG and LLMs."
    githubUrl="https://github.com/shreya661/researchai"
    tags={["Python", "RAG", "LangChain", "FAISS", "LLMs"]}
    imgSrc="https://opengraph.githubassets.com/1/shreya661/researchai"
    imgAlt="Research AI"
  />
);

export const Card7 = () => (
  <ProjectCard
    title="Social Media Sentiment Analysis"
    description="A beginner-friendly social media sentiment analysis project with rich visual insights, classifying posts by sentiment using NLP and ML models."
    githubUrl="https://github.com/shreya661/social_media_sentiment_analysis-"
    tags={["Python", "NLP", "Scikit-Learn", "Pandas", "Matplotlib"]}
    imgSrc="https://opengraph.githubassets.com/1/shreya661/social_media_sentiment_analysis-"
    imgAlt="Social Media Sentiment Analysis"
  />
);

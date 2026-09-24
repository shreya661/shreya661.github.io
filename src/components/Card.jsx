import React from "react";
import { motion } from "framer-motion";
import ImageWithLoader from "./ImageWithLoader";

import intervioImg from "../assets/projects/intervio.jpg";
import edubridgeImg from "../assets/projects/edubridge.jpg";
import navi360Img from "../assets/projects/navi360.jpg";
import journalaiImg from "../assets/projects/journalai.jpg";
import launchpadImg from "../assets/projects/launchpad.jpg";
import researchaiImg from "../assets/projects/researchai.jpg";
import sentimentImg from "../assets/projects/sentiment.jpg";

const iconMap = {
  Python: "https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png",
  FastAPI: "https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png",
  PostgreSQL: "https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png",
  PyTorch: "https://user-images.githubusercontent.com/25181517/183381117-498503b4-b4b7-4b80-a15e-56b97b6f9cc0.png",
  React: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  LangChain: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
  OpenAI: "https://user-images.githubusercontent.com/25181517/223639822-2a01e63a-a7f9-4a39-8930-61431541bc06.png",
  GenAI: "https://user-images.githubusercontent.com/25181517/223639822-2a01e63a-a7f9-4a39-8930-61431541bc06.png",
  LLMs: "https://user-images.githubusercontent.com/25181517/223639822-2a01e63a-a7f9-4a39-8930-61431541bc06.png",
  RAG: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
  NLP: "https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png",
  "Scikit-Learn": "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  Pandas: "https://user-images.githubusercontent.com/25181517/197845597-4a4d4397-df1e-4b54-8e73-15a7d4b05c0a.png",
  FAISS: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  Groq: "https://user-images.githubusercontent.com/25181517/223639822-2a01e63a-a7f9-4a39-8930-61431541bc06.png",
  FullStack: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
};

const badgeColors = [
  "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
];

const TechBadge = ({ name, index }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeColors[index % badgeColors.length]}`}>
    {iconMap[name] && (
      <img
        style={{ height: "16px", width: "16px", marginRight: "4px", objectFit: "contain" }}
        className="rounded-sm"
        src={iconMap[name]}
        alt={name}
      />
    )}
    {name}
  </span>
);

const CardItem = ({ title, description, image, alt, githubUrl, liveUrl, liveLabel = "Live Demo", tech }) => (
  <motion.div
    initial={"hidden"}
    whileInView={"visible"}
    whileHover={{ y: -10, transition: { duration: 0.3 } }}
    variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
    className="max-w-xl w-full md:w-[48%] bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-4 hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
  >
    <div>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <ImageWithLoader
          style={{ height: "260px", width: "100%", objectFit: "cover" }}
          className="rounded-t-lg w-full hover:opacity-90 transition-opacity duration-300"
          src={image}
          alt={alt}
        />
      </a>
      <div className="p-5">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <h5 className="project-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
            {title}
          </h5>
        </a>
        <p className="project-description mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div
          className="project-tech-stack mb-4"
          style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
        >
          {tech.map((t, idx) => (
            <TechBadge key={t} name={t} index={idx} />
          ))}
        </div>
      </div>
    </div>
    <div className="p-5 pt-0 flex gap-3">
      <a
        style={{ paddingLeft: "20px", paddingRight: "20px" }}
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="project-github-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors duration-300"
      >
        GitHub
      </a>
      {liveUrl && (
        <a
          style={{ paddingLeft: "20px", paddingRight: "20px" }}
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-deployed-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 transition-colors duration-300"
        >
          {liveLabel}
        </a>
      )}
    </div>
  </motion.div>
);

export const Card = () => (
  <CardItem
    title="IntervIO — AI Interview Platform"
    description="An automated AI interview intelligence platform that conducts real-time video/voice interviews, evaluates responses with LLMs, and provides candidate analytics."
    image={intervioImg}
    alt="IntervIO AI Interview Platform screenshot"
    githubUrl="https://github.com/shreya661/IntervIO"
    tech={["Python", "FastAPI", "LLMs", "PostgreSQL", "GenAI"]}
  />
);

export const Card2 = () => (
  <CardItem
    title="EduBridge — AI Human-Like School Assistant"
    description="An AI tutoring and student assistance platform designed to make academic support conversational, natural, and instantly accessible using LLMs and NLP."
    image={edubridgeImg}
    alt="EduBridge AI School Assistant screenshot"
    githubUrl="https://github.com/shreya661/EduBridge-AI-Human-Like-School-Assistant"
    tech={["Python", "LLMs", "NLP", "FastAPI", "GenAI"]}
  />
);

export const Card3 = () => (
  <CardItem
    title="NAVI 360 — AI Student & Career Platform"
    description="Full-stack student career guidance platform featuring interactive skill roadmaps, AI resume optimization, and personalized career path recommendations."
    image={navi360Img}
    alt="NAVI 360 AI Platform screenshot"
    githubUrl="https://github.com/shreya661/navi-360"
    tech={["JavaScript", "React", "Python", "FastAPI", "GenAI"]}
  />
);

export const Card4 = () => (
  <CardItem
    title="Journal AI — Smart Journaling App"
    description="Intelligent journaling web application that analyzes daily journal entries, detects emotional patterns, and provides personalized AI reflections and mental health trends."
    image={journalaiImg}
    alt="Journal AI screenshot"
    githubUrl="https://github.com/shreya661/Journal_AI"
    tech={["Python", "FastAPI", "React", "Groq", "PostgreSQL"]}
  />
);

export const Card5 = () => (
  <CardItem
    title="LaunchPad — AI Developer Productivity"
    description="AI developer acceleration platform providing intelligent task decomposition, automated deployment tracking, and sprint velocity analytics."
    image={launchpadImg}
    alt="LaunchPad screenshot"
    githubUrl="https://github.com/shreya661/launchpad"
    tech={["Python", "FastAPI", "LLMs", "GenAI"]}
  />
);

export const Card6 = () => (
  <CardItem
    title="Research AI — Academic Paper Synthesis"
    description="A multi-document RAG research assistant enabling users to query complex research papers, extract key findings, and visualize citation knowledge networks."
    image={researchaiImg}
    alt="Research AI screenshot"
    githubUrl="https://github.com/shreya661/researchai"
    tech={["Python", "RAG", "LangChain", "LLMs", "FAISS"]}
  />
);

export const Card7 = () => (
  <CardItem
    title="Social Media Sentiment Analysis"
    description="Natural language processing sentiment analytics system that classifies tweets and posts into positive, neutral, or negative emotion trends with visual dashboards."
    image={sentimentImg}
    alt="Sentiment Analysis screenshot"
    githubUrl="https://github.com/shreya661/social_media_sentiment_analysis-"
    tech={["Python", "NLP", "Scikit-Learn", "Pandas"]}
  />
);

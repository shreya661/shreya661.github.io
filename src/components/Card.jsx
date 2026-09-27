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

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ModernCardWrapper = ({
  imgSrc,
  alt,
  title,
  tag,
  metric,
  description,
  tech,
  githubLink,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -6, transition: { duration: 0.25 } }}
    className="group max-w-xl rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between my-4"
  >
    <div>
      <div className="relative h-52 w-full overflow-hidden bg-slate-950">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <ImageWithLoader
            style={{ height: "100%", width: "100%" }}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            src={imgSrc}
            alt={alt}
          />
        </a>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-3 left-3">
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md bg-black/60 text-white border border-white/10">
            {tag}
          </span>
        </div>
        {metric && (
          <div className="absolute bottom-3 left-3">
            <span className="text-[11px] font-medium text-slate-200 backdrop-blur-md bg-black/60 px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {metric}
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <h5 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2">
            {title}
          </h5>
        </a>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 mb-5">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {tech.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-0.5 rounded-full font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>

    <div className="p-6 pt-0">
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-700/80 dark:border-slate-600/80 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
      >
        <div className="flex items-center gap-2">
          <GitHubIcon />
          <span>Explore Repository</span>
        </div>
        <svg className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </motion.div>
);

// ─── Card 1: IntervIO ──────────────────────────────────────────────────────────
export const Card = () => (
  <ModernCardWrapper
    imgSrc={intervioImg}
    alt="IntervIO AI Interview Platform screenshot"
    title="IntervIO — AI Interview Platform"
    tag="AI Interview Simulation"
    metric="Real-time LLM feedback & scorecards"
    description="Automated AI interview platform that conducts real-time voice and video interviews, evaluates responses with LLMs, and provides structured candidate feedback."
    tech={["Python", "FastAPI", "PostgreSQL", "GenAI", "LLMs"]}
    githubLink="https://github.com/shreya661/IntervIO"
  />
);

// ─── Card 2: EduBridge ─────────────────────────────────────────────────────────
export const Card2 = () => (
  <ModernCardWrapper
    imgSrc={edubridgeImg}
    alt="EduBridge AI School Assistant screenshot"
    title="EduBridge — AI School Assistant"
    tag="EdTech AI"
    metric="Conversational 24/7 academic tutoring"
    description="An AI tutoring platform designed to make academic support conversational, natural, and instantly accessible using LLMs and NLP."
    tech={["Python", "FastAPI", "LLMs", "GenAI", "NLP"]}
    githubLink="https://github.com/shreya661/EduBridge-AI-Human-Like-School-Assistant"
  />
);

// ─── Card 3: NAVI 360 ──────────────────────────────────────────────────────────
export const Card3 = () => (
  <ModernCardWrapper
    imgSrc={navi360Img}
    alt="NAVI 360 screenshot"
    title="NAVI 360 — AI Career Guidance"
    tag="Career Tech"
    metric="Interactive skill roadmaps & resume scoring"
    description="Full-stack student career guidance platform featuring interactive skill roadmaps, AI resume feedback, and personalized development pathways."
    tech={["React", "JavaScript", "FastAPI", "GenAI"]}
    githubLink="https://github.com/shreya661/navi-360"
  />
);

// ─── Card 4: Journal AI ────────────────────────────────────────────────────────
export const Card4 = () => (
  <ModernCardWrapper
    imgSrc={journalaiImg}
    alt="Journal AI screenshot"
    title="Journal AI — Emotion-Aware Journaling"
    tag="Wellness AI"
    metric="Sentiment analytics & mindful reflections"
    description="Full-stack AI journaling application tracking emotional wellbeing, detecting sentiment, and delivering daily reflective guidance."
    tech={["Python", "FastAPI", "React", "PostgreSQL", "NLP"]}
    githubLink="https://github.com/shreya661/Journal_AI"
  />
);

// ─── Card 5: LaunchPad ─────────────────────────────────────────────────────────
export const Card5 = () => (
  <ModernCardWrapper
    imgSrc={launchpadImg}
    alt="LaunchPad screenshot"
    title="LaunchPad — AI Developer Productivity"
    tag="DevOps AI"
    metric="Automated sprint task decomposition"
    description="AI developer productivity platform with intelligent task decomposition, sprint analytics, and continuous delivery tracking."
    tech={["Python", "FastAPI", "GenAI", "PostgreSQL"]}
    githubLink="https://github.com/shreya661/launchpad"
  />
);

// ─── Card 6: Research AI ───────────────────────────────────────────────────────
export const Card6 = () => (
  <ModernCardWrapper
    imgSrc={researchaiImg}
    alt="Research AI screenshot"
    title="Research AI — Academic Paper Synthesis"
    tag="Research AI"
    metric="FAISS vector search & literature synthesis"
    description="AI research assistant that explores, summarizes, and synthesizes dense academic papers using LangChain and FAISS vector retrieval."
    tech={["Python", "LangChain", "LLMs", "FAISS"]}
    githubLink="https://github.com/shreya661/researchai"
  />
);

// ─── Card 7: Sentiment Analysis ────────────────────────────────────────────────
export const Card7 = () => (
  <ModernCardWrapper
    imgSrc={sentimentImg}
    alt="Sentiment Analysis screenshot"
    title="Sentiment NLP — Social Media Analytics"
    tag="NLP Analytics"
    metric="Real-time polarity & sentiment distribution"
    description="Real-time sentiment classification pipeline for social media data streams with NLP-driven polarity insights and interactive dashboards."
    tech={["Python", "Scikit-Learn", "Pandas", "NLP"]}
    githubLink="https://github.com/shreya661/social_media_sentiment_analysis-"
  />
);

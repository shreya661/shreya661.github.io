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

// ─── Card 1: IntervIO ──────────────────────────────────────────────────────────
export const Card = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
      className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-4 hover:shadow-2xl transition-shadow duration-300"
    >
      <a href="https://github.com/shreya661/IntervIO">
        <ImageWithLoader
          style={{ height: "300px", width: "100%" }}
          className="rounded-t-lg w-full hover:opacity-90 transition-opacity duration-300"
          src={intervioImg}
          alt="IntervIO AI Interview Platform screenshot"
        />
      </a>
      <div className="p-5">
        <a href="https://github.com/shreya661/IntervIO">
          <h5 className="project-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
            IntervIO — AI Interview Platform
          </h5>
        </a>
        <p className="project-description mb-3 font-normal text-gray-700 dark:text-gray-400">
          An automated AI interview platform that conducts real-time voice/video interviews, evaluates responses with LLMs, and provides structured candidate feedback.
        </p>
        <div className="project-tech-stack mb-4" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" alt="Python" />
            Python
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png" alt="FastAPI" />
            FastAPI
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png" alt="PostgreSQL" />
            PostgreSQL
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://user-images.githubusercontent.com/25181517/223639822-2a01e63a-a7f9-4a39-8930-61431541bc06.png" alt="GenAI" />
            GenAI
          </span>
        </div>
        <div className="flex gap-3">
          <a style={{ paddingLeft: "20px", paddingRight: "20px" }}
            href="https://github.com/shreya661/IntervIO"
            className="project-github-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors duration-300">
            Github
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Card 2: EduBridge ─────────────────────────────────────────────────────────
export const Card2 = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
      className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-4 hover:shadow-2xl transition-shadow duration-300"
    >
      <a href="https://github.com/shreya661/EduBridge-AI-Human-Like-School-Assistant">
        <ImageWithLoader
          style={{ height: "300px", width: "100%" }}
          className="rounded-t-lg w-full hover:opacity-90 transition-opacity duration-300"
          src={edubridgeImg}
          alt="EduBridge AI School Assistant screenshot"
        />
      </a>
      <div className="p-5">
        <a href="https://github.com/shreya661/EduBridge-AI-Human-Like-School-Assistant">
          <h5 className="project-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
            EduBridge — AI School Assistant
          </h5>
        </a>
        <p className="project-description mb-3 font-normal text-gray-700 dark:text-gray-400">
          An AI tutoring platform designed to make academic support conversational, natural, and instantly accessible using LLMs and NLP.
        </p>
        <div className="project-tech-stack mb-4" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" alt="Python" />
            Python
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://user-images.githubusercontent.com/25181517/223639822-2a01e63a-a7f9-4a39-8930-61431541bc06.png" alt="LLMs" />
            LLMs
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png" alt="FastAPI" />
            FastAPI
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://user-images.githubusercontent.com/25181517/223639822-2a01e63a-a7f9-4a39-8930-61431541bc06.png" alt="GenAI" />
            GenAI
          </span>
        </div>
        <div className="flex gap-3">
          <a style={{ paddingLeft: "20px", paddingRight: "20px" }}
            href="https://github.com/shreya661/EduBridge-AI-Human-Like-School-Assistant"
            className="project-github-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors duration-300">
            Github
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Card 3: NAVI 360 ──────────────────────────────────────────────────────────
export const Card3 = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
      className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-4 hover:shadow-2xl transition-shadow duration-300"
    >
      <a href="https://github.com/shreya661/navi-360">
        <ImageWithLoader
          style={{ height: "300px", width: "100%" }}
          className="rounded-t-lg w-full hover:opacity-90 transition-opacity duration-300"
          src={navi360Img}
          alt="NAVI 360 AI Student Platform screenshot"
        />
      </a>
      <div className="p-5">
        <a href="https://github.com/shreya661/navi-360">
          <h5 className="project-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
            NAVI 360 — AI Student & Career Platform
          </h5>
        </a>
        <p className="project-description mb-3 font-normal text-gray-700 dark:text-gray-400">
          Full-stack student career guidance platform featuring interactive skill roadmaps, AI resume optimization, and personalized career path recommendations.
        </p>
        <div className="project-tech-stack mb-4" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
            JavaScript
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" />
            React
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png" alt="FastAPI" />
            FastAPI
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://user-images.githubusercontent.com/25181517/223639822-2a01e63a-a7f9-4a39-8930-61431541bc06.png" alt="GenAI" />
            GenAI
          </span>
        </div>
        <div className="flex gap-3">
          <a style={{ paddingLeft: "20px", paddingRight: "20px" }}
            href="https://github.com/shreya661/navi-360"
            className="project-github-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors duration-300">
            Github
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Card 4: Journal AI ────────────────────────────────────────────────────────
export const Card4 = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
      className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-4 hover:shadow-2xl transition-shadow duration-300"
    >
      <a href="https://github.com/shreya661/Journal_AI">
        <ImageWithLoader
          style={{ height: "300px", width: "100%" }}
          className="rounded-t-lg w-full hover:opacity-90 transition-opacity duration-300"
          src={journalaiImg}
          alt="Journal AI screenshot"
        />
      </a>
      <div className="p-5">
        <a href="https://github.com/shreya661/Journal_AI">
          <h5 className="project-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
            AI Journaling App
          </h5>
        </a>
        <p className="project-description mb-3 font-normal text-gray-700 dark:text-gray-400">
          A full-stack journaling application that uses AI to analyze journal entries, detect sentiment, and provide meaningful personalized feedback.
        </p>
        <div className="project-tech-stack mb-4" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" alt="Python" />
            Python
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png" alt="FastAPI" />
            FastAPI
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" />
            React
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://user-images.githubusercontent.com/25181517/117208740-bfb78400-adf5-11eb-97bb-09072b6bedfc.png" alt="PostgreSQL" />
            PostgreSQL
          </span>
        </div>
        <div className="flex gap-3">
          <a style={{ paddingLeft: "20px", paddingRight: "20px" }}
            href="https://github.com/shreya661/Journal_AI"
            className="project-github-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors duration-300">
            Github
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Card 5: LaunchPad ─────────────────────────────────────────────────────────
export const Card5 = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
      className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-4 hover:shadow-2xl transition-shadow duration-300"
    >
      <a href="https://github.com/shreya661/launchpad">
        <ImageWithLoader
          style={{ height: "300px", width: "100%" }}
          className="rounded-t-lg w-full hover:opacity-90 transition-opacity duration-300"
          src={launchpadImg}
          alt="LaunchPad AI Productivity App screenshot"
        />
      </a>
      <div className="p-5">
        <a href="https://github.com/shreya661/launchpad">
          <h5 className="project-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
            LaunchPad — AI Productivity App
          </h5>
        </a>
        <p className="project-description mb-3 font-normal text-gray-700 dark:text-gray-400">
          An AI-powered developer productivity platform with intelligent task decomposition, automated deployment tracking, and sprint velocity analytics.
        </p>
        <div className="project-tech-stack mb-4" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" alt="Python" />
            Python
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://user-images.githubusercontent.com/25181517/223639822-2a01e63a-a7f9-4a39-8930-61431541bc06.png" alt="GenAI" />
            GenAI
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png" alt="FastAPI" />
            FastAPI
          </span>
        </div>
        <div className="flex gap-3">
          <a style={{ paddingLeft: "20px", paddingRight: "20px" }}
            href="https://github.com/shreya661/launchpad"
            className="project-github-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors duration-300">
            Github
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Card 6: Research AI ───────────────────────────────────────────────────────
export const Card6 = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
      className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-4 hover:shadow-2xl transition-shadow duration-300"
    >
      <a href="https://github.com/shreya661/researchai">
        <ImageWithLoader
          style={{ height: "300px", width: "100%" }}
          className="rounded-t-lg w-full hover:opacity-90 transition-opacity duration-300"
          src={researchaiImg}
          alt="Research AI screenshot"
        />
      </a>
      <div className="p-5">
        <a href="https://github.com/shreya661/researchai">
          <h5 className="project-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
            Research AI
          </h5>
        </a>
        <p className="project-description mb-3 font-normal text-gray-700 dark:text-gray-400">
          An AI research assistant that helps users explore, summarize, and synthesize academic papers and documents using LLMs and NLP.
        </p>
        <div className="project-tech-stack mb-4" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" alt="Python" />
            Python
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://avatars.githubusercontent.com/u/126733545?s=200&v=4" alt="LangChain" />
            LangChain
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://user-images.githubusercontent.com/25181517/223639822-2a01e63a-a7f9-4a39-8930-61431541bc06.png" alt="LLMs" />
            LLMs
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" alt="FAISS" />
            FAISS
          </span>
        </div>
        <div className="flex gap-3">
          <a style={{ paddingLeft: "20px", paddingRight: "20px" }}
            href="https://github.com/shreya661/researchai"
            className="project-github-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors duration-300">
            Github
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Card 7: Sentiment Analysis ────────────────────────────────────────────────
export const Card7 = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
      className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-4 hover:shadow-2xl transition-shadow duration-300"
    >
      <a href="https://github.com/shreya661/social_media_sentiment_analysis-">
        <ImageWithLoader
          style={{ height: "300px", width: "100%" }}
          className="rounded-t-lg w-full hover:opacity-90 transition-opacity duration-300"
          src={sentimentImg}
          alt="Social Media Sentiment Analysis screenshot"
        />
      </a>
      <div className="p-5">
        <a href="https://github.com/shreya661/social_media_sentiment_analysis-">
          <h5 className="project-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
            Social Media Sentiment Analysis
          </h5>
        </a>
        <p className="project-description mb-3 font-normal text-gray-700 dark:text-gray-400">
          A beginner-friendly social media sentiment analysis project with rich visual insights, classifying posts by sentiment using NLP and ML models.
        </p>
        <div className="project-tech-stack mb-4" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" alt="Python" />
            Python
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="Scikit-Learn" />
            Scikit-Learn
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" />
            Pandas
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            <img style={{ height: "16px", width: "16px", marginRight: "4px" }} className="rounded-sm" src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" alt="NLP" />
            NLP
          </span>
        </div>
        <div className="flex gap-3">
          <a style={{ paddingLeft: "20px", paddingRight: "20px" }}
            href="https://github.com/shreya661/social_media_sentiment_analysis-"
            className="project-github-link inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors duration-300">
            Github
          </a>
        </div>
      </div>
    </motion.div>
  );
};

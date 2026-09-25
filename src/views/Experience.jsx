import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Experience = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const experienceData = [
    {
      company: "UpToSkills",
      title: "AIML Team Lead Intern",
      duration: "May 2026 – Present",
      location: "Remote",
      description: "Leading cross-functional AI/ML and analytics intern teams. Responsible for overseeing internship workflows, task coordination, attendance tracking, and submission management to ensure high-quality and timely delivery.",
      responsibilities: [
        "Oversaw task management, scheduling, attendance, and submission workflows across multiple AI/ML and analytics intern teams",
        "Coordinated AI/ML technical execution and supported interns in building practical generative AI and machine learning projects",
        "Maintained structured communication channels and ensured alignment on project milestones and quality standards",
        "Worked on intern performance analysis using structured data and automated coaching feedback workflows"
      ]
    },
    {
      company: "UpToSkills",
      title: "AIML Intern",
      duration: "March 2026 – April 2026",
      location: "Remote",
      description: "Developed SkillNova, an AI-powered conversational support platform for real-time intern guidance and query resolution using LLMs, FastAPI, and automated prompt workflows.",
      responsibilities: [
        "Built SkillNova — an AI support chatbot designed for real-time intern Q&A and technical guidance",
        "Implemented LLM API integrations, structured prompt engineering workflows, and response optimization",
        "Designed and deployed FastAPI backend with PostgreSQL integration for chatbot session management",
        "Explored and implemented practical LLM pipelines using LangChain and Groq API"
      ]
    }
  ];

  return (
    <div
      id="experience"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 pt-16 pb-8">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          <p className="text-5xl font-bold border-b-4 border-blue-500 p-2 inline">
            Experience
          </p>
        </h2>

        <h4 className="mt-8 text-3xl font-semibold text-blue-600">
          Professional Journey
        </h4>

        <div className="mt-8 space-y-8">
          {experienceData.map((job, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { type: "spring", delay: index * 0.2 },
                },
                hidden: { opacity: 0, y: 50 },
              }}
              className={`relative pl-8 pb-8 ${
                index !== experienceData.length - 1 ? "border-l-2 border-blue-500" : ""
              }`}
            >
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">{job.title}</h3>
                    <h4 className="text-xl font-semibold mb-1">{job.company}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {job.duration} • {job.location}
                    </p>
                  </div>
                </div>
                {job.description && (
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {job.description}
                  </p>
                )}
                <ul className="space-y-3">
                  {job.responsibilities.map((r, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1 text-lg">•</span>
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
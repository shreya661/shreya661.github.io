import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

// Replace with local image import once photo is added to src/assets/ShreyaPatha.jpg
const ShreyaPatha = "https://avatars.githubusercontent.com/u/shreya661?v=4";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      id="about"
      className={darkMode === true ? "bg-white" : "bg-gray-900"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-16 pb-8 ">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center "
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          <p className="about section text-5xl font-bold border-b-4 border-blue-500 p-2 inline">
            About
          </p>
        </h2>
        <div>
          <motion.div>
            <div
              style={{
                margin: "auto",
                marginTop: "20px",
                borderRadius: "25px",
              }}
            >
              <motion.img
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { type: "spring" },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                src={ShreyaPatha}
                alt="Shreya Patha"
                style={{
                  width: "280px",
                  margin: "auto",
                  border: "2px solid black",
                  borderRadius: "22px",
                }}
                className="home-img hidden sm:block"
              />
            </div>

            <p
              id="user-detail-intro"
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              I'm a <strong>Computer Science & Engineering graduate specializing in Artificial Intelligence & Machine Learning</strong>, with hands-on experience building Generative AI applications, RAG systems, LLM pipelines, computer vision models, and backend APIs. I served as an <strong>AIML Team Lead Intern at UpToSkills</strong>, where I led cross-functional intern teams, coordinated AI/ML technical execution, and built <strong>SkillNova</strong> — a production-grade RAG-based chatbot for real-time intern support.
              <br /><br />
              I enjoy turning ideas into working products — from understanding the problem, collecting and processing data, to integrating LLMs, building APIs, and connecting everything into a usable AI-powered application. Currently focused on growing as an <strong>AI Engineer</strong> with deep interest in <strong>LLM applications, Agentic Workflows, RAG architectures, backend development, and practical AI systems</strong>.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;

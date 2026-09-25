import React, { useContext } from "react";
import heroBg from "../assets/webdev.svg";
import Typical from "react-typical";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import cloud from "../assets/cloudBg.png";
import cloudDark from "../assets/cloudDark.png";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        id="home"
        style={
          darkMode
            ? { backgroundImage: `url('${cloud}')`, backgroundSize: "cover" }
            : { backgroundImage: `url('${cloudDark}')`, backgroundSize: "cover" }
        }
      >
        <main className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between min-h-[80vh] py-16">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <motion.span className={darkMode ? "block text-black" : " text-white"}>
                Hi, I am Shreya Patha
              </motion.span>
              <span className="block text-blue-500 z-0 lg:inline ">
                <Typical
                  steps={[
                    "Generative AI Developer",
                    500,
                    "AI/ML Engineer",
                    500,
                    "RAG Systems Builder",
                    500,
                    "Backend Developer",
                    500,
                  ]}
                  loop={Infinity}
                />
              </span>
            </h1>
            <div className="flex md:justify-start ">
              {contactLinks.map((el) => (
                <a
                  key={el.name}
                  href={el.link}
                  className="mr-5 cursor-pointer mt-8 hover:scale-125"
                >
                  <img alt={`${el.name} icon`} src={el.url} />
                </a>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                <a
                  id="resume-button-2"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                  href="/Shreya_Patha_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Resume</p>
                </a>
              </div>
            </div>
          </div>
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
            src={heroBg}
            alt="Hero background illustration"
            className="md:w-3/6 hidden sm:block"
          />
        </main>
      </div>
    </>
  );
};

export default Home;

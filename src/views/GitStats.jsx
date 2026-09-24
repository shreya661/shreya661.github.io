import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";

const GitStats = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 pt-16 pb-8">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          <p className="text-5xl font-bold border-b-4 border-blue-500 p-2 inline">
            GitHub
          </p>
        </h2>
        <div className="flex justify-center mt-6">
          <p className="text-3xl font-semi-bold border-b-2 border-blue-500 p-2 inline">
            GitHub Calendar
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <img
            className="w-full"
            src="https://ghchart.rshah.org/shreya661"
            alt="shreya661-calendar"
          />
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          <div className="flex flex-col items-center">
            <p className="text-3xl font-semi-bold border-b-2 border-blue-500 p-2 inline">
              GitHub Streak Stats
            </p>
            <img
              id="github-streak-stats"
              src="https://streak-stats.demolab.com/?user=shreya661&theme=radical"
              alt="shreya661-streak"
              className="mt-6"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-3xl font-semi-bold border-b-2 border-blue-500 p-2 inline">
              GitHub Stats Card
            </p>
            <img
              id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api?username=shreya661&show_icons=true&theme=radical"
              alt="shreya661-stats"
              className="mt-6"
            />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <img
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=shreya661&layout=compact&theme=radical"
            alt="shreya661-top-langs"
          />
        </div>
      </div>
    </div>
  );
};

export default GitStats;

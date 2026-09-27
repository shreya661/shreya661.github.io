import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../themeProvider";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  const darkMode = theme.state.darkMode;

  const links = [
    { name: "Home", route: "home" },
    { name: "About", route: "about" },
    { name: "Skills", route: "skills" },
    { name: "Projects", route: "projects" },
    { name: "Experience", route: "experience" },
    { name: "Education", route: "education" },
    { name: "Contact", route: "contact" },
  ];

  function toggleTheme() {
    if (darkMode === true) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  }

  return (
    <>
      <nav
        id="nav-menu"
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300 border-b ${
          darkMode
            ? "bg-white/80 border-gray-200/60 shadow-sm"
            : "bg-gray-900/80 border-gray-800/80 shadow-md shadow-black/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Brand Logo */}
            <Link
              to="home"
              id="user-detail-name"
              offset={-80}
              duration={500}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform duration-200">
                SP
              </div>
              <span
                className={`text-lg font-bold tracking-tight transition-colors duration-200 ${
                  darkMode ? "text-gray-900 group-hover:text-blue-600" : "text-white group-hover:text-blue-400"
                }`}
              >
                Shreya Patha
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              <ul className="flex items-center space-x-1">
                {links.map((el) => (
                  <li key={el.name}>
                    <Link
                      to={el.route}
                      activeClass={darkMode ? "text-blue-600 bg-blue-50 font-semibold" : "text-blue-400 bg-gray-800 font-semibold"}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className={`cursor-pointer px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                        darkMode
                          ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100/70"
                          : "text-gray-300 hover:text-white hover:bg-gray-800/60"
                      }`}
                    >
                      {el.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Action Buttons: Resume & Theme Toggle */}
              <div className="flex items-center gap-3 pl-3 ml-2 border-l border-gray-200 dark:border-gray-800">
                <a
                  id="resume-button-1"
                  href="https://drive.google.com/file/d/1htVbT1gcmGuBXM89QU6J30J050oHMWmK/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Resume
                </a>

                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle Theme"
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 border ${
                    darkMode
                      ? "bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200"
                      : "bg-gray-800 border-gray-700 text-yellow-400 hover:bg-gray-700"
                  }`}
                >
                  {darkMode ? (
                    // Moon Icon for switching to dark
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  ) : (
                    // Sun Icon for switching to light
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="5" />
                      <line x1="12" y1="1" x2="12" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="23" />
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                      <line x1="1" y1="12" x2="3" y2="12" />
                      <line x1="21" y1="12" x2="23" y2="12" />
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Hamburger & Theme Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
                  darkMode
                    ? "bg-gray-100 border-gray-200 text-gray-700"
                    : "bg-gray-800 border-gray-700 text-yellow-400"
                }`}
              >
                {darkMode ? (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                ) : (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                  </svg>
                )}
              </button>
              <Hamburger
                toggled={toggle}
                size={20}
                duration={0.5}
                toggle={setToggle}
                color={darkMode ? "#111827" : "#ffffff"}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`fixed top-16 left-0 right-0 z-40 p-4 border-b shadow-xl backdrop-blur-2xl md:hidden ${
              darkMode
                ? "bg-white/95 border-gray-200 text-gray-900"
                : "bg-gray-900/95 border-gray-800 text-white"
            }`}
          >
            <ul className="flex flex-col space-y-1.5">
              {links.map((el) => (
                <li key={el.name}>
                  <Link
                    to={el.route}
                    offset={-80}
                    duration={500}
                    spy={true}
                    smooth={true}
                    onClick={() => setToggle(false)}
                    className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      darkMode ? "hover:bg-gray-100" : "hover:bg-gray-800"
                    }`}
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="https://drive.google.com/file/d/1htVbT1gcmGuBXM89QU6J30J050oHMWmK/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-500/25"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

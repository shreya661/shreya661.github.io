import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();
const initialState = { darkMode: true };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: false };
    case "DARKMODE":
      return { darkMode: true };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  React.useEffect(() => {
    if (!state.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [state.darkMode]);

  return (
    <ThemeContext.Provider
      value={{ state, dispatch }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

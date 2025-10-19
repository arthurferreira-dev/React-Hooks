import { useState } from "react";
import { ThemeContext } from "./contexts/context";
import Message from "./contexts/message";
import Gretting from "./contexts/gretting";

function UseContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      return setTheme("dark");
    }

    return setTheme("light");
  };

  return (
    <div className="w-screen h-screen bg-slate-500 flex flex-col flex-wrap justify-center items-center gap-4">
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
        </ThemeContext.Provider>
    </div>
  );
}

export default function UseContextApp() {
    return (
        <UseContextProvider>
          <Message/>
          <Gretting/>
        </UseContextProvider>
    );
}
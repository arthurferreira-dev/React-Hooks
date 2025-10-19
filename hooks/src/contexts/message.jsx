import { useContext } from "react";
import { ThemeContext } from "./context";

export default function Message() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`p-[20px] rounded-[10px] flex flex-col flex-wrap justify-center items-center gap-3 ${theme === "light" ? "bg-white text-black" : "bg-[hsl(0,0%,20%)] text-white"}`}
      >
        <h1 className="text-lg font-medium">
          Current Theme: <span className="font-semibold">{theme}</span>
        </h1>
        <button
          className="bg-violet-800 text-white p-2 rounded-full w-[175px] duration-300 hover:bg-violet-900 hover:cursor-pointer"
          onClick={() => toggleTheme()}
        >
          Toogle Theme
        </button>
      </div>
    </>
  );
}
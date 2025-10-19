import { useContext } from "react";
import { ThemeContext } from "./context";

export default function Gretting() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`p-[20px] rounded-[10px] ${theme === "light" ? "bg-white text-black" : "bg-[hsl(0,0%,20%)] text-white"}`}
      >
        <h1 className="text-lg font-semibold">Testing Theme...</h1>
      </div>
    </>
  );
}
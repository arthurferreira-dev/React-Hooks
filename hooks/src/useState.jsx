import { useState } from "react";

export default function UseStateApp() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("text-3xl font-bold bg-white p-3 rounded-md text-black");
  const [click, setClick] = useState(true)
  const incrementCount = () => {
    setCount((prevState) => prevState + 1); // prevState porque se fosse count seria tipo "0 + 1" e não por exemplo "6 + 1"
    setClick(!click);
    !click ? setTheme("text-3xl font-bold bg-black p-3 rounded-md text-white") : setTheme("text-3xl font-bold bg-white p-3 rounded-md text-black")
    // Não pode se colocar um Hook dentro de um if ou function...
  }

  return (
    <div className="w-screen h-screen flex flex-col flex-wrap justify-center items-center gap-4">
      <h1 className={theme}>
        {count}
      </h1>
      <button className="p-2 bg-green-500 duration-300 rounded-md text-lg hover:bg-green-600 hover:cursor-pointer" onClick={incrementCount}>
        Increment
      </button>
    </div>
  );
}
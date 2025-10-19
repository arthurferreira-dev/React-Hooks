import { useState, useMemo } from "react";

// Se você tiver uma aplicação que estiver com problema na performace use o useMemo, se não tiver não use pois trará problemas na memória

export default function UseMemoApp() { // O useMemo é usado para problemas de performaces da aplicação
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("");

  useMemo(() => {
    slowFunction(number);
  }, [number]);

  return (
    <div className="w-screen h-screen text-white flex flex-col flex-wrap justify-center items-center gap-4 text-lg bg-slate-500">
      <p>{number}</p>
      <input
        type="text"
        className="bg-white text-black px-4 py-2 font-mono rounded-full w-[200px]"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <p>texto: {text}</p>
      <br />
      <button
        className="bg-gray-700 text-white font-semibold rounded-full p-2 w-[350px] duration-300 hover:cursor-pointer hover:bg-gray-800"
        onClick={() => setNumber((eventPrevent) => eventPrevent + 1)}
      >
        Increment Number in the Top
      </button>
    </div>
  );
}

const slowFunction = (num) => {
  console.info("Slow function is being called!");
  for (let f = 0; f <= 10000; f++) {} // problema da performace
  return num * 2;
};
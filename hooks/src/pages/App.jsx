export default function App() {
  const hooks = [
    { id: 1, hook: "useState", path: "/useState" },
    { id: 2, hook: "useEffect", path: "/useEffect" },
    { id: 3, hook: "useRef", path: "/useRef" },
    { id: 4, hook: "useReducer", path: "/useReducer" },
    { id: 5, hook: "useContext", path: "/useContext" },
    { id: 6, hook: "useMemo", path: "/useMemo" },
    { id: 7, hook: "useCallback", path: "/useCallback" },
    { id: 8, hook: "useLayoutEffect", path: "/useLayoutEffect" },
  ];

  const handleWindowHref = (location) => {
    return (window.location.href = location);
  };

  return (
    <div className="w-screen h-screen flex flex-col flex-wrap gap-3 justify-center items-center">
      <h1 className="text-center text-xl font-semibold">
        Veja os exemplos dos <span className="underline">Hooks do React</span>
      </h1>
      <ul className="list-disc font-semibold">
        {hooks.map((hook) => (
          <li
            key={hook.id}
            onClick={() => handleWindowHref(hook.path)}
            className="text-xl underline my-[6px] hover:cursor-pointer hover:no-underline"
          >
            {hook.hook}
          </li>
        ))}
      </ul>
    </div>
  );
}

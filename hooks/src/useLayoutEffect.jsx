import { useLayoutEffect, useRef, useState } from "react";

/*
    useEffect vs useLayoutEffect
    O useEffect só será executado DEPOIS QUE O DOM for montado, já o useLayoutEffect será executado ANTES DO DOM for montado pelo React
*/

export default function UseLayoutEffectApp() {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();

  useLayoutEffect(() => {
    if (!popup.current || !button.current) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 25}px`
  }, [show]);

  return (
    <>
      <button
        className="rounded-full mt-4 w-[222px] bg-gray-600 text-white font-semibold p-2"
        ref={button}
        onClick={() => setShow((prev) => !prev) }
      >
        Toggle Modal
      </button>
      {show &&
        <div className="absolute" ref={popup}>Modal Shows!</div>
      }
    </>
  );
}
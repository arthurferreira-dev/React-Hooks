import { useEffect, useState, useRef } from "react";

export default function UseRefApp() {
    const [name, setName] = useState("");
    
    /*
    const renders = useRef(0);

    useEffect(() => {
        renders.current = renders.current + 1
    });
    <p className="font-[Zalando_Sans]">Renders: {renders.current}</p>

        O useRef armazena o elemento html
        A gente pode acessar todas as propriedades do elemento

    const inputRef = useRef();
    const focusInput = () => {
        inputRef.current.focus(); // Acessando a propriedade focus do input via useRef
    }
    <button className="bg-green-500 p-2 rounded-md duration-300 hover:cursor-pointer hover:bg-green-600" onClick={focusInput}>Focus Input</button>
    */

    const previousName = useRef();

    useEffect(() => {
        previousName.current = name
    }, [name]);

    return (
        <div className="w-screen h-screen flex flex-col flex-wrap justify-center items-center gap-4">
            <input className="border-2 border-black rounded-md p-1" type="text" value={name} onChange={(event) => setName(event.target.value)}/>
            <p className="font-[Zalando_Sans]">Hello! My name is <em className="italic">{name}</em></p>
            <p className="font-[Zalando_Sans]">And my name is {previousName.current}</p>
        </div>
    );
}
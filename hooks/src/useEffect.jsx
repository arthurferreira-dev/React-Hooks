import { useState, useEffect } from "react";

export default function UseEffectApp() {
    const [items, setItems] = useState([]);
    const [resourceType, setResourceType] = useState("posts");

    const changeResourceType = (resourceType) => {
        setResourceType(resourceType);
    }

    const ButtonsCL = 'p-2 border-black border-t-2 border-b-2 text-center hover:cursor-pointer'

    useEffect(() => { // Não é possível deixar o useEffect como async function
        const fetchResourceTypes = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);
            const responseJSON = await response.json()
            setItems(responseJSON)
        }
        fetchResourceTypes();
    }, [resourceType]); //  ele só executa quando passamos um valor na lista || Se não passarmos nada na lista ele executa quando um componente for renderizado.

    useEffect(() => {
        // componentDidMount
        console.log('componentDidMount');

        return () => {
            // componentWillUnmount
            console.log('componentWillUnmount');
        }
    }, []);

    return (
        <div className="w-screen h-screen flex flex-col flex-wrap justify-center items-center gap-7">
            <h1 className="text-3xl font-bold">{resourceType}</h1>
            <div className="flex items-center">
                <button onClick={() => changeResourceType("posts")} className={`border-r-2 border-l-2 rounded-tl-md rounded-bl-md ${ButtonsCL}`}>
                    Posts                    
                </button>
                <button onClick={() => changeResourceType("comments")} className={ButtonsCL}>
                    Comments
                </button>
                <button onClick={() => changeResourceType("todos")} className={`border-l-2 border-r-2 rounded-tr-md rounded-br-md ${ButtonsCL}`}>
                    Todos
                </button>
            </div>
            <div className="grid grid-cols-50 gap-3 text-center">
                {items.map((item) => { return <p>{item.id}</p> })}
            </div>
        </div>
    );
}
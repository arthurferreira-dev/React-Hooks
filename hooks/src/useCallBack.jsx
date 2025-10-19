import { useCallback, useState } from "react";
import { List } from "./callback/List";

export default function UseCallBack() {
  const [text, setText] = useState("");
  const [resourceType, setResourceType] = useState("posts");
  const resourcesTypes = [
    { id: 1, type: "posts", resource: "Posts" },
    { id: 2, type: "comments", resource: "Comments" },
    { id: 3, type: "todos", resource: "Todos" },
  ];

  const getItems = useCallback(async () => { // O getItems só é recriada quando o resourceType mudar
    console.log("getItems is being called!");
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${resourceType}`
    );
    const json = await response.json();
    return json;
  }, [resourceType]);

  return (
    <div>
      <input
        type="text"
        className="border-2 border-black p-1 font-mono text-black"
        value={text}
        onChange={(ev) => setText(ev.target.value)}
      />
      {resourcesTypes.map((resourceType) => (
        <button
          key={resourceType.id}
          onClick={() => setResourceType(resourceType.type)}
          className="p-2 mr-2 bg-gray-800 text-white hover:cursor-pointer"
        >
          {resourceType.resource}
        </button>
      ))}
      <List getItems={getItems} />
    </div>
  );
}
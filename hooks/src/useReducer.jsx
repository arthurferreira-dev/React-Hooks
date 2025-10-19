import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add-task":
      return {
        ...state,
        tasks: [...state.tasks, { name: action.payload, isCompleted: false }],
        tasksCount: state.tasksCount + 1,
      };
    case "toogle-task":
      return {
        ...state,
        tasks: state.tasks.map((item, index) =>
          index === action.payload
            ? { ...item, isCompleted: !item.isCompleted }
            : item
        ),
      };
    default:
      return state;
  }
  /*
            case 'increment':
                return {
                    ...state,
                    counter: state.counter + 1
                }
            case 'decrement':
                return {
                    ...state,
                    counter: state.counter - 1
                }
        */
};

/*
    Use o useReducer quando seu useState tiver complexo
    Você pode usar os dois em conjuntos, que é muito bom!
*/

export default function UseReducerApp() {
  const [state, dispatch] = useReducer(reducer, { tasks: [], tasksCount: 0 });
  const [inputValue, setInputValue] = useState("");

  const Buttons = (props) => {
    return (
      <button
        className="bg-green-500 w-[150px] p-2 text-center rounded-md duration-300 hover:bg-green-600 hover:cursor-pointer"
        {...props}
      >
        {props.children}
      </button>
    );
  };
  console.info("Task adicionada:", state.tasksCount);

  return (
    // <Buttons onClick={() => dispatch({ type: "decrement" })}>Decrement</Buttons>
    <div className="w-screen h-screen flex flex-col flex-wrap justify-center gap-6 items-center">
      <h1 className="text-2xl font-bold">{state.counter}</h1>
      <div className="flex gap-4">
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          className="border-black rounded-md p-1 border-2 font-mono"
        />
        <Buttons
          onClick={() => {
            dispatch({ type: "add-task", payload: inputValue });
            setInputValue("");
          }}
        >
          Adicionar
        </Buttons>
      </div>
      {state.tasks.map((task, index) => (
        <p
          className={`font-mono hover:cursor-pointer ${
            task.isCompleted ? "line-through" : "no-underline"
          }`}
          onClick={() => dispatch({ type: "toogle-task", payload: index })}
        >
          {task.name}
        </p>
      ))}
    </div>
  );
}

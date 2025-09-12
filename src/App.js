import './App.css';
import {useReducer} from "react";
import {TodoGroup} from "./components/TodoGroup";
import {TodoContext} from "./contexts/TodoContext";
import {todoReducer} from "./reducers/TodoReducer";
import {TodoList} from "./components/TodoList";
import {TodoGenerator} from "./components/TodoGenerator";

export const initState = [
    {id: 1, text: "the first todo", done: false},
    {id: 2, text: "the second todo", done: true},
];

function App() {
    const [state, dispatch] = useReducer(todoReducer, initState);
    return (
        <div>
            <h1>TODO list</h1>
            <TodoContext.Provider value={{state, dispatch}}>
                <TodoList />
            </TodoContext.Provider>
        </div>
    );
}

export default App;
import './App.css';
import {useReducer} from "react";
import {TodoGroup} from "./components/TodoGroup";
import {TodoContext as TodoContext1} from "./contexts/TodoContext";
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
            <TodoContext1.Provider value={{state, dispatch}}>
                <TodoList>
                    <TodoGroup/>
                    <TodoGenerator/>
                </TodoList>

            </TodoContext1.Provider>
        </div>
    );
}

export default App;
import './App.css';
import {useReducer} from "react";
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {TodoList} from "./components/TodoList";

export const initState = [

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
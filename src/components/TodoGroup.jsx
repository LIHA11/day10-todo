import {useContext} from "react";
import {TodoItem} from "./TodoItem";
import './TodoGroup.css';

import {TodoContext} from "../contexts/TodoContext";


export function TodoGroup() {
    const {state, dispatch} = useContext(TodoContext)

function deleteItem(id, done) {
    if (!done) {
        alert("You can only delete a task that is marked as done.");
        return;
    }
    dispatch({ type: "DELETE_TODO", payload: { id } });
}

    return <div>
        {
            state.map((item, index) => {
                return <div className={"todo-group"} key={index}>
                    <TodoItem todo={item} key={index} index={index}/>
                    <button onClick={() => deleteItem(item.id, item.done)}>X</button>
                </div>
            })
        }
    </div>
}
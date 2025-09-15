import {useContext} from "react";
import './ToDoItem.css';

import {TodoContext} from "../contexts/TodoContext";
import {api} from "../api/mockApi";

export function ToDoItem(props) {
    const {dispatch} = useContext(TodoContext)

    function makeAsDone() {
        api.put(`/todos/${props.todo.id}`, {
            ...props.todo,
            done: !props.todo.done
        })
            .then(res => res.data)
            .then(updatedTodo => {
                dispatch({
                    type: "TOGGLE_TODO",
                    payload: {id: updatedTodo.id}
                });
            })
    }

    return <div className={"todo-item"}>
        <span
            className={props.todo.done ? "todo-done" : ""}
            onClick={makeAsDone}
        >
            {props.todo.text}
        </span>
    </div>
}
import {useContext} from "react";
import './ToDoItem.css';
import {TodoContext} from "../contexts/TodoContext";
import {useTodoService} from "../useTodoService";



export function ToDoItem(props) {
    const {dispatch} = useContext(TodoContext)
    const {putTodo}  = useTodoService()


    function toggleTodo() {
        putTodo(props)
            .then(todo => {
                dispatch({
                    type: "UPDATE_TODO",
                    payload: todo
                });
            })
    }

    return <div className={"todo-item"}>
        <span
            className={props.todo.done ? "todo-done" : ""}
            onClick={toggleTodo}
        >
            {props.todo.text}
        </span>
    </div>
}
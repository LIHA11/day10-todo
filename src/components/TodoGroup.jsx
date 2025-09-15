import {useContext} from "react";
import {ToDoItem} from "./ToDoItem";
import './TodoGroup.css';
import {TodoContext} from "../contexts/TodoContext";
import {useNavigate} from "react-router";
import {useTodoService} from "../useTodoService";


export function TodoGroup() {
    const {state, dispatch} = useContext(TodoContext)
    const navigate = useNavigate();
    const{deleteTodo} = useTodoService();


function detailItem(id, done) {
        navigate(`/todos/${id}`);
    }

function deleteItem(id, done) {
    if (!done) {
        alert("You can only delete a task that is marked as done.");
        return;
    }

    deleteTodo(id)
        .then(() => {
            dispatch({ type: "DELETE_TODO", payload: { id } });
        })
        .catch(err => console.error("Failed to delete todo:", err));
}

    return <div>
        {
            state.map((item, index) => {
                return <div className={"todo-group"} key={index}>
                    <ToDoItem todo={item} key={index} index={index}/>
                    <button onClick={() => deleteItem(item.id, item.done)}>X</button>
                    <button onClick={() => detailItem(item.id, item.done)}>detail</button>
                </div>
            })
        }
    </div>
}
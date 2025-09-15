import {useContext} from "react";
import {ToDoItem} from "./ToDoItem";
import './TodoGroup.css';
import {TodoContext} from "../contexts/TodoContext";
import {useNavigate} from "react-router";



export function TodoGroup() {
    const {state, dispatch} = useContext(TodoContext)
    const navigate = useNavigate();


function detailItem(id, done) {
        navigate(`/todos/${id}`);
    }

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
                    <ToDoItem todo={item} key={index} index={index}/>
                    <button onClick={() => deleteItem(item.id, item.done)}>X</button>
                    <button onClick={() => detailItem(item.id, item.done)}>detail</button>
                </div>
            })
        }
    </div>
}